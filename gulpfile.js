'use strict'

const fs = require('fs')
const gulp = require('gulp')
const packager = require('electron-packager')
const mocha = require('gulp-mocha')
const config = JSON.parse(fs.readFileSync('package.json'))
const appVersion = config.version
const electronVersion = config.devDependencies['electron-prebuilt'].match(/[\d.]+/)[0]
const eslint = require('gulp-eslint')

const options = {
  asar: true,
  dir: '.',
  icon: '',
  name: 'GReader',
  out: 'dist',
  overwrite: true,
  prune: true,
  version: electronVersion,
  'app-version': appVersion
}

gulp.task('build:osx', (done) => {
  options.arch = 'x64'
  options.platform = 'darwin'
  options['app-bundle-id'] = 'com.guohr.greader'
  options['helper-bundle-id'] = 'com.guohr.greader.helper'

  packager(options, (err, paths) => {
    if (err) {
      console.error(err)
    }

    done()
  })
})

gulp.task('build:linux', () => {
  // @TODO
})

gulp.task('build:windows', () => {
  // @TODO
})

gulp.task('build', ['build:osx', 'build:linux', 'build:windows'])

// lint

gulp.task('lint:js', () => {
  return gulp.src(['*.js', 'test/*.js', 'app/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
})

gulp.task('lint', ['lint:js'])

gulp.task('test', () => {
  return gulp.src('test/test.js', {read: false})
    // gulp-mocha needs filepaths so you can't have any plugins before it
    .pipe(mocha({reporter: 'nyan'}))
})

gulp.task('default', ['lint', 'test'])

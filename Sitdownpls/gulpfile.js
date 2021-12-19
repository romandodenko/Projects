const { src, dest, series, watch } = require("gulp")
const concat = require("gulp-concat")
const htmlMin = require("gulp-htmlmin")
const autoprefixes = require("gulp-autoprefixer")
const cleanCSS = require("gulp-clean-css")
const image = require("gulp-image")
const uglify = require("gulp-uglify-es").default
const babel = require("gulp-babel")
const sass = require('gulp-sass')(require('sass'));
const notify = require("gulp-notify")
const ttf2woff = require("gulp-ttf2woff")
const ttf2woff2 = require("gulp-ttf2woff2")
const sourcemaps = require("gulp-sourcemaps")
const del = require("del")
const browserSync = require("browser-sync").create()

const clean = () => {
  return del(["dist"])
}

const resources = () => {
  return src("src/resources/**")
  .pipe(dest("dist/resources"))
}

const fonts = () => {
  src("src/fonts/**.ttf")
  .pipe(ttf2woff())
  .pipe(dest("dist/fonts"))
  return  src("src/fonts/**.ttf")
  .pipe(ttf2woff2())
  .pipe(dest("dist/fonts"))
}

const styles = () => {
  return src("src/css/**/*.scss")
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixes({
    grid: true,
    cascade: false
  }))
  .pipe(sourcemaps.write())
  .pipe(dest("dist/css"))
  .pipe(browserSync.stream())
}

const htmlMinify = () => {
  return src("src/**/*.html")
  .pipe(dest("dist"))
  .pipe(browserSync.stream())
}

const svgSprites = () => {
  return src("src/images/**/*.svg")
  .pipe(dest("dist/images"))
}

const scripts = () => {
  src("src/js/components/**.js")
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ["@babel/env"]
  }))
  .pipe(uglify({
    toplevel: true,
  }).on("error", notify.onError()))
  .pipe(sourcemaps.write())
  .pipe(dest("dist/js/components/"))
  return src("src/js/**.js")
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ["@babel/env"]
  }))
  .pipe(uglify({
    toplevel: true,
  }).on("error", notify.onError()))
  .pipe(sourcemaps.write())
  .pipe(dest("dist/js/"))
  .pipe(browserSync.stream())
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  })
}

const images = () => {
  return src([
    "src/images/**/*.jpg",
    "src/images/**/*.png",
    "src/images/*.svg",
    "src/images/**/*.jpeg",
    "src/images/**/*.webp",
  ])
  .pipe(image())
  .pipe(dest("dist/images"))
}

watch("src/**/*.html", htmlMinify)
watch(('src/css/**/*.scss'), styles)
watch("src/images/svg/**/*.svg", svgSprites)
watch("src/js/**/*.js", scripts)
watch("src/resources/**", resources)
watch("src/fonts/**.ttf", fonts)

exports.clean = clean
exports.styles = styles
exports.scripts = scripts
exports.fonts = fonts
exports.htmlMinify = htmlMinify

exports.default = series(clean, resources, htmlMinify, fonts, scripts, styles, images, svgSprites, watchFiles)

const cleanBuild = () => {
  return del(["build"])
}

const stylesBuild = () => {
  return src("dist/css/style.css")
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixes({
    grid: true,
    cascade: false
  }))
  .pipe(cleanCSS({
    level: 2
  }))
  .pipe(concat("style.css"))
  .pipe(sourcemaps.write())
  .pipe(dest("build/css"))
}

const resourcesBuild = () => {
  return src("dist/resources/**")
  .pipe(dest("build/resources"))
}

const fontsBuild = () => {
  src("src/fonts/**.ttf")
  .pipe(ttf2woff())
  .pipe(dest("build/fonts"))
  return  src("src/fonts/**.ttf")
  .pipe(ttf2woff2())
  .pipe(dest("build/fonts"))
}

const htmlBuild = () => {
  return src("dist/**/*.html")
  .pipe(htmlMin({
    collapseWhitespace: true,
  }))
  .pipe(dest("build"))
}

const svgSpritesBuild = () => {
  return src("dist/images/**/*.svg")
  .pipe(dest("build/images"))
}

const imagesBuild = () => {
  return src([
    "src/images/**/*.jpg",
    "src/images/**/*.png",
    "src/images/*.svg",
    "src/images/**/*.jpeg",
    "src/images/**/*.webp",
  ])
  .pipe(image())
  .pipe(dest("build/images"))
}

const scriptsBuild = () => {
  src("dist/js/components/**.js")
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ["@babel/env"]
  }))
  .pipe(uglify({
    toplevel: true,
  }).on("error", notify.onError()))
  .pipe(sourcemaps.write())
  .pipe(dest("build/js/components/"))
  return src("dist/js/**.js")
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ["@babel/env"]
  }))
  .pipe(uglify({
    toplevel: true,
  }).on("error", notify.onError()))
  .pipe(sourcemaps.write())
  .pipe(dest("build/js/"))
}

exports.build = series(cleanBuild, resourcesBuild, htmlBuild, fontsBuild, scriptsBuild, stylesBuild, imagesBuild, svgSpritesBuild)
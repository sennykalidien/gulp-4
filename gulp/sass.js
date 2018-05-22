const paths         = require("./_config").paths;
const css           = require("./_config").css;

const gulp          = require("gulp");
const sass          = require("gulp-sass");
const autoprefixer  = require("gulp-autoprefixer");
const cleanCSS      = require("gulp-clean-css");
const newer         = require("gulp-newer");
const sourcemaps    = require("gulp-sourcemaps");
const concat        = require("gulp-concat");

function compileSass() {
    return gulp.src(paths.src.styles + "*.scss")
        .pipe(newer(paths.target.styles))
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(["last 2 versions", "> 5%", "Firefox ESR"]))
        .pipe(cleanCSS({ compatibility: "ie9" }))
        .pipe(gulp.dest(paths.target.styles))
}

function compileVendor() {
    return gulp.src(css.lib)
        .pipe(newer(paths.target.scripts + "vendor.css"))
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest(paths.target.styles));
}

exports.compileSass    = compileSass;
exports.compileVendor  = compileVendor;

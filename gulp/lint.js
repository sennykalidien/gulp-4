const paths     = require("./_config").paths;

const gulp      = require("gulp");
const jslint    = require("gulp-jslint");
const sasslint  = require("gulp-sass-lint");
const newer     = require("gulp-newer");

function lintJs() {
    return gulp.src(paths.src.scripts + "**/*.js")
        .pipe(newer(paths.target.scripts))
        .pipe(jslint())
        .pipe(jslint.reporter('default'));
}

function lintSass() {
    return gulp.src(paths.src.styles + "**/*.scss")
        .pipe(newer(paths.target.styles))
        .pipe(sasslint())
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError())
}

exports.lintJs = lintJs;
exports.lintSass = lintSass;

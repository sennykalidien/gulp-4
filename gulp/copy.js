const paths = require("./_config").paths;
const gulp  = require("gulp");

function copyStatic() {
    return gulp.src(['!' + paths.src.static + "sprites/", paths.src.static + "**"])
        .pipe(gulp.dest(paths.target.assets));
}

exports.copyStatic = copyStatic;

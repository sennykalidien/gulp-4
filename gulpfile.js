const gulp          = require("gulp");
const clean         = require("./gulp/clean");
const copy          = require("./gulp/copy");
const favicons      = require("./gulp/favicons");
const javascript    = require("./gulp/javascript");
const sass          = require("./gulp/sass");
const serve         = require("./gulp/serve");
const lint          = require("./gulp/lint");
const svg           = require("./gulp/svg");

gulp.task("default", gulp.series(
    gulp.parallel(
        lint.lintSass,
        lint.lintPHP
    ),
    gulp.parallel(
        copy.copyPHP,
        copy.copyStatic
    ),
    gulp.parallel(
        sass.compileSass,
        javascript.compileHead,
        javascript.compileApp,
        javascript.compileLib
    ),
    serve.serve
));

gulp.task("svg", gulp.parallel(
    svg.generateLogos,
    svg.generateIcons
));

gulp.task("favicons", gulp.parallel(
    favicons.generateFavicons
));

gulp.task("clean", gulp.parallel(
    clean.clean
));

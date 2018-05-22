const paths         = require("./_config").paths;
const js            = require("./_config").js;

const gulp          = require("gulp");
const lint          = require("./lint");
const copy          = require("./copy");
const javascript    = require("./javascript");
const sass          = require("./sass");
const twig          = require("./twig");

function watchStyles(callback) {
    return gulp.watch(
        [paths.src.styles + "**/*.scss", paths.src.app + "**/*.scss"],
        gulp.series(lint.lintSass, sass.compileSass, callback)
    );
}

function watchScripts(callback) {
    return gulp.watch(
        [js.app, js.head],
        gulp.series(
            //lint.lintJs,
            gulp.parallel(
                javascript.compileApp,
                javascript.compileHead
            ),
            callback
        )
    );
}

function watchTwig(callback) {
    return gulp.watch(
        [paths.src.app + "**/*.twig",],
        gulp.series(twig.compileTwig, callback)
    );
}

exports.watchStyles     = watchStyles;
exports.watchScripts    = watchScripts;
exports.watchTwig       = watchTwig;

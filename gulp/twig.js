const paths         = require("./_config").paths;

const gulp          = require("gulp");
const data          = require("gulp-data");
const twig          = require('gulp-twig');


function compileTwig() {
    return gulp.src([paths.src.templates + '*.twig', '!' + paths.src.templates + '_layout.twig', ])
        .pipe(data(() => (paths.data + 'data.json')))
        .pipe(twig({
            data: data(() => (paths.data + 'data.json'))
        }))
        .pipe(gulp.dest('dist'))
}

exports.compileTwig = compileTwig;
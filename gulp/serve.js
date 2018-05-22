const watch         = require("./watch");
const browserSync   = require("browser-sync");

function serve() {
    browserSync({
        notify: false,
        server: {
            baseDir: "./dist/"
        },
        ui: {
            port: 3000
        }
    });

    const reload = (done) => {
        browserSync.reload();
        done();
    };

    const stream = (done) => {
        browserSync.stream();
        done();
    };

    watch.watchStyles(reload);
    watch.watchScripts(reload);
    watch.watchTwig(reload);
}

exports.serve = serve;

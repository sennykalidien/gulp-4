const paths = {
    src: {
        app:            "./src/app/",
        data:           "./src/data/",
        src:            "./src/",
        scripts:        "./src/js/",
        styles:         "./src/scss/",
        static:         "./src/static/",
        svgIcons:       "./src/static/sprites/icons/",
        svgLogos:       "./src/static/sprites/logos/",
        favicons:       "./src/static/favicons/",
        templates:      "./src/app/",
        vendor:         "./node_modules/",
    },

    target: {
        tmp:            "./.tmp/",
        assets:         "./dist/assets",
        scripts:        "./dist/assets/js/",
        styles:         "./dist/assets/css/",
        svg:            "./dist/assets/images/",
        favicons:       "./dist/assets/images/favicons/",
    }
};

const favicon = {
    name:           "Integritea",
    description:    "We celebrate tea!",
    background:     "#0072c6",
    url:            "https://www.integritea.nl"
};

const js = {
    head: [
        paths.src.scripts + "head/*.js"
    ],
    app: [
        paths.src.scripts + "app/app.js",
        paths.src.app     + "**/*.js"
    ],
    lib: [
        paths.src.vendor + "svg4everybody/dist/svg4everybody.min.js",
        paths.src.vendor + "flickity/dist/flickity.pkgd.min.js"
    ]
};

const css = {
    lib: [
        paths.src.vendor + "flickity/dist/flickity.css"
    ]
};

exports.paths   = paths;
exports.favicon = favicon;
exports.js      = js;
exports.css     = css;

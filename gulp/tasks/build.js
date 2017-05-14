let gulp = require("gulp");
let del = require("del");
let usemin = require("gulp-usemin");
let rev = require("gulp-rev");
let cssnano = require("gulp-cssnano");
let uglify = require("gulp-uglify");
let browserSync = require("browser-sync").create();

gulp.task("previewDocs", function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
})

gulp.task("deleteDocsFolder", function() {
    return del("./docs");
})

gulp.task("usemin", ["deleteDocsFolder"], function() {
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [function() {return rev()}, function() {return cssnano()}],
            js: [function() {return rev()}, function() {return uglify()}]
        }))
        .pipe(gulp.dest("./docs"));
})

gulp.task("fonts", ["deleteDocsFolder", "usemin"], function() {
    return gulp.src("./app/fonts/fontawesome-webfont.ttf")
        .pipe(gulp.dest("./docs/app/fonts"));
})

gulp.task("build", ["deleteDocsFolder", "usemin", "fonts"]);

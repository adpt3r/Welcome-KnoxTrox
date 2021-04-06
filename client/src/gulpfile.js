const { src, dest, watch, series } = require('gulp'); // dejar definido las funciones de gulp


// Librerias para BrowserSync
const browsersync = require('browser-sync').create();

// Server
// Levanta Servidor
function browsersyncServe(cb){
    browsersync.init({
        server: {
            baseDir: "api/"
        }
    })
    cb();
}
//function F5 reload
function browsersyncRload(cb){
    browsersync.reload();
    cb();
}
//functiones watch
function watchyomind(){
    watch('*', browsersyncRload);
};


//Tasks, with linux set fs.inotify.max_user_watches=524288 in /etc/sysctl.conf 
exports.default = series(
    browsersyncServe,
    watchyomind
);
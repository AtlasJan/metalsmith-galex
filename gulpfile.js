// Generated by LiveScript 1.6.0
var ref$, src, dest, parallel, fs, del, lsc;
ref$ = require('gulp'), src = ref$.src, dest = ref$.dest, parallel = ref$.parallel;
fs = require('fs');
del = require('delete');
lsc = require('gulp-livescript');

function build(cb){
  src(['lib/*.ls', '*.ls'])
    .pipe(lsc({bare: true}))
    .pipe(dest('./'));
  cb();
}
function clean(cb){
  del(['!([gG]ulpfile.js)', '*.js', '*.log', '*.tgz', '*.html'], cb);
}
module.exports.build = build;
module.exports.clean = clean;
module.exports['default'] = build;

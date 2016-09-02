const path = require('path');
const encapsulateCss = require('encapsulate-css').default;
const through2 = require('through2');
const gutil = require('gulp-util');

module.exports = function cssEncapsulatingStream() {
    return through2.obj(function encapsulateCssStream(file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('gulp-encapsulate', 'Streaming not supported'));
            return;
        }

        try {
            const filename = path.basename(file.path, '.css');
            const className = filename;
            const code = encapsulateCss(file.contents.toString(), className);

            file.contents = new Buffer(code);
            this.push(file);
        } catch (err) {
            this.emit('error', new gutil.PluginError('encapsulateCss', err, {
                fileName: file.path,
                showProperties: false,
            }));
        }
        cb();
    });
}
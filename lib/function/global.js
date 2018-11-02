var Buffer = require('buffer').Buffer;
var fs = require('fs');
module.exports = {
    // npm install buffer --save
    // var Buffer = require('buffer').Buffer;
    //base64编码
    base64_encode(rawStr) {
        return new Buffer(rawStr).toString('base64');
    },
    // npm install buffer --save
    // var Buffer = require('buffer').Buffer;
    //base64解码
    base64_decode(base64Str) {
        return new Buffer(base64Str, 'base64').toString('utf8');
    },
    // var Buffer = require('buffer').Buffer;
    // var fs = require('fs');
    //base64编码文件
    base64_encode_file(file) {
        // read binary data
        var bitmap = fs.readFileSync(file);
        // convert binary data to base64 encoded string
        return new Buffer(bitmap).toString('base64');
    },
    //var Buffer = require('buffer').Buffer;
    // var fs = require('fs');
    //base64解码文件
    base64_decode(base64str, file) {
        // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
        var bitmap = new Buffer(base64str, 'base64');
        // write buffer to file
        fs.writeFileSync(file, bitmap);
        console.log('******** File created from base64 encoded string ********');
    }
}
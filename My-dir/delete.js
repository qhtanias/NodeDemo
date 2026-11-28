var fs = require('fs');
fs.unlink('input.txt', function (){
    console.log('write operation complete');

});
// for delete exsisting the file

/* fs.readfile();
fs.writeFile()
fs.open()
fs.rename(oldpath, newpath, callback)
fs.link
fs.mkdir(path,callback)
fs.exists(path, callback)*/


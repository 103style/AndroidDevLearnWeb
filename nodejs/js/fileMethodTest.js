var fs = require("fs");
var util = require("util")

var path = "../resources/demo.txt";

fs.open(path, 'r', '0666', function(err, fd) {
    if (err)
        return console.log("fs.open err, err = " + err);

    console.log("fs.open success, fd = " + fd);
    console.log("fs.open finish.\n");

    fs.close(fd, function() {
        console.log("fs.close success.");
        console.log("fs.close finish.\n");
    })
});


fs.stat(path, function(err, stats) {
    // console.log("stats string = \n" + util.inspect(stats));

    console.log("stats.isFile() = " + stats.isFile());
    console.log("stats.isDirectory() = " + stats.isDirectory());
    // console.log("stats.isBlockDevice() = " + stats.isBlockDevice());
    // console.log("stats.isCharacterDevice() = " + stats.isCharacterDevice());
    // console.log("stats.isSymbolicLink() = " + stats.isSymbolicLink());
    // console.log("stats.isFIFO() = " + stats.isFIFO());
    // console.log("stats.isSocket() = " + stats.isSocket());

    console.log("fs.stat finish\n");
})


fs.writeFile(path, '103style.top\n103style.github.io\n103Tech', function(err) {
    if (err) return console.log("fs.writeFile err = " + err);

    console.log("fs.writeFile success.");
    console.log("fs.writeFile finish.\n");

    fs.readFile(path, function(err, buffer) {
        if (err) return console.log("fs.readFile err = " + err);

        console.log("fs.readFile success. \n data = " + buffer);

        console.log("fs.readFile finish.\n");


        console.log("fs.truncateTest start.");
        ftruncateTest();
    });
});





function ftruncateTest() {
    fs.open(path, 'r+', '0666', function(err, fd) {
        if (err)
            return console.log("fs.open err, err = " + err);

        console.log("fs.open success, fd = " + fd);

        console.log("fs.ftruncate start.");
        fs.ftruncate(fd, 10, function(err) {
            if (err) return console.log("fs.ftruncate err = " + err);

            var buf = new Buffer.alloc(1024);
            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
                if (err) return console.log("fs.read  err = " + err);

                if (bytes > 0) {
                    console.log("fs.read fs.ftruncate = " + buf.slice(0, bytes).toString());
                }

                fs.close(fd, function(err) {
                    if (err) {
                        console.log(err);
                    }
                    console.log("fs.close.");

                    console.log("fs.ftruncate finish.\n");

                    closeTest();
                });
            });
        })
    });
}


function closeTest() {
    fs.unlink(path, function() {
        console.log("fs.unlink success.");

        console.log("fs.unlink finish.\n");
    })
}
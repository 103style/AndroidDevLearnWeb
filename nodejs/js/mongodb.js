var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";


//插入单条数据
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("103Tech");
    var myobj = { name: "103Tech", url: "103style.top" };
    dbo.collection("site").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("insert success");
        db.close();
    });
});


//插入多条数据
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("103Tech");
    var myobj = [
        { name: 'a', url: 'a.com', type: 'cn' },
        { name: 'b', url: 'c.com', type: 'en' },
        { name: 'b', url: 'c.com', type: 'de' },
    ];
    dbo.collection("site").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });
});


//查询数据
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("103Tech");

    // 查询条件  查询全部传 {}。
    var whereStr = { "name": '103Tech' };
    dbo.collection('site').find(whereStr).toArray(function(err, res) {
        // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    })
})


//更新单条数据
MongoClient.connect(url, function(err, db)) {
    if (err) throw err;

    var dbo = db.db('103Tech');

    // 查询条件
    var whereStr = { "name": '103Tech' };
    // 更新内容
    var updateStr = { $set: { "url": "https://www.103style.top" } };
    dbo.collection('site').updateOne(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log('update success');
        db.close();
    })
}

//更新多条数据
MongoClient.connect(url, function(err, db)) {
    if (err) throw err;

    var dbo = db.db('103Tech');

    // 查询条件
    var whereStr = { "type": 'cn' };
    // 更新内容
    var updateStr = { $set: { "url": "https://www.103style.top" } };
    dbo.collection('site').updateMany(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log("update success " + res.result.nModified + " data");
        db.close();
    })
}


//删除数据
MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbo = db.db('103Tech');
    // 查询条件
    var whereStr = { "name": '103Tech' };
    dbo.collection("site").deleteOne(whereStr, function(err, res) {
        if (err) throw err;
        console.log("delete success");
        db.close();
    });

    //多条数据
    // var whereStrMany = { "type": 'cn' };
    // dbo.collection("site").deleteMany(whereStrMany, function(err, res) {
    //     if (err) throw err;
    //     console.log(res.result.n + " 条文档被删除");
    //     db.close();
    // });
})


//排序
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("103Tech");
    // { type: 1 }  按 type 字段升序
    // { type: -1 } 按 type 字段降序
    var mysort = { type: 1 };
    dbo.collection("site").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});


//分页 使用 limit() 方法，该方法只接受一个参数，指定了返回的条数。
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("103Tech");
    dbo.collection("site").find().limit(2).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});


//删除集合
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("103Tech");
    // 删除 test 集合
    dbo.collection("test").drop(function(err, delOK) { // 执行成功 delOK 返回 true，否则返回 false
        if (err) throw err;
        if (delOK) console.log("集合已删除");
        db.close();
    });
});
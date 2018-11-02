const mysql = require('mysql');
const config = require('../data/config');

module.exports = class Db {
    constructor() {
        this.module = '';
        this.dbConfig = 'database';
        this.whereStr = '';
    }

    //数据库连接操作
    dbConnect() {
        let self = this;
        let connection = mysql.createConnection({
            host: config[self.dbConfig].host,
            user: config[self.dbConfig].user,
            password: config[self.dbConfig].password,
            port: config[self.dbConfig].port,
            database: config[self.dbConfig].database,
        });
        connection.connect();
        return connection;
    }

    //多数据库连接操作
    connect(db) {
        this.dbConfig = db;
        return this;
    }

    //基本查询语句
    query(sql, one = false) {
        let self = this;
        return new Promise((resolve, reject) => {
            self.dbConnect().query(sql, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    if (one == true) {
                        resolve(result[0]);
                    } else {
                        resolve(result);
                    }
                }
            });
            self.dbConnect().end();
        })
    }

    //设置查询表
    name(name) {
        this.module = config.database.prefix + name;
        return this;
    }

    //设置查询条件
    where(whereStr) {
        this.whereStr = ' where ' + whereStr;
        return this;
    }

    //查询全部
    select() {
        let sql = 'SELECT * FROM ' + this.module + this.whereStr;
        return this.query(sql);
    }

    //查询一条信息
    find() {
        let sql = 'SELECT * FROM ' + this.module + this.whereStr + ' LIMIT 1';
        return this.query(sql, true);
    }

}

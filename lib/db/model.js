const config = require('../data/config');
const Db = require('./db');
module.exports = class BaseModel {
    constructor() {
        this.model = '';
        this.where = '';
    }

    setWhere(str) {
        this.where = str;
        return this;
    }

    async find() {
        return await new Db().name(this.model).where(this.where).find();
    }

    async select() {
        return await new Db().name(this.model).where(this.where).select();
    }
};
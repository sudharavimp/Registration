const db = require('./db');
const helper = require('../helper');
const config = require('../config');

module.exports = {
        getAll       
};

async function getAll() {
    return await db.query(
        `SELECT firstname,lastname,username from user`
      );
}


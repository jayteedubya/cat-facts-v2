const pg = require('pg')
const _client = new pg.Client({user: "jakewilliams", host: "localhost", password: "", database: "jakewilliams", port: 5432});


const getAll = async (client=_client) => {
    client.connect();
    const results = await _client.query('SELECT * FROM cat_facts;');
    client.end();
    return results.rows;
}

const getById = async (id, client=_client) => {
    client.connect();
    const result = await client.query(`SELECT * FROM cat_facts WHERE id = ${id};`);
    client.end();
    return result.rows[0];
}

const getRandom = async (client=_client) => {
    client.connect()
    const size = await client.query('SELECT COUNT(*) FROM cat_facts;');
    const id = Math.floor(Math.random() * size);
    const result = client.query(`SELECT * FROM cat_facts WHERE id = ${id};`);
    client.end()
}

module.exports = { getAll, getById, getRandom, _client}




const pg = require('pg')
const getNewClient = () => {
    return new pg.Client();
}


const getAll = async (client=getNewClient()) => {
    client.connect();
    const results = await client.query('SELECT * FROM cat_facts;');
    client.end();
    return results.rows;
}

const getById = async (id, client=getNewClient()) => {
    client.connect();
    const result = await client.query(`SELECT * FROM cat_facts WHERE id = ${id};`);
    client.end();
    return result.rows[0];
}

const getRandom = async (client=getNewClient()) => {
    client.connect()
    const countQueryResult = await client.query('SELECT COUNT(*) FROM cat_facts;');
    size = countQueryResult.rows[0].count;
    const id = Math.floor(Math.random() * size);
    const result = await client.query(`SELECT * FROM cat_facts WHERE id = ${id};`);
    client.end()
    return result.rows[0];
}

module.exports = { getAll, getById, getRandom, getNewClient}




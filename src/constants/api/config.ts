import { JsonDB, Config } from 'node-json-db';

const DB = new JsonDB(new Config('db', true, false, '/'));

export default DB;

import { Sequelize } from "sequelize";

const db = new Sequelize ("crud_js",'root','',{
    host:'localhost',
    dialect:'mysql'
});

export default db;
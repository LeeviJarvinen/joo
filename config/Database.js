import {Sequelize} from "sequelize";

const db = new Sequelize('usertest','root','root',{
    host: "localhost",
    dialect: "mysql"
});

export default db;
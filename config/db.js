import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL, {

    define: {
        timestamps: false //por que tiende a agregar un par de columnas cuando fue agregado
    },                  // o actualizado el registro
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;
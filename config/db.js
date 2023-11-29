import Sequelize from 'sequelize';

const db = new Sequelize('agenciaviajes', 'root', 'hugui00123', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql', //por que soporta tambien postgreSQL
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
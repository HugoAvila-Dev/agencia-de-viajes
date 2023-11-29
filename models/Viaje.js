import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING //En una base de datos utilizarias varchar pero en sequelize se usa STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.NUMBER
    },
    slug: {
        type: Sequelize.STRING
    },
})
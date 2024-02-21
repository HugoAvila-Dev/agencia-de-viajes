import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING //En una base de datos utilizarias varchar pero en sequelize se usa STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})
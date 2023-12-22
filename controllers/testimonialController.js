const guardarTestimonial = (req, res) => {

    // Validar...
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El Nombre está vacio'});
    }

    if(correo.trim() === '') {
        errores.push({mensaje: 'El Correo está vacio'});
    }

    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El Mensaje está vacio'});
    }
    console.log(errores)
}

export {
    guardarTestimonial
}
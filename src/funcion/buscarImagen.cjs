const fs = require('fs');
const path = require('path');

const publicFolder = path.join(__dirname, '../../public/actividades');

function buscarImagenesPorParametro(parametros) {
    return new Promise((resolve, reject) => {
        // Ruta de la carpeta "public" donde se buscarán las imágenes
        const rutaPublic = path.join(__dirname, '../../public/actividades');

        // Listar archivos en la carpeta "public"
        fs.readdir(rutaPublic, (err, archivos) => {
            if (err) {
                reject(err);
            } else {
                // Filtrar imágenes que coincidan con los parámetros
                const imagenesEncontradas = archivos.filter(archivo => {
                    // Verificar si al menos uno de los parámetros coincide con el nombre del archivo
                    return parametros.some(parametro => archivo.includes(parametro));
                    
                });

                if (imagenesEncontradas.length > 0) {
                    const rutasImagenes = imagenesEncontradas.map(archivo => {
                        const rutaImagen = path.join(rutaPublic, archivo);
                        const imagenData = fs.readFileSync(rutaImagen);
                        return {
                            nombre: archivo,
                            data: imagenData.toString('base64'), // Convertir los datos binarios a base64
                        };
                    });
                    resolve(rutasImagenes);
                } else {
                    reject('No se encontraron imágenes con los parámetros especificados');
                }
            }
        });
    });
}

module.exports = { buscarImagenesPorParametro };
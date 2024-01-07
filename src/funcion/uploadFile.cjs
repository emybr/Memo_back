const { storage } = require('firebase-admin');
const sharp = require('sharp');
const admin = require('firebase-admin');
/**
 * Sube un archivo de imagen a Firebase Storage, lo redimensiona y devuelve la URL de descarga.
 * @param {Object} file - Objeto del archivo de imagen a subir.
 * @param {Buffer} file.data.buffer - Buffer del archivo de imagen.
 * @param {string} file.originalname - Nombre original del archivo de imagen.
 * @param {string} file.mimetype - Tipo MIME del archivo de imagen.
 * @returns {Promise<Object>} - Promesa que resuelve con la referencia y la URL de descarga del archivo.
 */
async function uploadFile(file) {
    try {
        // Redimensionar la imagen
        const fileBuffer = await sharp(file.data.buffer)
            .resize({ width: 200, height: 200, fit: 'cover' })
            .toBuffer();

        // Obtener la referencia al bucket de Firebase Storage
        const storage = admin.storage(); // Obtener la instancia de almacenamiento
        const bucket = storage.bucket('imagenes-memo.appspot.com'); // Reemplaza con el nombre real de tu bucket

        // Crear una referencia al archivo en Firebase Storage
        const fileRef = bucket.file(`files/${file.originalname}_${Date.now()}_${Math.random()}`); // Generar un nombre de archivo más único

        // Subir el archivo a Firebase Storage
        await fileRef.save(fileBuffer, {
            metadata: {
                contentType: file.mimetype,
                metadata: {
                    customMetadata: {
                        timestamp: Date.now().toString()
                    }
                }
            }
        });

        // Obtener la URL de descarga del archivo
        const [fileDownloadURL] = await fileRef.getSignedUrl({
            action: 'read',
            expires: '03-09-2491' // Cambiar a una fecha en el futuro
        });

        return {
            ref: fileRef,
            downloadURL: fileDownloadURL
        };
    } catch (error) {
        // Manejar cualquier error que ocurra durante la subida del archivo
        console.error('Error al subir el archivo:', error);
        throw error; // Relanzar el error para que se maneje en el contexto superior
    }
}

module.exports = { uploadFile };

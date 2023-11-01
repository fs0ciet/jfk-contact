import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const router = express.Router();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pdfsDirectory = path.join(__dirname, '..', 'storage');

router.get('/', (req, res) =>{
    fs.readdir(pdfsDirectory, (err, files) => {
        if(err){
            console.error('Error al leer el directorio de PDFs:', err);
            return res.status(500).send('Error interno del servidor');
        }

        const pdfFiles = files.filter((file) => path.extname(file) === '.pdf');
        res.json(pdfFiles);
    });
});

router.get('/:pdfName', (req, res) => {
    const pdfName = req.params.pdfName;
    const pdfPath = path.join(pdfsDirectory, pdfName);

    if (fs.existsSync(pdfPath) && path.extname(pdfPath) === '.pdf') {
        res.sendFile(pdfPath);
    }else{
        res.status(404).send('Archivo no encontrado');
    }
});

export default router;

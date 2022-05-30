import express from "express";
import multer from "multer";

const upload = multer({
    dest: 'assets/images'
});

import {
    getAllDiseaseData,
    getDiseaseDataById,
    createDiseaseData,
    updateDiseaseData,
    deleteDiseaseData,
    uploadPhoto
} from "../controllers/Products.js";

const router = express.Router();

router.get('/', getAllDiseaseData);
router.get('/:id', getDiseaseDataById);
router.post('/', createDiseaseData);
router.patch('/:id', updateDiseaseData);
router.delete('/:id', deleteDiseaseData);

// Upload photos
router.post('/upload-photo', upload.single('image'), function (req, res, next) {
    console.log(res.file, res.body);
    return res.json(res.file, res.body);
});


export default router;
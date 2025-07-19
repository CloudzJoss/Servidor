// routes/uploadRoutes.js
const express = require("express");
const router = express.Router();
const { upload, uploadImage } = require("../controllers/uploadController");

// Ruta: POST /api/upload
router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;

// controllers/uploadController.js
const multer = require("multer");
const { uploadFile } = require("../service/azureBlobService");

// Configura multer para almacenar en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No se envió ninguna imagen." });
    }

    const fileName = Date.now() + "-" + req.file.originalname;
    const buffer = req.file.buffer;

    const imageUrl = await uploadFile(fileName, buffer);

    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error("Error al subir imagen:", error);
    res.status(500).json({ message: "Error al subir la imagen." });
  }
};

module.exports = { upload, uploadImage };

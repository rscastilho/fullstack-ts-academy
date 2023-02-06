import multer from 'multer';
import path from 'path';

const imageStore = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = 'avatar';
    cb(null, `src/public/${folder}`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const imageUpload = multer({
  storage: imageStore,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(.png|jpg|jpeg)$/)) {
      return cb(new Error('Formato de imagem não permitido'));
    }
    cb(null, true);
  },
  limits: { fileSize: 1024 * 1024 },
});

// module.exports = { imageUpload}

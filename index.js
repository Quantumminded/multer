const express = require('express');
const app = express();
const multer = require('multer');
const port = process.env.PORT || 5000;
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads',
    filname: (req,file,cb) => {
        const extension = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${extension}`);
    }
});

const upload = multer({storage});
app.use(express.static('views'));
app.use(express.static('uploads'));

app.post('/upload-profile-pic', upload.single('profile_pic'), (req, res) => {
    console.log(req.file);
    if (!req.file) return res.status(400).send('Image could not be uploaded.');
    return res.status(200).send(`<h2>Here is the picture:</h2><img src="${req.file.filename}" alt="something" />`);
})

app.listen(port, () => console.log(`Connected to port ${port}`));
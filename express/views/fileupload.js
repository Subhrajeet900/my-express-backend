const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());

app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    // Restrict to PDF files only
    if (sampleFile.mimetype !== 'application/pdf') {
        return res.status(400).send('Only PDF files are allowed!');
    }
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('./uploads/' + sampleFile.name, function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

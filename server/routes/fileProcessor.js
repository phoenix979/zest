const express = require('express');
const multer = require('multer');
const fileHandler = require('../services/fileHandler');

const router = express.Router();

const storage = multer.memoryStorage(); // Store the uploaded files in memory
const upload = multer({ storage: storage });

router.post('/', upload.fields([{name: 'resources'}, {name: 'prowler'}]), (req, res) => {
    const results = fileHandler.processFiles(req.files);
    
    // render the results view with data
    res.render('results', { data: results });
});

module.exports = router;
const router = require('express').Router();
const controllerDocument = require('../controllers/document');

router.get('/',controllerDocument.getDocuments)

router.get('/add-doc',controllerDocument.getNewDocument)

router.post('/add-doc',controllerDocument.postNewDocument)



module.exports = router;
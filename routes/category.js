const router = require('express').Router();
const categoryControlle = require('../controllers/category');


router.get('/add-category',categoryControlle.getCategories);

router.post('/add-category',categoryControlle.postAddCategory);




module.exports = router;
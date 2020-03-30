const router = require('express').Router();
const categoryControlle = require('../controllers/category');


router.get('/category',categoryControlle.getCategories);

router.post('/add-category',categoryControlle.postAddCategory);

router.post('/delete-category',categoryControlle.postDeleteCategory);




module.exports = router;
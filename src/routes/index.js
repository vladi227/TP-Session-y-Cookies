const express = require('express');
const router = express.Router();
const { index, processIndex, user, destroy } = require('../controllers/indexContoller')
const validate = require('../middleware/validate')

/* GET home page. */
router.get('/', index);
router.post('/',validate, processIndex)

router.get('/user',user)

router.get('/destroy', destroy)


module.exports = router;

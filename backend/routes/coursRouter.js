const express = require('express');
const app = express();
const router = express.Router();
const cours = require('../controller/cours');


router.post('/newcours', cours.addCours );

router.get('/cours', cours.getCours );


module.exports = router;
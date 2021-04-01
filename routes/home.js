
const { Router } = require('express');
const { 
    homeGet,
    // homePut,
    // homePost,
    // homePatch,
    homeDelete } = require('../controllers/home');

const router = Router();

router.get('/', homeGet);
// router.post('/', homePut);
// router.put('/:id', homePost);
// router.patch('/', homePatch);
//dificil que usemos un delete para el home 
// router.delete('/', homeDelete);


module.exports = router;
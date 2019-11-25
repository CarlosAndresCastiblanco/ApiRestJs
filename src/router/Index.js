const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data= {
        "name": "Carlos Andrés Castiblanco",
        "gitHup": "CarlosAndres.git"
    }
    res.json(data);
});

module.exports = router;
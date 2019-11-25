const {Router} = require('express');
const router = Router();
const movies = require('../movies');
const _ = require('underscore');

router.get('/', (req , res) => {
   res.json(movies);
});

router.post('/', (req, res) =>{
    let id = movies.length + 1;
    const {name, autor, year, area} = req.body;
    const newMovie = {...req.body, id};
    if(id && name && autor, year, area){
        movies.push(newMovie);
        res.json(movies);
    }else {
        res.status(500).json({error: "No se pudo agregar el objeto"});
    }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name, autor, year, area} = req.body;
    if(name && autor && year && area){
        _.each(movies, (movie, i) =>{
           if(movie.id === id){
                movie.name = name;
                movie.autor = autor;
                movie.year = year;
                movie.area= area;
           }
        });
        res.json(movies);
    }else {
        res.status(500).json({error : "Faltan parametros en el envío"});
    }
});

router.delete('/:id', (req, res) =>{
   const {id} = req.params;
   if (id){
       _.each(movies, (movie, i) =>{
           if(movie.id === id){
               movies.splice(i, 1);
           }
       });
       res.json(movies);
   }
});

module.exports = router;

const NewCours = require('../db/dbCours');
 

exports.addCours = (req, res, next) =>{
    const title = req.body.title;
    const detail = req.body.detail;
    const duree = req.body.duree;
    const lessons = req.body.lessons;
    const imageUrl = req.body.imageUrl;

    const cours = new NewCours({
        title, 
        detail, 
        duree, 
        lessons, 
        imageUrl,
    });
    cours.save()
    .then((result) =>{
        console.log(result);
      return  res.redirect('http://localhost:3000/newcours');
    })
    .catch((err) =>{
        console.log(err);
    });
}


exports.getCours = ((req, res, next) =>{
    NewCours.find()
    .then((cours) =>{
        console.log('tous les cours:' + cours);
        console.log(req.url);
       return res.json(cours);
        }) 
    .catch((err) =>{
        console.log(err);
        res.status(500).json({ error: err.message });
    });
})


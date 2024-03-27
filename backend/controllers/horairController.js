const dataBase = require("../config/mysql");












exports.horaireInsert = (req, res) => {
    console.log(req.body);

    let insertHoraireQuery = "INSERT INTO planification (navire, navire_contenu, time) VALUES (?,?,?)";

    dataBase.query(insertHoraireQuery, [req.body.navire, req.body.navire_contenu, req.body.time], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: "Erreur lors de l'insertion des données dans la base de données" });
        } else {
            res.status(201).json({ result, message: "Données insérées avec succès dans la base de données" });
        }
    });
}







exports.horaireSelect = (req, res) => {

    console.log(req.body)

    let selectHoraireQueryAll = "SELECT * FROM `planification`";

    dataBase.query(selectHoraireQueryAll, 
        
        [req.body.navire, req.body.navire_contenu, req.body.time ],

        (error, result)=>{

            if (error){

                console.log(error)

                res.status(500).json({error: "pas de donnée"})

            }else {

                res.status(201).json({ result , message: "C'est bien" });

            }

        }

    )

}
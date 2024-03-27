const dataBase = require("../config/mysql");












exports.rapportInsert = (req, res) => {
    console.log(req.body);

    let insertrapportQuery = "INSERT INTO rapport ( rapportTitre, contenu ) VALUES (?,?)";

    dataBase.query(insertrapportQuery, [ req.body.rapportTitre, req.body.contenu ], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({ error: "Erreur lors de l'insertion des données dans la base de données" });
        } else {
            res.status(201).json({ result, message: "Données insérées avec succès dans la base de données" });
        }
    });
}







exports.rapportSelect = (req, res) => {

    console.log(req.body)

    let selectrapportQueryAll = "SELECT * FROM `rapport`";

    dataBase.query(selectrapportQueryAll, [ req.body.rapportTitre, req.body.contenu ], (error, result)=>{

            if (error){

                console.log(error)

                res.status(500).json({error: "pas de donnée"})

            }else {

                res.status(201).json({ result , message: "C'est bien" });

            }

        }

    )

}
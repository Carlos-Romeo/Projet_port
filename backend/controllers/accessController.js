const dataBase = require("../config/mysql");



exports.accessInsert = (req, res) => {

    console.log(req.body);

    let insertAccessQuery = "INSERT INTO authorisation (nom, code) VALUES (?,?)";

    dataBase.query(insertAccessQuery, [req.body.nom, req.body.code], (error, result) => {

        if (error) {

            console.log(error);

            res.status(500).json({ error: "Erreur lors de l'insertion des données dans la base de données" });

        } else {

            res.status(201).json({ result, message: "Données insérées avec succès dans la base de données" });

        }
    });
}





exports.accessSelect = (req, res) => {

    console.log(req.body)

    let selectAccessQueryAll = "SELECT * FROM authorisation";

    dataBase.query(selectAccessQueryAll, 
        
        [req.body.nom, req.body.code],

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
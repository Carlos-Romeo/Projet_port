const dataBase = require("../config/mysql")

const bcrypt = require("bcrypt")





exports.signup = (req,res) => {

    console.log(req.body);

    let insertUserQuery = "INSERT INTO `utilisateurs` ( nom, prenoms, email, password, job) VALUES (?,?,?,?,?)";

    bcrypt

    .hash(req.body.password, 5)

    .then((hash) => {

        dataBase.query(

            insertUserQuery,

            [req.body.nom, req.body.prenoms, req.body.email,  hash, req.body.job],

            (error, result)=>{

                if (error) {

                    res.status(401).json(error)

                }

                res.status(201).json({hash, id: result.insertId})

            }  

        ) 
        
    })

    .catch((error) => {

        res.status(500).json(error)

    })
    
}








exports.login = (req, res) => {

    console.log(req.body);

    let selectUserQuery = "SELECT * FROM `utilisateurs` WHERE email=?";

    dataBase.query(selectUserQuery, [req.body.email], (error, result) => {

        if (error) {

            res.status(500).json({ error: "Internal server error ooooo" });

        } else if (result.length > 0) {

            bcrypt.compare(req.body.password, result[0].password)

                .then((valid) => {

                    if (valid) {

                        res.status(200).json({ message: "Login successful", id: result[0].email });

                    } else {

                        res.status(401).json({ error: "Incorrect password" });

                    }

                })
                .catch((error) => {

                    res.status(500).json({ error: "Internal ser" });

                });

        } else {

            res.status(401).json({ error: "User not found" });

        }

    }); 

}













exports.users = (req, res) => {
    console.log(req.body)
    let selectUserQueryAll = "SELECT * FROM `utilisateurs`";

    dataBase.query(selectUserQueryAll, 
        
        [req.body.nom, req.body.prenoms, req.body.email, /* req.boby.job */ ],

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
require('dotenv').config()
const express = require("express")
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
app.use(cors())

var pool = mysql.createPool({
    host: 'localhost',
    port: "3306",
    user: 'root',
    password: '',
    database: 'novin',
    multipleStatements: true
});

app.post("/register",  (req, res) => {
    const {name, username, email, password } = req.body
    const registration= () => {
        let d = Date.now()
        let month = (d.getMonth() + 1).toString().padStart(2, '0')
        let day = d.getDate().toString().padStart(2, '0')
        let year = d.getFullYear()
        return [year, month, day].join('-')
      }
    const q = "SELECT email FROM user WHERE email = ?;"+
            "SELECT username FROM user WHERE username =?;"
    pool.query(q, [email,username], (error, result) => {
        if(result[0].length > 0) {
            return res.send({message: "The email is in use"});
        }
        if(result[1].length > 0) {
            return res.send({message: "The username is in use"})
        }
        
        let hashPass =  bcrypt.hashSync(password, 10);
        
        
        placeholders = [name,username,email,hashPass,registration()]
        q3 = "INSERT INTO user (name,username, email, pass) VALUES (?);"
        pool.query(q3, [placeholders], (error, result) => {
            if(!error){
               return res.send({message: "Success"});
            } else {
               return res.send({message: "Failure"})

            }
        })  
    })
})

app.post("/login",(req, res) => {
    const { username, password } = req.body;
    const q = "SELECT * FROM user WHERE username = ?";
    pool.query(q, [username],
        function (error, result) {
            if (error)
                return res.send({message:"Database error"});
            else if (result.length == 0) {
                return res.send({message: "Incorrect username or password"})
            } else {
                user = JSON.parse(JSON.stringify(result[0]));
                if (!bcrypt.compareSync(password, user.pass))
                    return res.send({message: "Incorrect username or password"})
                const token = jwt.sign(user, process.env.TOKEN_SECRET)
                res.json({ token: token, message: "Success" })
                
            }
        }
    )
})

app.listen(4000, () => {
    console.log("Server started on port 4000...")
});
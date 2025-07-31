const express = require("express");
const app = express();
const pool = require("./db");
require('dotenv').config();

const { getDesktopApps } = require("./desktop");

const PORT = process.env.HOST_PORT;

app.use(express.json());


app.get("/desktop/apps", async(req, res) => {
    try {
        const apps = await getDesktopApps();
        res.json(apps);
    } catch (error) {
        res.send(error);
    }
});

// Auth user
app.get("/userz/:id/:pass", async(req, res) => {
    try {
        let username = req.params.id;
        let pass = req.params.pass;
        const userdata = await pool.query('SELECT * FROM "users" WHERE username = ($1) AND passwd = ($2)', [username, pass]);
        if(userdata.rowCount == 1){
            res.json(userdata.rows[0]);
        }else{
            res.json(false);
        }
    } catch (error){
        console.log(error);
    }
});

/**
 * Return list of user objects
 * {
 *  username: "example",
 *  photo: "example.png"
 * }
 */
app.get("/users", async(req, res) => {
    try {
        const users = await pool.query('SELECT username, photo from "users"');
        res.json(users.rows);
    } catch (error) {
        res.json(error);
    }
});



app.listen(PORT, () => {
    console.log("server is listening on port: " + PORT);
});
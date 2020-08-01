const express = require('express');
const app = express();
const pool = require('./db');


app.use(express.json());

app.post('/characters', async (req, res) => {
    try {
        console.log(req.body);
        const { name } = req.body;
        const character = await pool.query("INSERT INTO characters (name) VALUES($1) RETURNING *", [name]);

        res.json(character.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})


app.listen(5000, function()  {
    console.log("Listening for requests on port 5000")
})
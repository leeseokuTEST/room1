var express = require('express')
const mysql = require('mysql');
const dbinfo = require('../db/config')
const connection = mysql.createConnection(dbinfo);

var router = express.Router();
const tablenm = 'interview'

router.get('/',(req, res) =>{
    connection.query(`SELECT * from ${tablenm}`, 
      (error, rows) => {
        if (error) throw error;       
        res.send(rows);
      }
    );
})


module.exports = router;
const express = require('express');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'NewPassword',
    database: 'library_information',
    port:'3306'
});

connection.connect(function (error) {
    if (error) {

    }
    else {
        console.log("connected");
    }
});

module.exports = connection;
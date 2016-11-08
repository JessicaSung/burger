// Require the following npm packages inside of the server.js file:
// express
// method-override
// body-parser


// DEPENDENCIES
// ==============================================
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var sqlPassword = require('./password.js');
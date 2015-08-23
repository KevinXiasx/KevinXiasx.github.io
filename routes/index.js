var express = require('express');

var mysqlcon = require('./mysqlcon');
var sockio = require('../index').sockio;
var connection = mysqlcon.connection;

var router = express.Router();

router.get('/', indexfunc);
router.post('/', checkuser);
router.get('/manager', managerfunc);

router.get('/testjson', testjson);


function checkuser (req, res) {
connection.query({sql:'select pw from user where id=?', 
		timeout:40000,
		values: [req.body.userid]},
		function selectfunc (err, row) {
		if(err)
			console.log(err);
		else
		{
			if(row.length != 0)
			{
				if(row[0].pw == req.body.userpw)
				{
					res.render('manager.ejs');
				}
				else
				{
					var loginfail = {err:true,errmsg:'password is err'};
					res.render('first.ejs',loginfail);
				}
			}
			else
			{
				var loginfail = {err:true, errmsg:'user is not exist'};
				res.render('first.ejs', loginfail);
			}
		}
	});
}

function managerfunc (req, res) {
	res.render('manager.ejs');
}

function testjson (req, res) {
	res.json({
		id:'1',
		pswd:'d',
		res:'true',
		time:Date.now()
	});
}

function indexfunc (req, res) {
	var loginfail = {err:false, errmsg:''};
	res.render('ShowTime.ejs',loginfail);
}

module.exports = router;

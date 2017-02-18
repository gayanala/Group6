/**
 * http://usejsdoc.org/
 */
var express = require('express');
var app = express();

app.get('/index', function(req, res){
    res.render('dynamic', {
        name: "TutorialsPoint", 
        url:"http://www.tutorialspoint.com"
    });
});

app.listen(3000);

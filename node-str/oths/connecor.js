const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'captalysdev.cmrbivuuu7sv.sa-east-1.rds.amazonaws.com',
    port: '23306',
    user: 'capmaster',
    password: '#jackpot123#',
    database: 'onboard'
})

connection.connect(function(err){
    if(err) return console.log(err);
    console.log('conectou');
})

connection.query('select * from onboard.tb_Logins where email = "yuri.mussi@captalys.com.br"', function(err, result, fields){
    if(err) throw error;
    console.log('Deu ruim. erro: ', result);
})
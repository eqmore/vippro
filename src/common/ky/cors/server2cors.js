let express = require('express');
let app = express();
let whitelist = ['http://localhost:3000']
app.use(function(req,res,next){
    let origin = req.header.origin;
    if(whitelist.includes(origin)){
        res.setHeader('Access-Control-Allow-Origin',origin);
        res.setHeader('Access-Control-Allow-Headers','name');
        res.setHeader('Access-Control-Allow-Methods','PUT');//默认get post
        res.setHeader('Access-Control-Max-Age',6000);//预检
        res.setHeader('Access-Control-Allow-Credentials',true);//携带cookie
        res.setHeader('Access-Control-Expose-Headers','name');//前端获取头
        if(req.method === 'OPTIONS'){
            res.end();// options不做处理
        }
    }
    next();
})
app.get('/getdata',function(req,res){
    console.log(req.header);
    res.end(`${cb}('i love u too')`)
})
app.put('/getdata',function(req,res){
    console.log(req.header);
    res.end(`${cb}('i love u too')`)
})
app.use(express.static(__dirname));
app.listen(4000);
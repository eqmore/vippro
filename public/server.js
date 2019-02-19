let express = require('express');

let app = express();

app.listen(4000,function(){
    console.log(4000);
});

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();

})

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); //允许8080端口访问
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"); //允许接收的头
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); //允许的方法
    res.header('Access-Control-Allow-Credentials','true');
    // 允许跨域设置cookie
    //如果发的是options的请求 响应ok 即可
    if(req.method==="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.get('/sliders',function(req,res){
    res.json([
        {"photoUrl":"https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/homebanner/img/banner/banner1_81ac8067.png"},
        {"photoUrl":"https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/homebanner/img/banner/banner3_7c3ecb3c.png"}
    ]);
})
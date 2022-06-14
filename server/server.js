//引入express模块
var express = require('express')
//创建应用对象
var app = express()

//配置路由
app.get('/index', function (request, response) {
    console.log('路由index收到get请求')
    response.send('这里是路由返回的信息，/hello收到了get请求(jiangzhikuan)')
})

app.post('/index', function (request, response) {
    console.log('路由index收到post请求')
    response.send('这里是路由返回的信息，/hello收到了post请求')
})



//配置静态资源
app.use(express.static('public'))

//开启服务器，监听3000端口
//启动服务器
app.listen(3000, function () {
    console.log('服务器启动成功，监听3000端口')
})

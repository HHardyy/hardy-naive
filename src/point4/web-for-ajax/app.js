const Koa = require('koa')
const serv = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')

const API = require('./server/api')
const app = new Koa()

app.use(serv(path.resolve(__dirname, 'client')))
app.use(bodyParser)
app.use(API)

app.listen('10086', () => {
  console.log('server start at 10086');
})
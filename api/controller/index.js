const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
const { user,products} = require('../model')


// ============= User`s Routes=========
routes.get('/users',(req,res)=>{
    user.fetchUsers(req,res)
})
routes.get('/user/:id',(req,res)=>{
    user.fetchUser(req,res)
})
routes.post('/user',bodyParser.json(),(res,req)=>{
    user.resgisterUser(req,res)
})
routes.put('/user/:id',bodyParser.json(),(res,req)=>{
    user.updateUser(req,res)
})
routes.delete('/user/:id',bodyParser,json(),(req,res)=>{
    users.deleteUser(req,res)
})
routes.post('/login',bodyParser.json(),(req,res)=>{
    users.login(req,res)
})

// ============= Product`s Routes ============
routes.get('/products',(req,res)=>{
    pr
})
// const express = require('express')
import express from 'express'

const app = express()
const hostname = 'localhost'
const port = 3001


app.get('/', function (req, res) {
    res.send('Xin chao Tuyen')
})

app.listen(port, hostname, ()=>{
    console.log(`running seever at ${hostname}: ${port}`);
})
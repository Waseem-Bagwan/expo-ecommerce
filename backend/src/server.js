import express from 'express'
import path from 'path'
import { ENV } from './config/env.js'

const app = express()

const __dirname = path.resolve()

app.get('/api/welcome',(req,res) => {
    res.status(200).json({
        message: "Welcome to E-Commerce website and buy what you love"
    })
})

app.get('/api/products',(req,res) => {
    res.status(200).json({
        message: "Products Category"
    })
})

if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../admin/dist")))

    app.get("/{*any}",(req,res) => {
        res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"))
    })
}

app.listen(ENV.PORT,() => {
    console.log(`server is up and running on PORT: 3000 `)
})
import express from 'express'

const app = express()

app.get('/',(req,res) => {
    res.status(200).json({
        message: "Welcome to E-Commerce website"
    })
})

app.get('/products',(req,res) => {
    res.status(200).json({
        message: "Products Category"
    })
})

app.listen(3000,() => {
    console.log(`server is up and running on PORT: 3000 `)
})
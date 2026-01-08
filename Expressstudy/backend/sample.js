// const http = require('http')



// http.createServer((req, res) => {
//     if (req.url == '/mobile-phones-store') {
//         res.write("it is amobile ")

//     } else if (req.url == '/products') {
//         res.write("it is a furn")
//         res.end()
//     } else {
//         res.write("invalid requies")
//         res.end()
//     }
// }
// ).listen(7000, console.log("server is running succ"))




//middlevare

const express = require('express')
const app = express()


const date = (req,res,next) => {
    console.log(new Date());
    next()
    
    
}
 
// app.use(date)


app.get('/products', date,  (req,res)=> {
    res.send("it is a default url ")
})


app.get('/mobile', (req,res)=> {
    res.send("it is a mobile url ")
})










// const product = [
//     {name:'bag',quantity:4}
// ]


// app.get('/',(req,res)=> {


//     res.json(product) 
// })




















 



app.listen(9000, console.log("express running succesfully"))
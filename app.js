const express = require('express');

const {products} = require ('./indexProductos.js');


const port = 3000;
const app = express();

app.get('/products', async (req,res) => {
    try {
        const limit = req.query.limit;
        const productos =  await products.getProducts();
        
        console.log(productos)
        if ( limit){
            respuesta =  productos.slice(0,limit)
        } else {
            respuesta = productos;
        }
        res.send(respuesta)
    }catch(error) {
    console.log(error)
}  
})

app.get('/products/:pid', (req,res) => {
    const pid = req.params.pid;
    const respuesta = products.getProductsById(pid);
    console.log(respuesta)
    res.send({respuesta})  
  })

app.listen(port, () => {
console.log (`server running in port ${port}`);
})

const express=require('express');
const fetch = require('node-fetch');
const app=express();
const path=require('path')
const port = process.env.PORT || 3000;
app.use(express.static('./public'))
app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'public','index.html'))
})
app.get('https://strix-9k5j.onrender.com', async (req,res)=>{
  try{
  const response= await fetch('https://api.escuelajs.co/api/v1/products');
  const products= await response.json();
  console.log(response);
  const shirt= products.filter(product =>{
    return product.title.toLowerCase().includes('shirt')
  })
  const pant=products.filter(product =>{
    return product.title.toLowerCase().includes('pant')
  })
  const shoe=products.filter(product =>{
    return product.title.toLowerCase().includes('shoe')
  })
  const watch=products.filter(product =>{
    return product.title.toLowerCase().includes('watch')
  })
  const bag=products.filter(product =>{
    return product.title.toLowerCase().includes('bag')
  })
  res.json({shirt,pant,shoe,bag,watch})
  }
  catch(error){
    console.error(error);
    res.status(500)
  }
 })
app.listen(port,()=>{
  console.log(`server is running ${port}`);
})

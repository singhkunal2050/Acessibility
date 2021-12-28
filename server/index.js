const pa11y = require('pa11y')
const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()

app.get('/api/test', async (req, res)  => {
  if(!req.query.url){
    res.status(400).json({'error':'Bad Request!'})
  }else{
    try{
      const testResponse = await pa11y('https://singhkunal2050.dev')
      res.status(200).json(testResponse)
    }catch(err){
      res.status(504).json({'error':'Server Issue!'})
    }
  }
})

app.listen( PORT , ()=>{
  console.log(`Server Started at PORT ${PORT}`)
})


// async function run(){
//   const response = await pa11y('https://singhkunal2050.dev')
//   console.log(response)
// }

// run()
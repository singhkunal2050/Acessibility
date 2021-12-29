const pa11y = require('pa11y')
const express = require('express')
const PORT = process.env.PORT || 5000
var cors = require('cors')


const app = express()
app.use(cors())

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/api/test', cors(corsOptions), async (req, res) => {
  if (!req.query.url) {
    res.status(400).json({
      'error': 'Bad Request!'
    })
  } else {
    try {
      const testResponse = await pa11y('https://singhkunal2050.dev',
        {chromeLaunchConfig: {
          ignoreHTTPSErrors: false,
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        }}
      )
      res.status(200).json(testResponse)
    } catch (err) {
      res.status(504).json({
        'error': `Server Issue! ${err}`
      })
    }
  }
})

app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`)
})


// async function run(){
//   const response = await pa11y('https://singhkunal2050.dev')
//   console.log(response)
// }

// run()
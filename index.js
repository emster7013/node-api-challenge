require('dotenv').config()
const server =require('./server')

const PORT = process.env.PORT || 3222

server.listen(PORT,() =>{
    console.log(`\n***Listening on port ${PORT} ***\n`)
})

import express from 'express'
import cors from 'cors'
import connect from './connect/connect.js'
import router from './routes/routes.js'

const app= express()
app.use(cors())
app.use(express.json())
// connect()
app.use('/api/', router)
const port = process.env.PORT ||3000 
app.listen(port,()=>console.log(`http://localhost:${port}`))
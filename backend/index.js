import express from 'express'
import cors from 'cors'
import connect from './connect/connect.js'
import router from './routes/routes.js'

const app = express()

// Configure CORS for production
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://shakibkumnali.vercel.app', 'http://localhost:5173']
    : 'http://localhost:5173'
}))

app.use(express.json())

// Connect to MongoDB
connect()

// Routes
app.use('/api', router)

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
}

export default app
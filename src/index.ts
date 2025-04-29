import express, { Request, Response } from 'express';
import cors from "cors";
import { configDotenv } from 'dotenv';
import healthRoute from './routes/health/healthRoute'
import offer from './routes/offer'
const app = express()
const port = 3000

//initilaizing dot env
configDotenv()


//required middlewares
app.use(cors())
app.use(express.json())


//routes specification
app.use('/health',healthRoute);
app.use('/api',offer)

app.get('/', (req:Request, res:Response) => {
  res.send('welcome to portega Ai')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


export default app;
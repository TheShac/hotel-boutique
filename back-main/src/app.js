import  express  from 'express';
import indexrouter from './routes/index.routes.js';
import { PORT } from './config/config.js'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: 'http://localhost:4200' //Puerto de Angular
}))
app.use(express.json())

app.use(indexrouter)


app.use((req,res,next)=> {
    res.status(404).json({
        message:"Endpoint not found"
    })
})

app.listen(PORT)
console.log('http://localhost:3000/ping/')
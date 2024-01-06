import { Router } from 'express'
import typeOfUser from './routes/typeOfUser.js'

export default function routes(app: Router) {
    app.use("/typeOfUser", typeOfUser )
    return
} 
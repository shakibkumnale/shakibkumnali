import express from 'express'
import { fetch } from '../controller/fetch.js'

const router = express.Router()

router.get('/',fetch)

export default router
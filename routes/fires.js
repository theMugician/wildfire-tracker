import express from 'express'
import { getFires, createFires } from '../controllers/fires.js'
import verifyToken from '../controllers/verifyToken.js'

const router = express.Router()

router.get('/', getFires)
router.post('/', verifyToken, createFires)

export default router
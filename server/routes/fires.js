import express from 'express'

import { getFires, createFires } from '../controllers/fires.js'

const router = express.Router()

router.get('/', getFires)
router.post('/', createFires)

export default router
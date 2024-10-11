import { Router } from "express";
import VariableRoute from './variables-routes'
import CardRoute from './cards-routes'

const router = Router()

router.use(VariableRoute)
router.use(CardRoute)

export default router;
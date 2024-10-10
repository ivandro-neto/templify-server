import express from "express";
import { createVariable, deleteVariable, getVariables, updateVariable } from "../controllers/variables-controller";

const router = express.Router();

router.get('/api/v1/:tempid/variables', getVariables);
router.post('/api/v1/:tempid/variable', createVariable);
router.patch('/api/v1/:tempid/variable', updateVariable);
router.delete('/api/v1/:tempid/variable/:varid', deleteVariable);

export default router;
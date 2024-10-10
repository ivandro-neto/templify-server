import express from "express";
import { createVariable, deleteVariable, getVariables, updateVariable } from "../controllers/variables-controller";

const router = express.Router();

router.get('/:tempid/variables', getVariables);
router.post('/:tempid/variable', createVariable);
router.patch('/:tempid/variable/:varid', updateVariable);
router.delete('/:tempid/variable/:varid', deleteVariable);

export default router;
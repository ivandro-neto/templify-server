import express from "express";
import { createCard, deleteCard, getCards, updateCard } from "../controllers/cards-controller";

const router = express.Router();

router.get('/:tempid/cards', getCards);
router.post('/:tempid/card', createCard);
router.patch('/:tempid/card/:cardid', updateCard);
router.delete('/:tempid/card/:cardid', deleteCard);

export default router;
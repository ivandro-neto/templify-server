import type { Request, Response, NextFunction } from "express";
import { CreateCard } from "../usecases/cards/create-card-usecase";
import { GetCards } from "../usecases/cards/get-cards-usecase";
import { UpdateCard } from "../usecases/cards/update-card-usecase";
import { DeleteCard } from "../usecases/cards/delete-card-usecase";

// Criação de variável
export const createCard = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const tempId = req.params.tempid;

  try {
    const result = await CreateCard(body, tempId);
    res.status(201).json({ status: 201, data: result });
  } catch (error) {
    next(error); // Propaga o erro para o middleware de tratamento de erros
  }
};

// Obtenção de variáveis
export const getCards = async (req: Request, res: Response, next: NextFunction) => {
  const tempId = req.params.tempid;

  try {
    const result = await GetCards(tempId);
    res.status(200).json({ status: 200, data: { template: tempId, cards: result } });
  } catch (error) {
    next(error); // Propaga o erro para o middleware de tratamento de erros
  }
};

export const updateCard = async (req: Request, res: Response, next: NextFunction) => {
  const {tempid, cardid} = req.params
  
  try {
    const result = await UpdateCard(req.body, tempid, cardid);
    res.status(200).json({ status: 200, data: { variable: result } });
  } catch (error) {
    next(error)
  }
}

export const deleteCard = async (req: Request, res: Response, next: NextFunction) => {
  const {tempid, cardid} = req.params

  try {
    const result = await DeleteCard(cardid, tempid);
    res.status(200).json({ status: 200, data: { variable: result } })
  } catch (error) {
    next(error)
  }
}
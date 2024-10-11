import type { Request, Response, NextFunction } from "express";
import { CreateVariables } from "../usecases/variables/create-variables-usecase";
import { GetVariables } from "../usecases/variables/get-variable-usecase";
import { UpdateVariables } from "../usecases/variables/update-variables-usecase";
import { DeleteVariable } from "../usecases/variables/delete-variable-usecase";

// Criação de variável
export const createVariable = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const tempId = req.params.tempid;

  try {
    const result = await CreateVariables(body, tempId);
    res.status(201).json({ status: 201, data: result });
  } catch (error) {
    next(error); // Propaga o erro para o middleware de tratamento de erros
  }
};

// Obtenção de variáveis
export const getVariables = async (req: Request, res: Response, next: NextFunction) => {
  const tempId = req.params.tempid;

  try {
    const result = await GetVariables(tempId);
    res.status(200).json({ status: 200, data: { template: tempId, variables: result } });
  } catch (error) {
    next(error); // Propaga o erro para o middleware de tratamento de erros
  }
};

export const updateVariable = async (req: Request, res: Response, next: NextFunction) => {
  const {tempid, varid} = req.params
  
  try {
    const result = await UpdateVariables(req.body, tempid, varid);
    res.status(200).json({ status: 200, data: { variable: result } });
  } catch (error) {
    next(error)
  }
}

export const deleteVariable = async (req: Request, res: Response, next: NextFunction) => {
  const {tempid, varid} = req.params

  try {
    const result = await DeleteVariable(varid, tempid);
    res.status(200).json({ status: 200, data: { variable: result } })
  } catch (error) {
    next(error)
  }
}
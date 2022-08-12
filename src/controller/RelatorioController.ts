import { getRepository } from "typeorm";
import { Relatorio } from '../entity/Relatorio';
import { Request, Response } from "express";


export const getRelatorio = async (request: Request, response: Response) => 
{
    const relatorio = await getRepository(Relatorio).find()
        return response.json(relatorio);    
};
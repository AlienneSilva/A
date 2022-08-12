import { Cliente } from '../entity/Cliente';
import { Request, Response } from "express";
import { getRepository } from "typeorm";


export const getCliente = async (request: Request, response: Response) => 
{
    const cliente = await getRepository(Cliente).find()
        return response.json(cliente);    
};

export const saveCliente = async (request: Request, response: Response) => 
{
    const cliente = await getRepository(Cliente).save(request.body)
        return response.json(cliente);    
};

export const getClientes = async (request: Request, response: Response) => 
{
    const {id} = request.params
    const cliente = await getRepository (Cliente).find()
        return response.json(cliente);    
};

export const updateCliente = async (request: Request, response: Response) => 
{
    const {id} = request.params 
    const cliente = await getRepository(Cliente).update(id, request.body)

    if (cliente.affected == 1){
        const clienteUpdated = await getRepository(Cliente).find()
        return response.json(clienteUpdated);
    }
    else {
        return response.status(404).json ({ message: 'Cliente não encontrado!'})
    }      
};

export const deleteCliente = async (request: Request, response: Response) => 
{
    const {id} = request.params 
    const cliente = await getRepository(Cliente).delete(id)

    if (cliente.affected == 1){
        return response.status(200).json ({mesage: "Cliente excluido com sucesso"});
    }

    else {
        return response.status(404).json ({message: 'Cliente não encontrado!'});
    }      
};

export const finishedCliente = async (request: Request, response: Response) => 
{
    const {id} = request.params 
    const cliente = await getRepository(Cliente).update(id, {
        finished: true,
    })

    if (cliente.affected == 1){
        const clienteFinished = await getRepository(Cliente).find()
        return response.json(clienteFinished);
    }
    else {
        return response.status(404).json ({ message: 'Cliente não encontrado!'})
    }      
};



import { Router, request, response, Request, Response } from 'express'

import { getCliente } from './controller/ClienteController';
import { saveCliente } from './controller/ClienteController';
import { getClientes } from './controller/ClienteController';
import { getRelatorio } from './controller/RelatorioController';
import { updateCliente } from './controller/ClienteController';
import { deleteCliente } from './controller/ClienteController';
import { finishedCliente } from './controller/ClienteController';

const routes = Router()

routes.get ('/home', (request: Request, response: Response) => {
    return response.json({})
})
routes.post('/cliente', (request: Request, response: Response) => {
    return response.json({})
})
routes.get('/cliente/:id', (request: Request, response: Response) => {
    return response.json({})
})
routes.put('/cliente/:id', (request: Request, response: Response) => {
    return response.json({})
})
routes.delete('/cliente/:id', (request: Request, response: Response) => {
    return response.json({})
})
routes.patch('/cliente/:id', (request: Request, response: Response) => {
    return response.json({})
})
routes.get('/cliente', getCliente)
routes.post('/cliente', saveCliente)
routes.get('/cliente/:id', getClientes)
routes.get('/relatorio/:id',getRelatorio)
routes.put('/cliente/:id', updateCliente)
routes.delete('/cliente/:id', deleteCliente)
routes.patch('/cliente/:id', finishedCliente)

routes.get('/relatorio/:id', (request: Request, response: Response) => {
    return response.json({})
})


export default routes
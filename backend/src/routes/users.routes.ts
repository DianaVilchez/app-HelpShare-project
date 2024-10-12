import express, { Router } from 'express';
import { createUser, loginUser, getAllUsers,getIdUser, putUser, deleteUser } from '../controller/users.controller';

const routerUsers: Router = express.Router();

routerUsers.get('/', getAllUsers);
routerUsers.get('/:email', getIdUser);
routerUsers.put('/:email', putUser);
routerUsers.delete('/:email', deleteUser);
routerUsers.post('/login', loginUser,);
routerUsers.post('/create', createUser);

export { routerUsers};
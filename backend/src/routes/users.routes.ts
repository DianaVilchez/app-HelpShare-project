import express, { Router } from 'express';
import { createUser } from '../controller/users.controller';

const routerUsers: Router = express.Router();

routerUsers.get('/',);
routerUsers.post('/', createUser);

export { routerUsers};
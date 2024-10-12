import express, { Router } from 'express';
import { createOffer } from '../controller/offer.controller';

const routerOffers: Router = express.Router();

routerOffers.post('/', createOffer);


export { routerOffers};
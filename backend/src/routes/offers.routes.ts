import express, { Router } from 'express';
import { createOffer, getOffers, updateOffer } from '../controller/offer.controller';

const routerOffers: Router = express.Router();

routerOffers.post('/', createOffer);
routerOffers.get('/', getOffers);
routerOffers.put('/:id', updateOffer);

export { routerOffers};
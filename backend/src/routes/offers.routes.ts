import express, { Router } from 'express';
import { createOffer, getOffers } from '../controller/offer.controller';

const routerOffers: Router = express.Router();

routerOffers.post('/', createOffer);

routerOffers.get('/', getOffers);


export { routerOffers};
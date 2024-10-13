import express, { Router } from 'express';
<<<<<<< HEAD
import { createOffer, getOffers, updateOffer, deleteOffer, searchOffers } from '../controller/offer.controller';
=======
import { createOffer, getOffers, updateOffer, deleteOffer, searchOffers, getOfferById } from '../controller/offer.controller';

>>>>>>> d5d68616a28765840a2ee30cc9858b99a2a3302c
const routerOffers: Router = express.Router();
routerOffers.post('/', createOffer);
routerOffers.get('/', getOffers);
routerOffers.get('/:id_user', getOfferById);
routerOffers.put('/:id', updateOffer);
routerOffers.delete('/:id', deleteOffer);
routerOffers.get('/search', searchOffers);
export { routerOffers};
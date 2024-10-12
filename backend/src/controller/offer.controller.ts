import { Request, Response } from "express";
import Offer from "../models/Offers.models";
import User from "../models/Users.models";

// Crear una nueva oferta
export const createOffer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description, category, id_user } = req.body;

    // Validar que el usuario existe
    const user = await User.findByPk(id_user);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const newOffer = await Offer.create({
      title,
      description,
      category,
      id_user, // Asociar la oferta al usuario que la creó
    });
    // console.log("🚀 ~ newOffer:", newOffer)
    
    res.status(200).json(newOffer);
  } catch (error) {
    console.error("Error creating offer:", error);
    res.status(500).json({ message: "Error creating offer" });
  }
};

// Obtener todas las ofertas
export const getOffers = async (req: Request, res: Response): Promise<void> => {
  try {
    const offers = await Offer.findAll({
      include: [
        {
          model: User,
          attributes: ["username"], // Solo devuelve el campo 'username' del usuario
        },
      ],
    });
    //   console.log("Offers",offers);
    res.status(200).json(offers);
  } catch (error) {
    console.error("Error fetching offers:", error);
    res.status(500).json({ message: "Error fetching offers" });
  }
};

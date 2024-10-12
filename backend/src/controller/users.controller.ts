import { Request, Response } from 'express';
import User from '../models/Users.models';

export const createUser = async(req:Request, resp:Response): Promise<void> => {
    try {
        const {username, password, email} = req.body;
        const user = await User.create({ username, email, password});
        resp.status(201).json(user);
    } catch (error) {
      console.log("🚀 ~ createUser ~ error:", error)
      resp.status(500).json("ERROR")    
    }
  }
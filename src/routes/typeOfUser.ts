import { Router, Request, Response } from "express";
import dbConnection from "../middleware/dbConnection";
import TypeOfUser from "../mongodb/TypeOfUser";

const typeOfUser = Router();

export default typeOfUser
  .post("/create", dbConnection, async (req: Request, res: Response) => {
    try {
      // #swagger.tags = ['Type Of User']
      /* #swagger.parameters['nome'] = {
        name: <string> 
      }
      */

      const { nome } = req.body;

      const dbResponse = await TypeOfUser.create({ nome });

      res.status(200).json({
        status: "0k",
        response: dbResponse,
      });
    } catch (error) {
      throw new Error(error);
    }
  })
  .get("/read", dbConnection, async (req: Request, res: Response) => {
    try {
      // #swagger.tags = ['Type Of User']

      const dbResponse = await TypeOfUser.find();

      res.status(200).json({
        status: "0k",
        response: dbResponse,
      });
    } catch (error) {
      throw new Error(error);
    }
  })
  .put("/update/:id", dbConnection, async (req: Request, res: Response) => {
    try {
      // #swagger.tags = ['Type Of User']
      const { id } = req.params;

      const dbResponse = await TypeOfUser.findByIdAndUpdate(
        id,
        {
          Set: req.body,
        }
      );

      res.status(200).json({
        status: "0k",
        response: dbResponse,
      });
    } catch (error) {
      throw new Error(error);
    }
  })
  .delete("/delete/:id", dbConnection, async (req: Request, res: Response) => {
    try {
      // #swagger.tags = ['Type Of User']
      const { id } = req.params;
      const dbResponse = await TypeOfUser.findByIdAndDelete(id);

      res.status(200).json({
        status: "0k",
        response: "Deleted sucessufully",
      });
    } catch (error) {
      throw new Error(error);
    }
  });

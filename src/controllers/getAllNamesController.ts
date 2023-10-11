import { Request, Response } from "express";
import { getFirstNames } from "../dataModules/dataReader";

export const getAllNames = async (req: Request, res: Response) => {
  try {
    const firstNames = await getFirstNames();

    res.json({ all_names: firstNames });
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON:", error);
    res.status(500).json({ error: "Erro ao processar a solicitação" });
  }
};

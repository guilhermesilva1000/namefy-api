import { Request, Response } from "express";
import { getRandomItem } from "./getRandomItem";
import { getFirstNames } from "../dataModules/dataReader";
import { getLastNames } from "../dataModules/dataReader";
import { getEndNames } from "../dataModules/dataReader";

export const getRandomName = async (req: Request, res: Response) => {
  try {
    const firstNames = await getFirstNames();
    const lastNames = await getLastNames();
    const endNames = await getEndNames();

    const randomFirstName = getRandomItem(firstNames);
    const randomLastName = getRandomItem(lastNames);
    const randomEndName = getRandomItem(endNames);

    const randomFullName = `${randomFirstName} ${randomLastName} ${randomEndName}`;

    res.json({ full_name: randomFullName });
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON:", error);
    res.status(500).json({ error: "Erro ao processar a solicitação" });
  }
};

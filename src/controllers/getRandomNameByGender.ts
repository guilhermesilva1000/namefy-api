import { Request, Response } from "express";
import { getRandomItem } from "./getRandomItem";
import { getFirstNames } from "../dataModules/dataReader";
import { getLastNames } from "../dataModules/dataReader";
import { getEndNames } from "../dataModules/dataReader";

export const getRandomNameByGender = async (req: Request, res: Response) => {
  try {
    const firstNames = await getFirstNames();
    const lastNames = await getLastNames();
    const endNames = await getEndNames();

    const gender = req.params.gender;

    const genderNames = firstNames.filter(
      (name: any) => name.gender === gender
    );

    const randomLastName = getRandomItem(lastNames);
    const randomEndName = getRandomItem(endNames);

    if (genderNames.length > 0) {
      const randomIndex = Math.floor(Math.random() * genderNames.length);
      const randomFirstName = genderNames[randomIndex].name;

      const randomFullName = `${randomFirstName} ${randomLastName} ${randomEndName}`;

      res.json({ full_name: randomFullName });
    } else {
      res
        .status(404)
        .json({ error: "Nenhum nome encontrado com o gênero especificado" });
    }
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON:", error);
    res.status(500).json({ error: "Erro ao processar a solicitação" });
  }
};

import express, { Request, Response } from "express";
import { getAllNames } from "../controllers/getAllNamesController";
import { getRandomName } from "../controllers/getRandomName";
import { getRandomNameByGender } from "../controllers/getRandomNameByGender";

const router = express.Router();

router.get("/api/names", getAllNames);
router.get("/api/random", getRandomName);
router.get("/api/random/:gender", getRandomNameByGender);

export default router;

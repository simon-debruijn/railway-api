import "dotenv/config";
import express from "express";
import { Country } from "./country/country.model.mjs";
import { PORT } from "./constants.mjs";
import { Op } from "sequelize";

const app = express();

app.get("/", async (req, res) => {
  const { q } = req.query;
  const whereLike = {
    where: {
      name: {
        [Op.like]: `%${q}%`,
      },
    },
  };
  const countries = await Country.findAll(q ? whereLike : undefined);
  res.send({ count: countries.length, data: countries });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

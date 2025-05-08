import express, { Request, Response } from 'express';
import bodyParser from "body-parser";
import outfitRoutes from "./routes/outfitRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/", outfitRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

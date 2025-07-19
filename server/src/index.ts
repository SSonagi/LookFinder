import express, { Request, Response } from 'express';
import bodyParser from "body-parser";
import outfitRoutes from "./routes/outfitRoutes";
import pieceRoutes from "./routes/pieceRoutes";
import outfitPieceRoutes from "./routes/outfitPieceRoutes";

const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/outfit", outfitRoutes);
app.use("/pieces", pieceRoutes);
app.use("/outfitPieces", outfitPieceRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

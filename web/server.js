import express from "express";
import { fromFileUrl, dirname, join } from "std/path";

const app = express();
const __dirname = dirname(fromFileUrl(import.meta.url));
const PORT = 8000;

app.use(express.static(join(__dirname, "static")));


app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));

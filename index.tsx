import express from "express";
import { renderToString } from "preact-render-to-string";
import Counter from "./Component";
import { join } from "path";

const app = express();

app.use("/client",express.static(join(import.meta.dir,"./client")))

app.get("/", (req, res) => {
  return res.send(renderToString(<Counter/>));
});

app.listen(3000,()=>{
  console.log("listening")
})
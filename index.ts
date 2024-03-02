import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;


app.get('/', (req: Request, res: Response) => {
    const car = {make: "Toyota"}
    //res.send("Hello")
    res.send(car)
})

app.listen(port, () =>{
    console.log("The server is listening on port: " + port)
})

export default app
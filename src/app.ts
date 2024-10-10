import dotenv from "dotenv"
import express from "express"
import {connect} from "./database"
import VariableRoute from "./routes/variables-routes"

dotenv.config()

const app = express()
app.use(express.json())

app.get("/", (req, res) =>{
  res.send("Running")
})
app.use('/api/v1',VariableRoute)

const Run = async () =>{
  try{
    app.listen(process.env.PORT, () => console.log(`running:: http://localhost:${process.env.PORT}/`));
    connect()
  }catch(err){
    console.error(err)
  }
}

Run();
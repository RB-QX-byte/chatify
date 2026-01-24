//We have imported express 
import express from "express";
import dotenv from "dotenv";
import loginRoute from "../routes/User/login.js"
import logoutRoute from "../routes/User/logout.js"
import signupRoute from "../routes/User/signup.js"
import path from "path"
//Load environment variables
dotenv.config();

//Now we will use the express() function and call an app
const app = express()

const __dirname = path.resolve

//Assign a default port.
const port = process.env.PORT || 3000

//define the routes
app.use('/api/auth/login', loginRoute)
app.use('/api/auth/signup', signupRoute)
app.use('/api/auth/logout', logoutRoute)

//make ready for deployment
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,"../../client/dist")))

  app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname, "../../client" ,"dist","index.html"))
  })
}

//Now to inspect the port
app.listen(port, () => {
  console.log(`App is listening at PORT ${port}`)
})


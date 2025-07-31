/* eslint-disable @typescript-eslint/no-explicit-any */
import express, {  Request, Response } from "express";
import cors from "cors";
// import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
// import notFound from "./app/middlewares/notFound";
import cookeParser from "cookie-parser"
// import passport from "passport"
import expressSession from "express-session"
import { router } from "./app/routes";
// import "./app/config/passport"
// import { envVars } from "./app/config/env";


const app = express()



// app.use(expressSession({
//   secret: envVars.EXPRESS_SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }))


// app.use(passport.initialize())
// app.use(passport.session())
// app.use(cookeParser())
app.use(express.json())
app.use(cors())



app.use("/api/v1", router)


app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "welcome To Tour Ride Booking System Backend"
  })
})

// app.use(globalErrorHandler)

// app.use(notFound)



export default app
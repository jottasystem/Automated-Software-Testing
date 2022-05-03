import { Router } from 'express'
import * as Controller from "./controller";
const routes = Router()

routes.get("/palindromo/:word", Controller.checkIfIsPalindromo)


export default routes
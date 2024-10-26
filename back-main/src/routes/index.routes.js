import  {Router}  from 'express';
import { ping, login, registerUser } from '../controllers/index.controllers.js'

const router = Router()

router.get('/ping',ping)
router.post('/login', login);
router.post('/register', registerUser)

export default router;
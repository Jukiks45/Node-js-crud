import express from "express";
import {
    getUsers,
    getUserByid,
    createuser,
    updateuser,
    deleteuser
} from "../controllers/userController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserByid);
router.post('/users/', createuser);
router.patch('/users/:id', updateuser);
router.delete('/users/:id', deleteuser);

export default router;
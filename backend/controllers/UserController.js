import user from "../models/usermodels.js";

export const getUsers = async(req,res)=>{
    try {
        const response = await user.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserByid = async(req,res)=>{
    try {
        const response = await user.findOne({
            where:{
                id: req.params.id 
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const createuser = async(req,res)=>{
    try {
        await user.create(req.body);
        res.status(201).json({msg:"User Berhasil Ditambahkan"});
    } catch (error) {
        console.log(error.message);
    }
}
export const updateuser = async(req,res)=>{
    try {
        await user.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg:"User Berhasil di edit"});
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteuser = async(req,res)=>{
    try {
        await user.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg:"User Berhasil diHapus"});
    } catch (error) {
        console.log(error.message);
    }
}
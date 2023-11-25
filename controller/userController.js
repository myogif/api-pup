const models = require('../models');

// get user 
exports.getUser = async (req, res) => {
    try{
        const users = await models.users.findAll();

        let data = users.map(value => ({
            id: value.id,
            role_id: value.role_id,
            name: value.name,
            email: value.email,
            gender: value.gender ? 'laki-laki' : 'perempuan',
            no_hp: value.no_hp,
            alamat: value.alamat,
            image: value.image,
            
          }))
        if(users){
            return res.status(200).json({
              status: 'success',
              message: 'Succes Users list',
              data: data
            });
        }
    }catch(error){
        return res.status(400).json({
            status: 'failed',
            message: error.message
        });
    }
}

// get user 
exports.getUserById = async (req, res) => {
    try{
        const user = await models.users.findOne({
            where:{
                id: req.params.id
            }
        });
        
        let payload =  {
            id: user.id,
            role_id: user.role_id,
            name: user.name,
            email: user.email,
            gender: user.gender ? 'laki-laki' : 'perempuan',
            no_hp: user.no_hp,
            alamat: user.alamat,
            image: user.image,
            
          }
        if(!user){
            return res.status(404).json({
                status: 'failed',
                message: 'User Not Found'
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Succes Users list',
            data: payload
        });
    }catch(error){
        return res.status(400).json({
            status: 'failed',
            message: error.message
        });
    }
}

// daftar 
exports.addUser = async (req, res) => {
    try{
        const {
            role_id,
            name,
            email,
            alamat,
            password,
            gender,
            no_hp,
        } = req.body;
        
        const created_at = new Date();
        const updated_at = new Date();
    
        const check_email = await models.users.findOne({
            where:{
                email: email
            }
        });
    
        if(check_email){
            return res.status(400).json({
                status: 'failed',
                message: 'Email already exist'
            });
        }
        
        const user = await models.users.create({
            role_id,
            name,
            email,
            alamat,
            password,
            gender,
            no_hp,
            created_at,
            updated_at
          });
        if(user){
            return res.status(200).json({
              status: 'success',
              message: 'User has been registered',
            });
        }
    }catch(error){
        return res.status(400).json({
            status: 'failed',
            message: error.message
        });
    }

}

//Update User 
exports.UpdateUser = async (req, res) => {
    try{
        const {
            role_id,
            name,
            email,
            alamat,
            password,
            gender,
            no_hp,
            image,
        } = req.body;
        
        const created_at = new Date();
        const updated_at = new Date();


    }catch(error){
        return res.status(400).json({
            status: 'failed',
            message: error.message
        });
    }
}
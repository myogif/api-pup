const models = require('../models');

// daftar 
exports.addAccount = async (req, res) => {
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
              message: 'Account has been registered',
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

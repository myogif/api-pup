const models = require('../models')
// login 
exports.login = async (req, res) => {
    try{
      const {
        email,
        password
      } = req.body
      
      const user = await models.users.findOne({
        where:{
          email: email,
          password: password
        },
        include: [
          {
          model: models.roles,
          attributes: ['name'],
          }
        ]
      });

      if(!user){
        return res.status(400).json({
          status: 'fail',
          message: 'email / password salah'
        })
      }

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

      return res.status(200).json({
        status: 'success',
        message: 'success login',
        data: payload
      });
    }catch(error){
        return res.status(500).json({
          status: 'failed',
          message: error.message
        });
        
      }
}


// forgot password Send Email Using MailTrap 

// store password 
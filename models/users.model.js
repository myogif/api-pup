module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
        }, 
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }, 
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        }, 
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        no_hp: {
            type: DataTypes.INTEGER(20),
            allowNull: false,
        }, 
        alamat: {
            type: DataTypes.STRING(100),
            allowNull: false
        }, created_at:{
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at:{
            type: DataTypes.DATE,
            allowNull: true,
        }
    },{
        tableName: "users"
    });

    users.associate = (models) => {
        users.belongsTo(models.roles,{foreignKey: 'role_id'});
    };
    return users;
}
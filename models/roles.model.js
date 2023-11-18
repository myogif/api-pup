module.exports = (sequelize, DataTypes) => {
    const roles = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false, 
        }, 
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        created_at:{
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

    roles.associate = (models) => {
        roles.hasOne(models.roles,{foreignKey: "id",});
    };
    return roles;
}
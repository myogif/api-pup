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
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false,
        },
    },{
        tableName: "users"
    });

    roles.associate = (models) => {
        roles.hasOne(models.roles,{foreignKey: "id",});
    };
    return roles;
}
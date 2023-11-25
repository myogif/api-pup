module.exports = (sequelize, DataTypes) => {
    const roles = sequelize.define('roles', {
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
        tableName: "roles"
    });

    roles.associate = (models) => {
        roles.hasMany(models.users,{foreignKey: "id",});
    };
    return roles;
}
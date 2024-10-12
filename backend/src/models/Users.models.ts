// import { DataTypes, Model } from "sequelize";
// import {sequelize} from "../config/sequelize";

// class User extends Model {
//     public username!: string;
//     public password!: string;
//     public email!: string;
// }

// User.init({
//     id_user: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         field: 'id_user',
//     },
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     password: {
//         type: DataTypes.STRING,   
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING,   
//         allowNull: false
//     }

// }, {
//     sequelize,
//     modelName: "User",
//     tableName: "users",
//     timestamps: false   
// });

// export default User;


import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config/sequelize";

class User extends Model {
    public username!: string;
    public password!: string;
    public email!: string;
}

User.init({
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_user',
    },
    username: {
        type: DataTypes.STRING,
        // allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,   
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,   
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false   
});

export default User;
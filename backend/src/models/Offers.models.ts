// import { DataTypes, Model } from "sequelize";
// import {sequelize} from "../config/sequelize";
// import User from "./Users.models";

// class Offer extends Model {
//     public id_offer?: number;
//     public id_user?: number;
//     public title!: string;
//     public description!: string;
//     public category!: string;
// }

// Offer.init({
//     id_offer: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         field: 'id_offer',
//     },
//     id_user: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: User,
//             key: 'id_user',
//         },
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

// export default Offer;


import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config/sequelize";
import User from "./Users.models";

class Offer extends Model {
    public id_offer?: number;
    public id_user?: number;
    public title!: string;
    public description!: string;
    public category!: string;
}

Offer.init({
    id_offer: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_offer',
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id_user',
        },
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,   
        allowNull: false
    },
    category: {
        type: DataTypes.ENUM('product', 'service'),
        allowNull: false
    }

}, {
    sequelize,
    modelName: "Offer",
    tableName: "offers",
    timestamps: false   
});

export default Offer;
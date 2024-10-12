import User from './Users.models';
import Offer from './Offers.models';

User.hasMany(Offer, { foreignKey: 'id_user' });
Offer.belongsTo(User, { foreignKey: 'id_user' });
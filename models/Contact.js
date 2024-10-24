import { DataTypes } from 'sequelize';
import sequelize from '../utils/db';

const Contact = sequelize.define('Contact', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  address: DataTypes.STRING,
});

export default Contact;

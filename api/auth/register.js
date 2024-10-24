import bcrypt from 'bcryptjs';
import { User } from '../../models';

export default async function register(req, res) {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashedPassword });
  res.status(201).json({ message: 'User registered' });
}

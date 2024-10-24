import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../models';

export default async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
}

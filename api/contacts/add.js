import { Contact } from '../../models';

export default async function addContact(req, res) {
  const { name, email, phone, address } = req.body;
  const newContact = await Contact.create({ name, email, phone, address });
  res.status(201).json(newContact);
}

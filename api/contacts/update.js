import { Contact } from '../../models';

export default async function updateContact(req, res) {
  const { id, name, email, phone, address } = req.body;
  const contact = await Contact.findByPk(id);

  if (!contact) return res.status(404).json({ message: 'Contact not found' });

  contact.name = name;
  contact.email = email;
  contact.phone = phone;
  contact.address = address;
  await contact.save();

  res.status(200).json(contact);
}

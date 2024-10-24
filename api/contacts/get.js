import { Contact } from '../../models';

export default async function getContacts(req, res) {
  const contacts = await Contact.findAll();
  res.status(200).json(contacts);
}

import { Contact } from '../../models';

export default async function deleteContact(req, res) {
  const { id } = req.body;
  const contact = await Contact.findByPk(id);
  if (!contact) return res.status(404).json({ message: 'Contact not found' });

  await contact.destroy();
  res.status(200).json({ message: 'Contact deleted' });
}

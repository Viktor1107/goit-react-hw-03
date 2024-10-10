import s from "./ContactList";
import ContactItem from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.item}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}

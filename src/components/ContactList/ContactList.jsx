import s from "./ContactList";
import Contact from "../contact/contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.item}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}

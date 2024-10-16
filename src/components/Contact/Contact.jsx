import s from "./Contact.module.css";
import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function ContactItem({ contact, onDelete }) {
  return (
    <li className={s.item}>
      <div className={s.wrap}>
        <div className={s.span}>
          <p>
            <FaUserTie /> {contact.name}
          </p>
          <p>
            <FaPhone /> {contact.number}
          </p>
        </div>
        <button className={s.btn} onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

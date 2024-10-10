import s from "./SearchBox.module.css";

export default function SearchBox({ filter, handleChange }) {
  return (
    <div className={s.wrap}>
      <p className={s.text}>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange} />
      {/* <p>{filter}</p> */}
    </div>
  );
}

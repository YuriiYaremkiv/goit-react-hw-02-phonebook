import css from './ContactList.module.scss';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.contactList__item}>
            <p>
              {name}: {number}
            </p>
            <button type="button">Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

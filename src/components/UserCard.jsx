import "./styles/UserCard.css";

const UserCard = ({ user, deleteUsers, setInfoUpdate, setIsDisable }) => {
  const handleEditar = () => {
    setInfoUpdate(user);
    setIsDisable(false);
  };

  return (
    <>
      <div className="article__user">
        <h3 className="article__nombres">
          {user.first_name} {user.last_name}
        </h3>
        <hr className="hr__user" />
        <ul className="ul__user">
          <li className="li__user">
            <span className="span__user">Email: </span>
            {user.email}
          </li>
          <li className="li__user">
            <span className="span__user">Birthday</span>
            <i className="bx bx-gift">
              <span> {user.birthday}</span>
            </i>
          </li>
        </ul>
        <hr className="hr__user" />
        <div className="div__botones">
          <button className="boton_borrar" onClick={() => deleteUsers("/users", user.id)}>
           
            <i className="bx bx-trash imagen_borrar"></i>
          </button>
          <button className="boton_editar" onClick={handleEditar}>
            <i className="bx bx-edit"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserCard;

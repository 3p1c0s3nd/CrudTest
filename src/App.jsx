import { useEffect, useState } from "react";
import "./App.css";
import useCrud from "./hooks/useCrud";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";

function App() {
  const [isDisable, setIsDisable] = useState(false);
  const [infoUpdate, setInfoUpdate] = useState();
  const url = "https://users-crud.academlo.tech";
  const [users, getUsers, createUsers, deleteUsers, updateUsers] = useCrud(url);
  useEffect(() => {
    getUsers("/users");
  }, []);

  const handleCreateUser = () => {
    setInfoUpdate();
    setIsDisable(false);
  };
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold ">Users</h1>
        <div className="flex justify-end">
          <button onClick={handleCreateUser} className="form__btn_create">Create New User</button>
        </div>
        
        <FormUser
          createUsers={createUsers}
          infoUpdate={infoUpdate}
          updateUsers={updateUsers}
          setInfoUpdate={setInfoUpdate}
          isDisable={isDisable}
          setIsDisable={setIsDisable}
        />
      </div>
      <div className="flex flex-wrap">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUsers={deleteUsers}
            setInfoUpdate={setInfoUpdate}
            setIsDisable={setIsDisable}
          />
        ))}
      </div>
    </>
  );
}

export default App;

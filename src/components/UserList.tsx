import React from "react";
// import type {} from 'redux-thunk/extend-redux';
import { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
// import { fetchUsers } from "../store/action-creators/user";
import { useActions } from "../hooks/useActions";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="content_users">
      <h3 className="title">User List</h3>
      {loading ? (
        <h3>Идёт загрузка...</h3>
      ) : (
        <div>
          {error ? (
            <h3>{error}</h3>
          ) : (
            <div className="users">
              {users.map((user) => (
                <div className="user" key={user.id}>
                  {/* <div className="avatar"/> */}
                  {user.name}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserList;

import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const TodoList: React.FC = () => {
  const { page, limit, loading, error, todos } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  return (
    <div className="content_todos">
      <h3 className="title">Todo List</h3>
      {loading ? (
        <h3>Идёт загрузка...</h3>
      ) : (
        <div>
          {error ? (
            <h3>{error}</h3>
          ) : (
            <div className="todos">
              {todos.map((todo) => (
                <div className="todo" key={todo.id}>
                  {todo.id}. {todo.title}
                </div>
              ))}
              <div className="pages">
                {pages.map((p) => (
                  <div
                    onClick={() => setTodoPage(p)}
                    key={p}
                    className="page"
                    style={{
                      border:
                        p === page
                          ? "2px solid #fff"
                          : "1px solid rgb(0, 78, 114)",
                    }}
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;

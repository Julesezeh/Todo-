import { useState } from "react";

function Main() {
  const [seen, setSeen] = useState(false);

  const todoItems = [
    {
      id: 1,
      title: "Go to Market",
      description: "Buy ingredients to prepare dinner",
      completed: true,
    },
    {
      id: 2,
      title: "Study",
      description: "Read Algebra and History textbook for the upcoming test",
      completed: false,
    },
    {
      id: 3,
      title: "Sammy's books",
      description: "Go to library to return Sammy's books",
      completed: true,
    },
    {
      id: 4,
      title: "Article",
      description: "Write article on how to use Django with React",
      completed: false,
    },
  ];

  const CompletedBar = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={seen ? "nav-link active" : "nav-link"}
          onClick={() => setSeen(true)}
        >
          Complete
        </span>
        <span
          className={seen ? "nav-link" : "nav-link active"}
          onClick={() => setSeen(false)}
        >
          Incomplete
        </span>
      </div>
    );
  };

  const Items = () => {
    return (
      <div>
        {todoItems
          .filter((datum) => datum.completed === seen)
          .map((data, index) => (
            <li
              key={data.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span
                className={`todo-title mr-2 ${seen ? "completed-todo" : ""}`}
                title={data.description}
              >
                {data.title}
              </span>
              <span>
                <button className="btn btn-secondary mr-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </span>
            </li>
          ))}
      </div>
    );
  };

  return (
    <main className="container">
      <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button className="btn btn-primary">Add task</button>
            </div>
            {CompletedBar()}
            <ul className="list-group list-group-flush border-top-0">
              {Items()}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

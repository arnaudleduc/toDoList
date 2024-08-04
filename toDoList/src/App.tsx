import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.length === 0) {
      alert("Please, enter a task");
    } else {
      const tmp = [...taskList];
      tmp.push(inputValue);
      setTaskList(tmp);
    }
    console.log("likste de tache", taskList);
  };

  return (
    <div className="container">
      <div id="new-task">
        <input
          type="text"
          placeholder="Task to be done"
          value={inputValue}
          onChange={handleInputValueChange}
        />
        <button id="push" onClick={handleButtonClick}>
          Add
        </button>
      </div>
      {taskList.map((task, index) => {
        return (
          <div id="tasks" key={`task-n-${index}`}>
            <div className="task">
              <span id="task-name">{task}</span>
              <button className="delete">
                <img src="/images/deleteIcon.png" alt="Delete task" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;

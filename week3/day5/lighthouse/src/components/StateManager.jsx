import React, { useEffect, useState } from "react";

export default function StateManager() {
  const [taskList, setTaskList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [beaconOn, setBeaconOn] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setTimeout(
      () => {
        if (Math.random() < 0.3) {
          setTaskList([]);
          setErrorMsg("Fetch failed");
        } else {
          setTaskList([
            { task: "Homework", priority: "high" },
            { task: "Grocery Shopping", priority: "medium" },
            { task: "Laundry", priority: "low" },
            { task: "Study for Exam", priority: "high" },
            { task: "Clean Room", priority: "medium" },
            { task: "Pay Bills", priority: "high" },
            { task: "Workout", priority: "medium" },
            { task: "Call Family", priority: "low" },
            { task: "Finish Project", priority: "high" },
            { task: "Read Book", priority: "low" },
          ]);
          setErrorMsg("");
        }
        setLoading(false);
      },
      Math.floor(Math.random() * 1500),
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setBeaconOn((prev) => !prev);
    }, 1000);
    return () => {
      clearInterval(id);
      console.log("Beacon interval cleared");
    };
  }, []);

  let status;
  if (loading) {
    status = "Loading...";
  } else if (errorMsg !== "") {
    status = `Error: ${errorMsg}`;
  } else {
    status = "Success";
  }

  return (
    <div>
      <div>
        <h3>Beacon Panel</h3>
        <p>Beacon Pulse: {beaconOn ? "ON" : "OFF"}</p>
      </div>

      <div>
        <h3>Status Panel</h3>
        <p>{status}</p>
      </div>

      <div>
        <h3>Controls Panel</h3>
        <button onClick={fetchData}>Reload</button>
        <label htmlFor="filter">Filter by priority:</label>
        <select
          id="filter"
          name="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">None</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>

      <h3>Data Display Panel</h3>
      <div>
        {taskList
          .filter((task) => filter === "" || task.priority === filter)
          .map((task, idx) => {
            return (
              <div key={idx}>
                <p>{task.task}</p>
                <p>{`${task.priority} priority`}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

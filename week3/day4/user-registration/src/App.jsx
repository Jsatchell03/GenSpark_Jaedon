import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import DisplayData from "./components/DisplayData";

function App() {
  const [userData, setUserData] = useState([]);
  return (
    <div className="flex flex-row gap-4 items-center h-screen bg-gray-300">
      <RegistrationForm setUserData={setUserData} userData={userData} />
      {userData.length > 0 && <DisplayData userData={userData} />}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Notification from "./Components/Notification";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axios.get(`https://localhost:3000/${notifications}`);
        console.log(response.data);
        setNotifications(response.data);
        return response.data;
      } catch (error) {
        throw error;
      }
    };
    getNotifications();
  }, []);

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  return (
    <div className="App">
      <img
        src="https://images.squarespace-cdn.com/content/v1/5e45fd7b05ae4e3f2f2ed60f/1581645908407-OU71JDZN3L0QV38JKDGQ/Resilia_Final_FullColor.jpg?format=1500w"
        alt=" "
      />
      <Notification notifications={notifications} />
    </div>
  );
}

export default App;

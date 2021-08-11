import { useEffect,useState } from "react"
import axios from "axios"
import './App.css';
import Notification from './Components/Notification';

function App() {
  const [notification, setNotification] = useState([])

  useEffect(() => {
    const getNotifications = async () => {
      const resp = await axios.get("http://localhost:3000/notifications");
      setNotification(resp.data);
    };
    getNotifications();
  })

  return (
    <div className="App">
      <img src="https://images.squarespace-cdn.com/content/v1/5e45fd7b05ae4e3f2f2ed60f/1581645908407-OU71JDZN3L0QV38JKDGQ/Resilia_Final_FullColor.jpg?format=1500w" />
      <Notification notification={notification}/>
    </div>
  );
}

export default App;

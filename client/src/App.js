import React, {useState, useEffect} from 'react';
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [isInitiated, setIsInitiated] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const token = localStorage.getItem("token");
    const {data} = await axios.get('api/user/init?token='+token);
  };

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
  }

export default App;

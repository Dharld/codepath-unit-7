import Sidebar from "./components/Sidebar/sidebar.component.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.scss";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <div className="container">
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

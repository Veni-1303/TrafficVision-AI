import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTrafficStatistics } from "../services/trafficService";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total_records: 0,
    average_vehicle_count: 0,
    average_speed: 0,
    traffic_condition: "Loading...",
    weather: "Loading...",
  });

  useEffect(() => {
    async function loadStatistics() {
      try {
        const data = await getTrafficStatistics();
        setStats(data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    }

    loadStatistics();
  }, []);

  const today = new Date();

  const currentDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currentTime = today.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard">

      {/* Top Navigation */}
      <header className="topbar">
        <h2>TrafficVision AI</h2>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Welcome Section */}
      <section className="welcome">

        <h1>Welcome, Admin</h1>

        <p>
          Smart Traffic Prediction & Congestion Management Dashboard
        </p>

        <div className="date-time">
          <p>{currentDate}</p>
          <p>{currentTime}</p>
        </div>

      </section>

      {/* Dashboard Cards */}

      <section className="cards">

        <div className="card vehicle">
          <h3>Vehicle Count</h3>
          <h2>{stats.average_vehicle_count}</h2>
          <p>Average vehicles from dataset</p>
        </div>

        <div className="card congestion">
          <h3>Congestion</h3>
          <h2>{stats.traffic_condition}</h2>
          <p>Current traffic condition</p>
        </div>

        <div className="card weather">
          <h3>Weather</h3>
          <h2>{stats.weather}</h2>
          <p>Live weather from dataset</p>
        </div>

        <div className="card status">
          <h3>Total Records</h3>
          <h2>{stats.total_records}</h2>
          <p>Dataset records loaded</p>
        </div>

      </section>

      {/* Footer */}

      <footer className="footer">
        <p>TrafficVision AI</p>
        <p>Smart Traffic Prediction & Congestion Management System</p>
        <p>Version 1.0</p>
      </footer>

    </div>
  );
}

export default Dashboard;
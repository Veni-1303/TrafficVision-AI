function Dashboard() {
  return (
    <div className="dashboard">
      <h1>TrafficVision AI Dashboard</h1>

      <h3>Welcome Admin</h3>

      <div className="cards">

        <div className="card">
          <h2>Vehicle Count</h2>
          <p>1250</p>
        </div>

        <div className="card">
          <h2>Congestion</h2>
          <p>Medium</p>
        </div>

        <div className="card">
          <h2>Weather</h2>
          <p>Sunny</p>
        </div>

        <div className="card">
          <h2>Traffic Status</h2>
          <p>Normal</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
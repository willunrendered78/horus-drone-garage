function FleetOverview({ drones }) {
    console.log(drones)

    return(
        <section id="dashboard" className="fleet-overview">
            <h2>Fleet Overview</h2>
            
            <div className="stats-container">
            <div className="stat-card">
              <h3>Total Drones</h3>
              <p>{drones.length}</p>
            </div>

            <div className="stat-card">
              <h3>Available</h3>
              <p>{drones.filter((aircraft) => aircraft.status === "Available").length}</p>
            </div>

            <div className="stat-card">
              <h3>Maintenance</h3>
              <p>{drones.filter((aircraft) => aircraft.status === "Maintenance").length}</p>
            </div>
          </div>

        </section>
    )
}
export default FleetOverview
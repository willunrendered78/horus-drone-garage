import { useState } from 'react'
import './App.css'
import FleetOverview from './components/FleetOverview/FleetOverview.jsx'
import DroneCard from './components/DroneCard'


function App() {
  const drones = [
  {
    id: 1,
    fleetId: "HORUS-01",
    name: "TITAN",
    manufacturer: "DJI",
    model: "Matrice 350 RTK",
    country: "China",
    category: "Inspection",
    battery: 95,
    status: "Available",
    image: "/drones/titan.png"
  },
  
  {
    id: 2,
    fleetId: "HORUS-02",
    name: "FALCON",
    manufacturer: "Parrot",
    model: "ANAFI Ai",
    country: "France",
    category: "Mapping",
    battery: 80,
    status: "Available",
    image: "/drones/falcon.png"
  },

  {
    id: 3,
    fleetId: "HORUS-03",
    name: "SENTINEL",
    manufacturer: "Skydio",
    model: "X10",
    country: "USA",
    category: "Autonomous Inspection",
    battery: 72,
    status: "Available",
    image: "/drones/sentinel.png"
  },

  {
    id: 4,
    fleetId: "HORUS-04",
    name: "RAVEN",
    manufacturer: "Autel Robotics",
    model: "EVO Max 4T",
    country: "China",
    category: "Surveillance",
    battery: 40,
    status: "Maintenance",
    image: "/drones/raven.png"
  },

  {
    id: 5,
    fleetId: "HORUS-05",
    name: "ATLAS",
    manufacturer: "DJI",
    model: "Flycart 30",
    country: "China",
    category: "Cargo",
    battery: 88,
    status: "Available",
    image: "/drones/atlas.png"
  },

  {
    id: 6,
    fleetId: "HORUS-06",
    name: "SPECTRE",
    manufacturer: "Ukrspecsystems",
    model: "Shark",
    country: "Ukraine",
    category: "Reconnaissance",
    battery: 76,
    status: "Available",
    image: "/drones/spectre.png"
  },

  {
    id: 7,
    fleetId: "HORUS-07",
    name: "ZIP",
    manufacturer: "Zipline",
    model: "Platform 2",
    country: "USA",
    category: "Delivery",
    battery: 90,
    status: "Inactive",
    image: "/drones/zip.png"
  },

  {
    id: 8,
    fleetId: "HORUS-08",
    name: "PHANTOM",
    manufacturer: "Baykar",
    model: "Bayraktar TB2",
    country: "Turkey",
    category: "Military UAV",
    battery: null,
    status: "Inactive",
    image: "/drones/phantom.png"
  },

  {
    id: 9,
    fleetId: "HORUS-09",
    name: "GUARDIAN",
    manufacturer: "BRINC",
    model: "Responder",
    country: "USA",
    category: "Public Safety",
    battery: 91,
    status: "Available",
    image: "/drones/guardian.png"
  },

  {
    id: 10,
    fleetId: "HORUS-10",
    name: "HAWKEYE",
    manufacturer: "JOUAV",
    model: "CW-15",
    country: "China",
    category: "VTOL Surveillance",
    battery: 83,
    status: "Available",
    image: "/drones/hawkeye.png"
  },
  
  ]

  const [selectedDrone, setSelectedDrone] = useState(drones[0])
  

  return (
    <>
      <header>
        <h1>Horus Drone Garage</h1>
        <p>Drone Fleet Management System</p>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#fleet">My Fleet</a>
            </li>
            <li>
              <a href="#maintenance">Maintenance</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>My Drone Fleet</h2>
        <p>Welcome to your drone garage.</p>

        <FleetOverview drones={drones}></FleetOverview>
          
        <section id="fleet" className="drone-garage">
          <h2>Aircraft Garage</h2>

          <div className="featured-drone">
            <h3>{selectedDrone.name}</h3>

            <img
              src={selectedDrone.image}
              alt={selectedDrone.name}
              className="featured-drone-image"
            />

            <p>Model: {selectedDrone.model}</p>
            <p>Battery Percentage: {selectedDrone.battery}%</p>
            <p>Status: {selectedDrone.status}</p>
          </div>

          <div className="drone-inventory">
            {drones.map((aircraft) => (
              <DroneCard
                key={aircraft.id}
                aircraft={aircraft}
                selectedDrone={selectedDrone}
                onSelect={()=> setSelectedDrone(aircraft)}

              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App
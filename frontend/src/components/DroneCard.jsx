function DroneCard({ aircraft, selectedDrone, onSelect }) {
    return (
        <div className={`inventory-card ${selectedDrone.id === aircraft.id ? "selected" : ""}`}
        onClick={onSelect}
        >
            <h3>{aircraft.name}</h3>

            <img
                src={aircraft.image} 
                alt={aircraft.name}
                className="inventory-drone-image" 
            />

            <p>{aircraft.model}</p>
            <p>Manufacturer: {aircraft.manufacturer}</p>
        </div>
    )
}

export default DroneCard
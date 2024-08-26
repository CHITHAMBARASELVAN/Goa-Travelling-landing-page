import React from 'react';

const places = [
    { id: 1, name: 'Baga Beach', img: '/images/place1.jpg' },
    { id: 2, name: 'Dudhsagar Waterfalls', img: '/images/place2.jpg' },
    { id: 3, name: 'Fort Aguada', img: '/images/place3.jpg' },
    { id: 4, name: 'Palolem Beach', img: '/images/place4.jpg' },
    { id: 5, name: 'Basilica of Bom Jesus', img: '/images/place5.jpg' },
    { id: 6, name: 'Anjuna Beach', img: '/images/place6.jpg' },
];

const Places = () => {
    return (
        <div className="places">
            <h2>Must Visit Places in Goa</h2>
            <div className="places-grid">
                {places.map(place => (
                    <div key={place.id} className="place-card">
                        <img src={place.img} alt={place.name} />
                        <h3>{place.name}</h3>
                        <button>Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Places;

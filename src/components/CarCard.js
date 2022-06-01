import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CarCard = (props) => {
    const  car  = props.car;

    return(
        <div className="card-container">
            <img src="https://d39a3h63xew422.cloudfront.net/wp-content/uploads/2017/08/15150625/17_carbone_poster_100x70_porsche_935_2b_vertical_1-1000x1386.jpg" alt="Porsche 935" />
            <div className="desc">
                <h2>
                    <Link to={`/show-car/${car._id}`}>
                        { car.make }
                    </Link>
                </h2>
                <h3>{car.model}</h3>
                <p>{car.type}</p>
            </div>
        </div>
    )
};

export default CarCard;
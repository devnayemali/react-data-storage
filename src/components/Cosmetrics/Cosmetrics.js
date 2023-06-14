import React, { useEffect, useState } from 'react';
import './Cosmetrics.css'
import Cosmetric from './Cosmetric';

const Cosmetrics = () => {

    const [cosmetrics, setCosmetrics] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetrics(data))
    } , []);
    

    return (
        <div>
            <h2>Welcome to Cosmetrics Store..</h2>
            {
                cosmetrics.map(cosmetric => <Cosmetric key={cosmetric.id} cosmetric={cosmetric} />)
            }
        </div>
    );
};

export default Cosmetrics;
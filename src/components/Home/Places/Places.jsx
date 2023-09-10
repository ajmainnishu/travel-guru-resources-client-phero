import { useEffect, useState } from "react";
import Place from "../Place/Place";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [placeName, setPlaceName] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    const handleClickId = (id) => {
        const singlePlace = places.find(p => p.id == id);
        setPlaceName(singlePlace)
    }
    return (
        <div className="w-5/6 mx-auto py-40">
            <div className="grid grid-cols-12">
                <div className="col-span-4 pr-11">
                    {
                        placeName &&
                        <div>
                            <h2 className="text-white uppercase font-normal text-5xl">{placeName.place_name}</h2>
                            <p className="text-white pt-5 font-normal pb-7">{placeName.place_details ? placeName.place_details.slice(0, 180) : ''}...</p>
                            <Link style={{backgroundColor: '#F9A51A'}} className='btn text-base px-7 py-3 border-0 rounded-md font-medium'>Booking <FaArrowRight /></Link>
                        </div>
                    }
                </div>
                <div className="col-span-8">
                    <div className="flex flex-row justify-between">
                        {
                            places.map(place => <Place key={place.id} handleClick={handleClickId} place={place}></Place>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Places;
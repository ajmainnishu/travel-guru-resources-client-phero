import { useLoaderData } from "react-router-dom";
import Hotel from "../Hotel/Hotel";
import moment from 'moment';
import Maps from "../Maps/Maps";

const Hotels = () => {
    const hotelsRoom = useLoaderData();
    const { place_name } = hotelsRoom;
    return (
        <div className="w-5/6 mx-auto mb-10">
            <hr />
            <p className="text-gray-500 font-normal mt-5 mb-2">Date: {moment().format("MMM-D-YYYY")}</p>
            <h2 className="mb-7 text-2xl font-bold">Stay in {place_name}</h2>
            <div className="grid grid-cols-12">
                <div className="col-span-7">
                    {
                        hotelsRoom.hotels.map(hotel => <Hotel key={hotel.category} hotel={hotel}></Hotel>)
                    }
                </div>
                <div className="col-span-5">
                    <Maps></Maps>
                </div>
            </div>
        </div>
    );
};

export default Hotels;
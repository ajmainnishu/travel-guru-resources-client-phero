import { createBrowserRouter } from "react-router-dom"
import Home from "../layout/Home";
import Places from "../components/Home/Places/Places";
import Destination from "../components/Destination/Destination";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import PlaceBooking from "../components/PlaceBooking/PlaceBooking";
import Booking from "../layout/Booking";
import Login from "../components/Booking/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Places />
            },
            {
                path: 'places/:id',
                element: <PlaceBooking />,
                loader: ({params}) => fetch(`http://localhost:5000/places/${params.id}`)
            },
            {
                path: 'destination',
                element: <Destination />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    },
    {
        path: 'booking',
        element: <Booking />,
        children: [
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
])

export default router;
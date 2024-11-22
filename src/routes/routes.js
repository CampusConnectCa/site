import {useRoutes} from "react-router-dom";

import LandingPage from '../pages/landingpage'
import Landlord from "../pages/landlord";
import Student from "../pages/student";

export default function Router (){
    return useRoutes([
        {
            path: '/',
            children: [
                {path: '/', element: <LandingPage />},
                {path: '/landlord', element: <Landlord />},
                {path: '/student', element: <Student />},
            ]
        },
    ]);
}

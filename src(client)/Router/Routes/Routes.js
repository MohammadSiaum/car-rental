
import Login from "../../Login/Login";
import AboutUs from "../../Pages/About/AboutUs";
import CustDash from "../../Pages/Dashboard/CustDash";
import ProviderMain from "../../Pages/Dashboard/Providers/ProviderMain/ProviderMain";
import AddCars from "../../Pages/Dashboard/Providers/Providers/RightDashP/AddCars/AddCars";
import DriverProfile from "../../Pages/Dashboard/Providers/Providers/RightDashP/JoinDriver/DriverProfile";
import JoinDriver from "../../Pages/Dashboard/Providers/Providers/RightDashP/JoinDriver/JoinDriver";
import ListCars from "../../Pages/Dashboard/Providers/Providers/RightDashP/ListCars/ListCars";
import ListDrivers from "../../Pages/Dashboard/Providers/Providers/RightDashP/ListDrivers/ListDrivers";
import AvailableCarSeekers from "../../Pages/Dashboard/Seekers/RightDashS/AvailableCarSeekers";
import AvailableDriverSeekers from "../../Pages/Dashboard/Seekers/RightDashS/AvailableDriverSeekers";
import CarBookTable from "../../Pages/Dashboard/Seekers/RightDashS/CarBook/CarBookTable";
import CarBooked from "../../Pages/Dashboard/Seekers/RightDashS/CarBooked";
import HiredDriver from "../../Pages/Dashboard/Seekers/RightDashS/HiredDrivier/HiredDriver";
import HiredDriverTable from "../../Pages/Dashboard/Seekers/RightDashS/HiredDrivier/HiredDriverTable";
import SeekersMain from "../../Pages/Dashboard/Seekers/SeekersMain/SeekersMain";
import DriverHired from "../../Pages/HireDriver/DriverHired/DriverHired";
import HireDriver from "../../Pages/HireDriver/HireDriver";
import Home from "../../Pages/Home/Home/Home";
import BookCar from "../../Pages/ViewCar/BookedCar/BookCar";
import ViewCar from "../../Pages/ViewCar/ViewCar";
import Register from "../../Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about_us',
                element: <AboutUs></AboutUs>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/available-car',
                element: <ViewCar></ViewCar>
            },
            {
                path: '/hire-driver',
                element: <HireDriver></HireDriver>
            },
            {
                path: '/customer-dashboard',
                element: <CustDash></CustDash>
            },
            

        ]
    },
    {
        path: '/seekers-dashboard',
        element: <SeekersMain></SeekersMain>,
        children: [
            {
                path: '/seekers-dashboard',
                element: <AvailableCarSeekers></AvailableCarSeekers>
            },
            {
                path: 'available-car',
                element: <AvailableCarSeekers></AvailableCarSeekers>,
                
            },
            {
                path: 'available-driver',
                element: <AvailableDriverSeekers></AvailableDriverSeekers>
            },
            {
                path: 'car-booked',
                element: <CarBookTable></CarBookTable>
            },
            {
                path: 'hired-driver',
                element: <HiredDriverTable></HiredDriverTable>
                
            },
            {
                path: 'driver-hire',
                element: <DriverHired></DriverHired>
            },
            {
                path: 'book-car',
                element: <BookCar></BookCar>
            }
            



        ]
    },
    {
        path: '/provider-dashboard',
        element: <ProviderMain></ProviderMain>,
        children: [
            {
                path: '/provider-dashboard',
                element: <ListCars></ListCars>
            },
            {
                path: 'add-car',
                element: <AddCars></AddCars>
            },
            {
                path: 'join-driver',
                element: <JoinDriver></JoinDriver>
            },
            {
                path: 'add-driver',
                element: <ListDrivers></ListDrivers>
            },
            {
                path: 'cars-list',
                element: <ListCars></ListCars>
            },
        ]
    }
]);

export default router;
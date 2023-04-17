import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import Navigation from './components/Navigation/Navigation'
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Main from './pages/Main/Main';
import { useSelector } from 'react-redux';
import AvailableRides from './pages/AvailableRides/AvailableRides';
import StartNow from './pages/StartNow/StartNow';
import RideRoute from './pages/RideRoute/RideRoute';
import Mapss from './pages/Mapss/Mapss';
// const isAuth = true;
// const user ={
//   activated:false
// }
function App() {
  const {user,isAuth} = useSelector(state=>state.auth);
  const {userRideId,rideStarted,startingPointCoordinates,destinationPointCoordinates} = useSelector(state=>state.ride);
  const {rides} = useSelector(state=>state.availableRide)
  const {partner} =useSelector(state=>state.partner)
  const guestRoute=(element)=>{
    return isAuth?<Navigate to='/activate'/>:element;
  }
  const semiProtectedRoute = (element) =>{
    return !isAuth?<Navigate to="/"/>:!user.activated?element:<Navigate to="/main"/>
  }
  const protectedRoute = (element)=>{
    return !isAuth?<Navigate to="/"/>:!user.activated?<Navigate to="/activate"/>:element
  }
  const rideSemiProtectedRoute = (element)=>{
    return rides!==''?element:<Navigate to="/main"/>
  }
  const rideProtectedRoute = (element)=>{
    return partner!==''?element:<Navigate to="/availableRides"/>
  }
  const rideRouteProtectedRoute = (element)=>{
    return rideStarted==='true'?element:<Navigate to="/startNow" />
  }
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={guestRoute(<Home />)}/>
        <Route path='/authenticate' element={guestRoute(<Authenticate />)}/>
        <Route path='/activate' element={semiProtectedRoute(<Activate />)}/>
        <Route path='/main' element={protectedRoute(<Main />)}/>
        <Route path='/availableRides' element={rideSemiProtectedRoute(<AvailableRides/>)}/>
        <Route path='/startNow' element={rideProtectedRoute(<StartNow />)}/>
        <Route path='/rideRoute' element={rideRouteProtectedRoute(<RideRoute start={startingPointCoordinates} end={destinationPointCoordinates}/>)} />
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    // <>
    // {/* <RideRoute/> */}
    // {/* <Mapss/> */}
    // {/* <Mapt/> */}
    //  </>
  );
}

export default App;

import React,{useEffect, useState} from 'react'
import ReactMapboxGl, { Layer, Source, Feature } from 'react-mapbox-gl';
import style from './RideRoute.module.css'
import Loading from '../Loading/Loading';
const RideRoute = ({start,end}) => {
    const Map = ReactMapboxGl({
        accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
    });
    const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
    const apiKey = process.env.REACT_APP_OPENROUTE_SERVICE_KEY
    const [startC, setStartC] = useState([76.2222, 21.3102]); //burhanpur
    const [endC, setEndC] = useState([76.5684, 20.7096]);
    const [route, setRoute] = useState(null);
    const [details,setDetails] = useState()



    const getRoute = async () => {
        const response = await fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${start===undefined?startC[0]:start[0]},${start===undefined?startC[1]:start[1]};${end===undefined?endC[0]:end[0]},${end===undefined?endC[1]:end[1]}?access_token=${accessToken}`);
        const data = await response.json();
        console.log("data")
        console.log(data)
        setRoute(data.routes[0].geometry);
        setDetails(data)
    };
    // getRoute()
    useEffect(()=>{
        getRoute()
    },[])
    const distance = details?details.routes[0].distance/1000:''
    const duration = details?details.routes[0].duration/(60*60):''
  return (
    <>
    {
      details?<div className={style.wrapper}>
      <div className={style.textWrapper}>
      <div className={style.text}>{details?`Distance: ${distance.toFixed(2)} km`:''}</div>
      <div className={style.text}>{details?`Duration: ${duration.toFixed(2)} hrs`:''}</div>
      </div>
      
      <Map
    style="mapbox://styles/mapbox/streets-v11"
    containerStyle={{
      height: '70%',
      width: '70%'
    }}
    center={start}
    // onStyleLoad={getRoute}
  >
    {route && (
      <Layer type="line" paint={{ 'line-color': '#888', 'line-width': 8 }}>
        <Feature coordinates={route.coordinates} />
      </Layer>
    )}
    <Source id="path" type="geojson" data={{ type: 'Feature', route }} />
      <Layer
        id="path-layer"
        type="line"
        source="path"
        paint={{
          'line-color': '#888',
          'line-width': 5
        }}
      />
  </Map>

    </div>:
    <Loading/>
      
    }
    </>
    
  )
}

export default RideRoute

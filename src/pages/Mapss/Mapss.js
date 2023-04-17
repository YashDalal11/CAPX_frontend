import React,{useEffect, useState} from 'react'
import ReactMapboxGl, { Layer, Source, Feature } from 'react-mapbox-gl';

const Mapss = () => {
    const Map = ReactMapboxGl({
        accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
    });
    const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
    const [start, setStart] = useState([76.678265400,  20.780625200]);
    const [end, setEnd] = useState([76.694328, 20.792713]);
    const [route, setRoute] = useState(null);

    const getRoute = async () => {
        const response = await fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?access_token=${accessToken}`);
        
        const data = await response.json();
        console.log("data")
        console.log(data)
        setRoute(data.routes[0].geometry);
    };
    useEffect(()=>{
        getRoute()
    },[])
  return (
    <Map
    style="mapbox://styles/mapbox/streets-v11"
    containerStyle={{
      height: '100vh',
      width: '100vw'
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
  )
}

export default Mapss

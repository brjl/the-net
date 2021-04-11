import useAxios from "axios-hooks";
import { Marker, Popup } from "react-leaflet";
import PopupDisplay from "./PopupDisplay";


//Recieves Marker data from database
export default function Markers() {
  
  const [{ data, loading, error }] = useAxios(
    "https://angler-reg-api.herokuapp.com/pins"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  const returnData = data.pins;

  return (
    <>
      {returnData.map((marker) => (
        <Marker key={marker.id}position={[marker.location.x, marker.location.y]}>
          <Popup>
            <PopupDisplay 
              date={marker.date}
              user_id={marker.user_id}
              title={marker.title}
              species_id={marker.species_id}
              image={marker.image}
              rating={marker.rating}
            />
          </Popup>
        </Marker>
      ))}
    </>
  );
}

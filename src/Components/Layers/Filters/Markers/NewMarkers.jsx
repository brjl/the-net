import { Marker as LeafletMarker, Popup } from "react-leaflet";
import { useRef } from "react";
import PopupDisplay from "./PopupDisplay";
import L from "leaflet";
import axios from "axios";

//Places new markers on the map after a user submits the Marker Form

//Marker function is called in NewMarkers component at bottom of file
function Marker(props) {
  const markerRef = useRef();
  //Delete a pin
  const handleDelete = function () {
    const id = props.uuid;
    axios
      .delete("/pins", { data: { pinId: id } })
      .then((res) => {
    
      })
      .catch((err) => {
      
      });

    markerRef.current.remove();
  };
  //HANDLE EDIT FUNCTION
  // triggers when you click edit, popupData is the currently stored data in that popup
  // we want this information to populate the edit marker form
  const handleEdit = () => {
    const popupData = {
      pin_id: props.id,
      date: props.date,
      title: props.title,
      description: props.description,
      species_name: props.species_name,
      image: props.image,
      rating: props.rating,
      leafletLocation: props.leafletLocation,
      uuid: props.uuid
    }
    props.setModal(true);
    props.setEdit(true);
    props.setEditPopup(popupData)
  };
  return (

    <LeafletMarker
      key={props.leafletLocation}
      position={props.leafletLocation}
      ref={markerRef}
      icon={props.icon || new L.Icon.Default()}
    >
      <Popup>
        <PopupDisplay
          user_id={props.user_id}
          favourite={props.favourite}
          pin_id={props.id}
          date={props.date}
          title={props.title}
          description={props.description}
          species_name={props.species_name}
          image={props.image}
          rating={props.rating}
          uuid={props.uuid}
          onDelete={handleDelete}
          onEdit={handleEdit}
          leafletLocation={props.leafletLocation}
          editPopup={props.editPopup}
          setEditPopup={props.setEditPopup}
          setMarkers={props.setMarkers}
          markers={props.markers}
        />
      </Popup>
    </LeafletMarker>

  );
}

//This component maps through the array of markers and executes the above function on each marker
export default function NewMarkers(props) {
  
  const pins = Object.values(props.markers);
  return (
    <>
      {pins.map((popup) => (
        <Marker
          key={popup.uuid}
          {...popup}
          icon={props.icon}
          setModal={props.setModal}
          setEdit={props.setEdit}
          editPopup={props.editPopup}
          setEditPopup={props.setEditPopup}
          setMarkers={props.setMarkers}
          markers={props.markers}
        />
      ))}
    </>
  );
}

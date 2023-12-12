import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h2>Map</h2>
      <h3>
        Position: {lat}, {lng}
      </h3>
      <button onClick={() => setSearchParams({ lat: 12, lng: 19 })}>
        Set Postion
      </button>
    </div>
  );
};

export default Map;

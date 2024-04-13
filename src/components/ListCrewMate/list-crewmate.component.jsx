import { useEffect, useState } from "react";
import { Spinner, Button } from "@radix-ui/themes";
import "./list-crewmate.styles.scss";
import { deleteMate, getAllMate } from "../../db/api";
import { useToast } from "../../context/toaster.context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ListCrewMate() {
  const [crewMates, setCrewMates] = useState([]);
  const [loading, setLoading] = useState(false);
  const { successToast, errorToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMates() {
      try {
        setLoading(true);
        const mates = await getAllMate();
        setCrewMates(mates);
        setLoading(false);
      } catch (err) {
        errorToast(err.message);
        setLoading(false);
      }
    }
    fetchMates();
  }, []);

  const deleteMateHelper = async (id) => {
    try {
      setLoading(true);
      await deleteMate(id);
      setCrewMates(crewMates.filter((mate) => mate.id !== id));
      setLoading(false);
      successToast("Mate deleted successfully");
    } catch (err) {
      errorToast(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-wrapper">
        <Spinner size="3" />
      </div>
    );
  }
  return (
    <div className="list-crewmate-container">
      {crewMates.length > 0 ? (
        crewMates.map((mate) => (
          <div key={mate.id} className="crewmate-card">
            <Link to={`${mate.id}`}>
              <h3>{mate.name}</h3>
              <p>Speed: {mate.speed} mph</p>
              <p>Color: {mate.color}</p>
            </Link>

            <div className="crewmate-card-actions">
              <Button onClick={() => navigate(`/crew-mate/${mate.id}/edit`)}>
                Edit
              </Button>

              <Button variant="soft" onClick={() => deleteMateHelper(mate.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))
      ) : (
        <h3>No crewmates found</h3>
      )}
    </div>
  );
}

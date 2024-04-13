import { useEffect, useState } from "react";
import { Spinner, Button } from "@radix-ui/themes";
import "./crewmate.styles.scss";
import { getMate } from "../../db/api";
import { useParams } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";

export default function CrewMate() {
  const [mate, setMate] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getMateHelper() {
      setLoading(true);
      const [_mate] = await getMate(id);
      setMate(_mate);
      setLoading(false);
    }
    getMateHelper();
  }, []);

  if (loading) {
    return (
      <div className="loading-wrapper">
        <Spinner size="3" />
      </div>
    );
  }
  return (
    <div className="crewmate-container">
      <div className="crewmate">
        <h1>{mate.name}</h1>
        <p>{mate.speed}</p>
        <p>{mate.color}</p>
        <Button my="4" onClick={() => navigate("edit")}>
          Update CrewMate
        </Button>
        <Outlet />
      </div>
    </div>
  );
}

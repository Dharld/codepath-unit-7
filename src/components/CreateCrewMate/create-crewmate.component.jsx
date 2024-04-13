import { Select, TextField, Flex, Text, Button } from "@radix-ui/themes";
import { createMate, updateMate } from "../../db/api";
import "./create-crewmate.styles.scss";
import { useEffect, useState } from "react";
import { useToast } from "../../context/toaster.context";
import { useParams, useNavigate } from "react-router-dom";

export default function CreateCrewMate() {
  const [creds, setCreds] = useState({});
  const { successToast, errorToast } = useToast();
  const [mode, setMode] = useState("create");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setMode("edit");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    try {
      if (mode === "create") {
        if (creds.name && creds.speed && creds.color) {
          await createMate({
            name: creds.name,
            speed: creds.speed,
            color: creds.color,
          });
          successToast("Crewmate created!");
        } else {
          errorToast("Please fill out all the fields");
        }
      } else {
        const mate = {};
        if (creds.name) {
          mate.name = creds.name;
        }
        if (creds.speed) {
          mate.speed = creds.speed;
        }
        if (creds.color) {
          mate.color = creds.color;
        }
        await updateMate(id, mate);
        successToast("Crewmate updated!");
        navigate("/crew-mate");
      }
      setLoading(false);
      setCreds({ name: "", speed: "", color: "" });
    } catch (err) {
      setLoading(false);
      errorToast(err.message);
    }
  };
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  return (
    <div className="create-crewmate-container">
      <form onSubmit={handleSubmit}>
        <h3> {mode === "create" ? "Create CrewMate" : "Update CrewMate"}</h3>
        <Flex gap="2" my="2" direction="column">
          <Text>Name:</Text>
          <TextField.Root
            size="2"
            placeholder="Enter your name"
            name="name"
            onChange={handleChange}
            value={creds.name}
          />
        </Flex>
        <Flex gap="2" my="2" direction="column">
          <Text>Speed:</Text>
          <TextField.Root
            size="2"
            placeholder="Enter your speed in mph"
            name="speed"
            onChange={handleChange}
            value={creds.speed}
          />
        </Flex>
        <Flex gap="2" my="2" direction="column">
          <Text>Color:</Text>
          <Select.Root
            value={creds.color}
            name="color"
            onValueChange={(value) => setCreds({ ...creds, color: value })}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Group>
                <Select.Label>Choose a color</Select.Label>
                <Select.Item value="orange">Red</Select.Item>
                <Select.Item value="green">Green</Select.Item>
                <Select.Item value="blue">Blue</Select.Item>
                <Select.Item value="purple">Purple</Select.Item>
                <Select.Item value="yellow">Yellow</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Flex>

        <Button size="2" my="6" style={{ width: "100%" }} loading={loading}>
          {mode === "create" ? "Create CrewMate" : "Update CrewMate"}
        </Button>
      </form>
    </div>
  );
}

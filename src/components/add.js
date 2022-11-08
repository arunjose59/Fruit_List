import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function Add(props) {
  const [value, setValue] = useState("");

  function submit() {
    props.setFruitList([...props.fruitList, value]);
  }
  return (
    <div>
      <TextField
        onChange={(e) => setValue(e.target.value)}
        id="outlined-basic"
        label="Item Name"
        variant="outlined"
      />

      <Button onClick={submit} variant="contained" style={{ margin: "10px" }}>
        Submit
      </Button>
    </div>
  );
}
export default Add;

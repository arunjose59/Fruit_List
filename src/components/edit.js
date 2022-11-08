import { Button, TextField } from "@mui/material";
import { useState } from "react";
function Edit({ fruitList, setFruitList, editValue, indexVal,setFlag }) {
  const [changeVal, setChangeVal] = useState("");
 // let { fruitList, setFruitList, editValue, indexVal,setFlag } = props;

  function editValFunc() {
    fruitList[indexVal] = changeVal;
    setFruitList([...fruitList]);
    setFlag(false)
    
  }

  return (
    <>
      <TextField
        placeholder={editValue}
        onChange={(e) => setChangeVal(e.target.value)}
      ></TextField>
      <Button onClick={editValFunc}>Edit</Button>
    </>
  );
}
export default Edit;

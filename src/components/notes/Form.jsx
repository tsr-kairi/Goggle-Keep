import { useState, useRef, useContext } from "react";
import { Box, TextField, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataContext } from "../../context/DataProvider";
import { v4 as uuid } from "uuid";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  width: 600px;
  border-radius: 8px;
  min-height: 30px;
  padding: 10px 15px;
`;

const note = {
  id: "",
  heading: "",
  text: "",
};

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });
  const { setNotes } = useContext(DataContext);

  const containerRef = useRef();

  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minheight = "70px";
  };
  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minheight = "30px";
    setAddNote({ ...note, id: uuid() });
    if (addNote.heading || addNote.text) {
      setNotes((prevArr) => [addNote, ...prevArr]);
    }
  };

  const onTextChange = (e) => {
    console.log(e.target.name, e.target.value);
    let changedNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changedNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            name="heading"
            onChange={(e) => onTextChange(e)}
            value={addNote.heading}
          />
        )}
        <TextField
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          name="text"
          onClick={onTextAreaClick}
          onChange={(e) => onTextChange(e)}
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;

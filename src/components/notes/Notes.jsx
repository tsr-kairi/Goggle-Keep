import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";

// components import
import Form from "./Form";
import Note from "./Note";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes } = useContext(DataContext);
  return (
    <Box six={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Form />
        {notes.map((note) => (
          <Note note={note} />
        ))}
      </Box>
    </Box>
  );
};

export default Notes;

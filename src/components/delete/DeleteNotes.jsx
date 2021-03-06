import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";

// components import
import DeleteNote from "./DeleteNote";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deletedNotes } = useContext(DataContext);
  // console.log(deletedNotes);

  return (
    <Box six={{ display: "flex", width: "100%" }}>
      <Box sx={{ p: 3, width: "100%" }}>
        <DrawerHeader />
        <Grid container style={{ marginTop: 16 }}>
          {deletedNotes.map((note) => (
            <Grid item>
              <DeleteNote note={note} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeleteNotes;

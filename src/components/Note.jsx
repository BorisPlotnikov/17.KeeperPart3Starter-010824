import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Note() {
  const [mouseOverNote, setMouseOverNote] = useState(false);
  const noteMouseOver = () => setMouseOverNote(true);
  const noteMouseOut = () => setMouseOverNote(false);

  return (
    <div onMouseOver={noteMouseOver} onMouseOut={noteMouseOut} className="note">
      <h1>Title</h1>
      <p>Body</p>
      <Zoom in={mouseOverNote}>
        <IconButton className="note-button" aria-label="delete">
          <DeleteOutlineIcon />
        </IconButton>
      </Zoom>
    </div>
  );
}

export default Note;

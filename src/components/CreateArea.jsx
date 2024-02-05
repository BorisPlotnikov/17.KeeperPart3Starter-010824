import React from "react";
import Zoom from "@mui/material/Zoom";
import IconButton from "@mui/material/IconButton";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";

function CreateArea() {
  return (
    <div>
      <form>
        <input name="title" placeholder="Take a note..." />
        <textarea name="body" placeholder="New content..." rows="3" />
        <Zoom in={true}>
          <IconButton
            className="form-button"
            size="large"
            type="submit"
            aria-label="Add"
          >
            <NoteAddOutlinedIcon />
          </IconButton>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

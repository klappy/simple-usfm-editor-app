import React, { useCallback } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ViewStream, Subject, Edit, Preview } from "@mui/icons-material";

export default function ToggleButtons({ state, actions: { setToggles } }) {
  let toggles = [];
  if (state.sectionable) toggles.push("sectionable");
  if (state.blockable) toggles.push("blockable");
  if (state.editable) toggles.push("editable");
  if (state.preview) toggles.push("preview");

  const handleToggles = useCallback(
    (event, newToggles) => {
      const sectionable = newToggles.includes("sectionable");
      const blockable = newToggles.includes("blockable");
      const editable = newToggles.includes("editable");
      const preview = newToggles.includes("preview");
      const _toggles = { sectionable, blockable, editable, preview };
      setToggles(_toggles);
    },
    [setToggles]
  );

  return (
    <ToggleButtonGroup
      value={toggles}
      onChange={handleToggles}
      aria-label="text formatting"
    >
      <ToggleButton value="sectionable" aria-label="sectionable">
        <ViewStream />
      </ToggleButton>
      <ToggleButton value="blockable" aria-label="blockable">
        <Subject />
      </ToggleButton>
      <ToggleButton value="editable" aria-label="editable">
        <Edit />
      </ToggleButton>
      <ToggleButton value="preview" aria-label="preview">
        <Preview />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

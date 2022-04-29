/* eslint-disable react/prop-types */
import React, { useCallback, useMemo } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import {
  ViewStream,
  Subject,
  Edit,
  Preview,
} from '@mui/icons-material';

export default function ToggleButtons({ state, actions: { setToggles } }) {
  const togglesAll = useMemo(() => ['sectionable', 'blockable', 'editable', 'preview'], []);
  const toggles = togglesAll.filter(toggle => state[toggle] );

  const handleToggles = useCallback((event, newToggles) => {
    const _toggles = {};

    togglesAll.forEach(toggle => {
      _toggles[toggle] = newToggles.includes(toggle);
    });

    setToggles(_toggles);
  }, [setToggles, togglesAll]);

  return (
    <ToggleButtonGroup
      data-test-id='ToggleButtonGroup'
      value={toggles}
      onChange={handleToggles}
      aria-label="text formatting"
    >
      <ToggleButton style={{ color: 'white' }} data-test-id='ToggleButtonSectionable' value="sectionable" aria-label="sectionable">
        <ViewStream />
      </ToggleButton>
      <ToggleButton style={{ color: 'white' }} data-test-id='ToggleButtonBlockable' value="blockable" aria-label="blockable">
        <Subject />
      </ToggleButton>
      <ToggleButton style={{ color: 'white' }} data-test-id='ToggleButtonEditable' value="editable" aria-label="editable">
        <Edit />
      </ToggleButton>
      <ToggleButton style={{ color: 'white' }} data-test-id='ToggleButtonPreview' value="preview" aria-label="preview">
        <Preview />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

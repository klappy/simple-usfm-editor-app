import React from 'react';
import { PropTypes } from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {
  useDetectFonts,
  useAssumeGraphite,
  fontList as regularFonts,
  graphiteEnabledFontList as graphiteFonts,
} from 'font-detect-rhl';

export default function FontSelect({
  font='Arial',
  testString='asdf',
  onFont,
}) {
  // Detecting Graphite-enabled fonts
  const isGraphiteAssumed = useAssumeGraphite({ testClient: 'firefox', alwaysUse: false });
  const detectedGraphiteFonts = useDetectFonts({ fonts: (isGraphiteAssumed ? graphiteFonts : []), testString });
  const graphiteFontMenuItems = detectedGraphiteFonts.map((font, index) => (
    <MenuItem key={index} value={font.name}>
      {font.name}
    </MenuItem>
  ));
  //Detecting fonts:
  const detectedFonts = useDetectFonts({ fonts: regularFonts, testString });
  const detectedFontsComponents = detectedFonts.map((font, index) => (
    <MenuItem key={index} value={font.name}>
      {font.name}
    </MenuItem>
  ));

  const handleChange = (event) => {
    onFont(event.target.value);
  };

  const noneDetectedMsg = 'none detected';

  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="font-select-label">Font</InputLabel>
      <Select
        labelId="font-select-label"
        id="font-select"
        data-test-id="font-select"
        value={font}
        label="Font"
        onChange={handleChange}
      >
        <MenuItem key={1} value="Arial">
          default
        </MenuItem>
        {isGraphiteAssumed && <hr />}
        <b>
          {isGraphiteAssumed && 'Graphite-Enabled Fonts:'}
          {graphiteFontMenuItems.length === 0 &&
            isGraphiteAssumed &&
            noneDetectedMsg}
        </b>
        {graphiteFontMenuItems}
        <hr />
        <b>
          Detected Fonts:{' '}
          {detectedFontsComponents.length === 0 && noneDetectedMsg}
        </b>
        {detectedFontsComponents}
      </Select>
    </FormControl>
  );
};

FontSelect.propTypes = {
  testString: PropTypes.string,
  font: PropTypes.string,
  onFont: PropTypes.func,
};

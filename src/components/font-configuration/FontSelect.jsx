import React from 'react';
import { PropTypes } from 'prop-types';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from '@mui/material';

import {
  useDetectFonts,
  useAssumeGraphite,
  fontList as regularFonts,
  graphiteEnabledFontList as graphiteFonts,
} from 'font-detect-rhl';
import FontMenuItem from './FontMenuItem';

export default function FontSelect({
  font='Arial',
  testString='asdf',
  onFont,
}) {
  // Detecting Graphite-enabled fonts
  const isGraphiteAssumed = useAssumeGraphite({ testClient: 'firefox', alwaysUse: false });
  const detectedGraphiteFonts = useDetectFonts({ fonts: (isGraphiteAssumed ? graphiteFonts : []), testString });

  const noneDetectedMsg = 'none detected';

  const graphiteFontMenuItems = detectedGraphiteFonts.map((font, index) => (
    <MenuItem key={index} value={font.name} dense>
      <FontMenuItem font={font} />
    </MenuItem>
  ));

  const graphiteFontMenuSection = [
    <MenuItem key='graphiteFonts' divider disabled>Graphite-Enabled Fonts: {!graphiteFontMenuItems.length && noneDetectedMsg}</MenuItem>,
    ...graphiteFontMenuItems,
  ];

  //Detecting fonts:
  const detectedFonts = useDetectFonts({ fonts: regularFonts, testString });
  const detectedFontMenuItems = detectedFonts.map((font, index) => (
    <MenuItem key={index} value={font.name} dense>
      <FontMenuItem font={font} />
    </MenuItem>
  ));

  const detectedFontMenuSection = [
    <MenuItem key='detectedFonts' divider disabled>Detected Fonts: {!detectedFontMenuItems && noneDetectedMsg}</MenuItem>,
    ...detectedFontMenuItems,
  ];

  const handleChange = (event) => {
    onFont(event.target.value);
  };

  const labelStyle = {
    background: 'white',
    borderRadius: '0.25em',
    padding: '0px 0.5em 0px 0.5em',
    marginLeft: '-0.25em',
  };

  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="font-select-label" style={labelStyle}>Font</InputLabel>
      <Select
        labelId="font-select-label"
        id="font-select"
        data-test-id="font-select"
        value={font}
        label="Font"
        style={{ background: 'white' }}
        onChange={handleChange}
      >
        <MenuItem key={1} value="inherit" divider>
          <Typography variant="body2" component="span">default</Typography>
        </MenuItem>
        {isGraphiteAssumed && graphiteFontMenuSection}
        {detectedFontMenuSection}
      </Select>
    </FormControl>
  );
};

FontSelect.propTypes = {
  testString: PropTypes.string,
  font: PropTypes.string,
  onFont: PropTypes.func,
};

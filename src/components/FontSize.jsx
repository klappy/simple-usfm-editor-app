import React from 'react';
import { PropTypes } from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FontSize({
  fontSize='1em',
  onFontSize,
}) {
  const handleChangeSize = (event) => {
    onFontSize(event.target.value);
  };

  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="demo-simple-select-label">FontSize</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        data-test-id="font-size-select"
        value={fontSize}
        label="FontSize"
        onChange={handleChangeSize}
      >
        <MenuItem key={1} value={'0.50em'}>
          50%
        </MenuItem>
        <MenuItem key={2} value={'0.75em'}>
          75%
        </MenuItem>
        <MenuItem key={3} value={'1em'}>
          100% (default)
        </MenuItem>
        <MenuItem key={4} value={'1.25em'}>
          125%
        </MenuItem>
        <MenuItem key={5} value={'1.5em'}>
          150%
        </MenuItem>
        <MenuItem key={6} value={'2em'}>
          200%
        </MenuItem>
      </Select>
    </FormControl>
  );
};

FontSize.propTypes = {
  fontSize: PropTypes.string,
  onFontSize: PropTypes.func,
};

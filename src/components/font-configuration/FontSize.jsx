import React from 'react';
import { PropTypes } from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function FontSize({
  fontSize='1em',
  onFontSize,
}) {
  const handleChangeSize = (event) => {
    onFontSize(event.target.value);
  };

  const labelStyle = {
    background: 'white',
    borderRadius: '0.25em',
    padding: '0 0.25em 0 0.2em',
  };

  return (
    <FormControl size="small" fullWidth>
      <InputLabel id="demo-simple-select-label" style={labelStyle} >FontSize</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        data-test-id="font-size-select"
        value={fontSize}
        label="FontSize"
        style={{ background: 'white' }}
        onChange={handleChangeSize}
      >
        <MenuItem key={1} value={'0.50em'}>
          <Typography variant="body2" component="span">50%</Typography>
        </MenuItem>
        <MenuItem key={2} value={'0.75em'}>
          <Typography variant="body2" component="span">75%</Typography>
        </MenuItem>
        <MenuItem key={3} value={'1em'}>
          <Typography variant="body2" component="span">100% (default)</Typography>
        </MenuItem>
        <MenuItem key={4} value={'1.25em'}>
          <Typography variant="body2" component="span">125%</Typography>
        </MenuItem>
        <MenuItem key={5} value={'1.5em'}>
          <Typography variant="body2" component="span">150%</Typography>
        </MenuItem>
        <MenuItem key={6} value={'2em'}>
          <Typography variant="body2" component="span">200%</Typography>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

FontSize.propTypes = {
  fontSize: PropTypes.string,
  onFontSize: PropTypes.func,
};

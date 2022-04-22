import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box } from '@mui/material';

import FontSelect from './FontSelect';
import FontSize from './FontSize';

export default function FontConfiguration({
  state: {
    font,
    testString,
    fontSize,
  },
  actions: {
    setFont,
    setFontSize,
  },
}) {
  return (
    <Grid container spacing={0} justifyContent="flex-end">
      <Grid item xs={4} style={{ padding: '0 0.5em' }}>
        <Box>
          <FontSelect font={font} onFont={setFont} testString={testString} />
        </Box>
      </Grid>
      <Grid item xs={2} style={{ padding: '0 0.5em' }}>
        <Box>
          <FontSize fontSize={fontSize} onFontSize={setFontSize} />
        </Box>
      </Grid>
    </Grid>
  );
};

FontConfiguration.propTypes = {
  state: PropTypes.shape({
    font: PropTypes.string,
    testString: PropTypes.string,
    fontSize: PropTypes.string,
  }),
  actions: PropTypes.shape({
    setFont: PropTypes.func.isRequired,
    setFontSize: PropTypes.func.isRequired,
  }),
};
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Popover, Typography } from '@mui/material';

export default function FontMenuItem({ font }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [previewFont, setPreviewFont] = useState({ name: 'Arial' });

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    hr: {
      width: '100%', border: 'none', height: '0px', borderTop: '1px dotted black',
    },
    menuItem: {
      width: '100%', display: 'flex', justifyContent: 'space-around',
    },
    preview: {
      fontFamily: previewFont.name,
      fontSize: '1em',
      maxWidth: '25vw',
    },
  };

  const open = Boolean(anchorEl);

  return (
    <div style={styles.menuItem}>
      <div
        style={styles.menuItem}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={(e) => {
          handlePopoverOpen(e);
          setPreviewFont(font);
        }}
        onMouseLeave={handlePopoverClose}
      >
        <Typography variant="body2" component="div">{font.name}&nbsp;</Typography>
        <hr style={styles.hr} />
        <Typography variant="body2" component="div" style={{ fontFamily: font.name }}>&nbsp;"{font.name}"</Typography>
      </div>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }} style={styles.preview}>
          Angel Adept Blind Bodice Clique Coast Dunce Docile Enact Eosin Furlong Focal Gnome Gondola Human Hoist Inlet Iodine Justin Jocose Knoll Koala Linden Loads Milliner Modal Number Nodule Onset Oddball Pneumo Poncho Quanta Qophs Rhone Roman Snout Sodium Tundra Tocsin Uncle Udder Vulcan Vocal Whale Woman Xmas Xenon Yunnan Young Zloty Zodiac.
        </Typography>
        <Typography sx={{ p: 1 }} style={styles.preview}>
          Angel angel adept for the nuance loads of the arena cocoa and quaalude. Blind blind bodice for the submit oboe of the club snob and abbot. Clique clique coast for the pouch loco of the franc assoc and accede. Dunce dunce docile for the loudness mastodon of the loud statehood and huddle. Enact enact eosin for the quench coed of the pique canoe and bleep.
        </Typography>
        <Typography sx={{ p: 1 }} style={styles.preview}>
          Furlong furlong focal for the genuflect profound of the motif aloof and offers. Gnome gnome gondola for the impugn logos of the unplug analog and smuggle. Human human hoist for the buddhist alcohol of the riyadh caliph and bathhouse. Inlet inlet iodine for the quince champion of the ennui scampi and shiite. Justin justin jocose for the djibouti sojourn of the oranj raj and hajjis.
        </Typography>
        <Typography sx={{ p: 1 }} style={styles.preview}>
          Knoll knoll koala for the banknote lookout of the dybbuk outlook and trekked. Linden linden loads for the ulna monolog of the consul menthol and shallot. Milliner milliner modal for the alumna solomon of the album custom and summon. Number number nodule for the unmade economic of the shotgun bison and tunnel. Onset onset oddball for the abandon podium of the antiquo tempo and moonlit.
        </Typography>
        <Typography sx={{ p: 1 }} style={styles.preview}>
          Pneumo pneumo poncho for the dauphin opossum of the holdup bishop and supplies. Quanta quanta qophs for the inquest sheqel of the cinq coq and suqqu. Rhone rhone roman for the burnt porous of the lemur clamor and carrot. Snout snout sodium for the ensnare bosom of the genus pathos and missing. Tundra tundra tocsin for the nutmeg isotope of the peasant ingot and ottoman.
        </Typography>
        <Typography sx={{ p: 1 }} style={styles.preview}>
          Uncle uncle udder for the dunes cloud of the hindu thou and continuum. Vulcan vulcan vocal for the alluvial ovoid of the yugoslav chekhov and revved. Whale whale woman for the meanwhile blowout of the forepaw meadow and glowworm. Xmas xmas xenon for the bauxite doxology of the tableaux equinox and exxon. Yunnan yunnan young for the dynamo coyote of the obloquy employ and sayyid.
        </Typography>
        <Typography sx={{ p: 1 }} style={styles.preview}>
          Zloty zloty zodiac for the gizmo ozone of the franz laissez and buzzing.
        </Typography>
      </Popover>
    </div>
  );
};

FontMenuItem.propTypes = {
  font: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { UsfmEditor } from 'simple-text-editor-rcl';

export default function Layout({ state, actions }) {
  // sectionComponent: ({children, dir, ...props}) => (<div class={ 'section ' + dir } dir={dir} {...props}>{children}</div>),
  const sectionComponent = ({
    children,
    index,
    dir,
    ...props
  }) => (
    <Accordion
      // TransitionProps={{ unmountOnExit: true }}
      expanded={index === state.sectionIndex}
      data-test-id='sectionComponent'
      onChange={() => actions.setSectionIndex(index)}
      className={'section ' + dir}
      dir={dir}
      {...props}
    >
      {children}
    </Accordion>
  );
  // headingComponent: (props) => (<h2 class='heading' {...props}>{props.text}</h2>),
  const headingComponent = ({
    text,
    index,
    ...props
  }) => (
    <AccordionSummary
      expandIcon={<ExpandMore />}
      aria-controls={`panel${index}a-content`}
      id={`panel${index}a-header`}
      className="heading"
    >
      <Typography {...props}>{text.split('\n')[0]}</Typography>
    </AccordionSummary>
  );
  // sectionBodyComponent: ({children, ...props}) => (<div class='body' {...props}>{children}</div>),
  const sectionBodyComponent = ({ children, ...props }) => (
    <AccordionDetails className="body" style={{ padding: '0' }} {...props}>
      {children}
    </AccordionDetails>
  );

  // eslint-disable-next-line no-unused-vars
  const blockComponent = ({ text, ..._props }) => (
    <div className="block" style={{ whiteSpace: 'pre-wrap' }} {..._props} />
  );

  const onSectionClick = () => {};

  const editorProps = {
    ...state,
    onText: actions.setText,
    sectionComponent,
    onSectionClick,
    headingComponent,
    sectionBodyComponent,
    blockComponent,
  };
  return <UsfmEditor {...editorProps} />;
};

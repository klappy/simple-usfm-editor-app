/* eslint-disable react/prop-types */
import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { UsfmEditor } from 'simple-text-editor-rcl';

export default function Layout({ state, actions }) {
  console.log(state.font);
  // sectionComponent: ({children, dir, ...props}) => (<div class={ 'section ' + dir } dir={dir} {...props}>{children}</div>),
  const sectionComponent = ({
    index,
    dir,
    ...props
  }) => (
    <Accordion
      TransitionProps={{ unmountOnExit: true }}
      expanded={index === state.sectionIndex}
      data-test-id='sectionComponent'
      onChange={() => actions.setSectionIndex(index)}
      className={'section ' + dir}
      dir={dir}
      key={index}
      {...props}
    >
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
      key={index}
    >
      {[<p key={index} {...props}>{text.split('\n')[0].replace(/\\\w+/, '')}</p>]}
    </AccordionSummary>
  );
  // sectionBodyComponent: ({children, ...props}) => (<div class='body' {...props}>{children}</div>),
  const sectionBodyComponent = ({
    children,
    index,
    ...props
  }) => (
    <AccordionDetails key={index} className="body" style={{ padding: '0' }} {...props}>
      {children}
    </AccordionDetails>
  );

  // eslint-disable-next-line no-unused-vars
  const blockComponent = ({
    // eslint-disable-next-line no-unused-vars
    text, index, ..._props
  }) => (
    <div key={index} className="block" style={{ whiteSpace: 'pre-wrap' }} {..._props} />
  );

  const onSectionClick = () => {};

  const onBlockClick = () => {};

  const editorProps = {
    ...state,
    onText: actions.setText,
    sectionComponent,
    headingComponent,
    sectionBodyComponent,
    onSectionClick,
    onBlockClick,
    blockComponent,
  };
  return <UsfmEditor {...editorProps} />;
};

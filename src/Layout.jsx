/* eslint-disable react/prop-types */
import React from 'react';

import AppBar from './components/AppBar';
import ToggleButtons from './components/ToggleButtons';
import Editor from './components/Editor';
import FontConfiguration from './components/FontConfiguration';

export default function Layout({ state, actions }) {
  const actionButtons = (
    <ToggleButtons data-test-id='toggle-buttons' state={state} actions={actions} />
  );

  return (
    <>
      <AppBar title={state.title}>
        <FontConfiguration state={state} actions={actions} />
        {actionButtons}
      </AppBar>
      <div id="offset"></div>
      <div style={{ fontFamily: state.font, fontSize: state.fontSize }}>
        <Editor state={state} actions={actions} />
      </div>
    </>
  );
}

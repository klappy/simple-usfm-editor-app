/* eslint-disable react/prop-types */
import React from 'react';

import AppBar from './components/AppBar';
import ToggleButtons from './components/ToggleButtons';
import Editor from './components/Editor';

export default function Layout({ state, actions }) {
  const actionButtons = (
    <ToggleButtons data-test-id='toggle-buttons' state={state} actions={actions} />
  );

  return (
    <>
      <AppBar title={state.title}>
        {actionButtons}
      </AppBar>
      <div id="offset"></div>
      <Editor state={state} actions={actions} />
    </>
  );
}

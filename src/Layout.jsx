import { styled } from "@mui/system";

import AppBar from "./components/AppBar";
import ToggleButtons from "./components/ToggleButtons";
import Editor from "./components/Editor";

export default function Layout({ state, actions }) {
  const actionButtons = <ToggleButtons state={state} actions={actions} />;

  return (
    <>
      <AppBar children={actionButtons} title={state.title} />
      <div id="offset"></div>
      <Editor state={state} actions={actions} />
    </>
  );
}

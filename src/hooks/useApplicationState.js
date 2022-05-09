import { useState, useCallback } from 'react';

export default function useApplicationState() {
  const initialState = {
    title: 'Simple USFM',
    text: '',
    blockable: false,
    editable: false,
    preview: true,
    sectionIndex: 1,
    sectionable: false,
    font: 'inherit',
    fontSize: '1em',
  };
  const [state, setState] = useState(initialState);

  const setText = useCallback((text) => {
    setState((prev) => ({ ...prev, text }));
  }, []);

  const setBlockable = useCallback((blockable) => {
    setState((prev) => ({ ...prev, blockable }));
  }, []);

  const setEditable = useCallback((editable) => {
    setState((prev) => ({ ...prev, editable }));
  }, []);

  const setPreview = useCallback((preview) => {
    setState((prev) => ({ ...prev, preview }));
  }, []);

  const setSectionIndex = useCallback((sectionIndex) => {
    setState((prev) => ({ ...prev, sectionIndex }));
  }, []);

  const setSectionable = useCallback((sectionable) => {
    setState((prev) => ({ ...prev, sectionable }));
  }, []);

  const setToggles = useCallback((toggles) => {
    setState((prev) => ({ ...prev, ...toggles }));
  }, []);

  const setFont = useCallback((font) => {
    setState((prev) => ({ ...prev, font }));
  }, []);

  const setFontSize = useCallback((fontSize) => {
    setState((prev) => ({ ...prev, fontSize }));
  }, []);

  const actions = {
    setText,
    setBlockable,
    setEditable,
    setPreview,
    setSectionIndex,
    setSectionable,
    setToggles,
    setFont,
    setFontSize,
  };


  return { state, actions };
}

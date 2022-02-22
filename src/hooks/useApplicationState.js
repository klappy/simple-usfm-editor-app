import { useState } from 'react';
import { useDeepCompareCallback } from 'use-deep-compare';

export default function useApplicationState() {
  const initialState = {
    title: 'Simple USFM',
    text: '',
    blockable: false,
    editable: false,
    preview: true,
    sectionIndex: 1,
    sectionable: false,
  };
  const [state, setState] = useState(initialState);

  const setText = useDeepCompareCallback((text) => {
    setState({ ...state, text });
  }, [state]);

  const setBlockable = useDeepCompareCallback((blockable) => {
    setState({ ...state, blockable });
  }, [state]);

  const setEditable = useDeepCompareCallback((editable) => {
    setState({ ...state, editable });
  }, [state]);

  const setPreview = useDeepCompareCallback((preview) => {
    setState({ ...state, preview });
  }, [state]);

  const setSectionIndex = useDeepCompareCallback((sectionIndex) => {
    setState({ ...state, sectionIndex });
  }, [state]);

  const setSectionable = useDeepCompareCallback((sectionable) => {
    setState({ ...state, sectionable });
  }, [state]);

  const setToggles = useDeepCompareCallback((toggles) => {
    setState({ ...state, ...toggles });
  }, [state]);

  const actions = {
    setText,
    setBlockable,
    setEditable,
    setPreview,
    setSectionIndex,
    setSectionable,
    setToggles,
  };

  return { state, actions };
}

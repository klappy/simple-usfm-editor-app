import React, { useEffect } from 'react';
import { loremIpsumBook } from 'lorem-ipsum-usfm';

import Layout from './Layout';

import './styles.css';
import useApplicationState from './hooks/useApplicationState';

export default function App() {
  const {
    state,
    actions,
    actions: { setText },
  } = useApplicationState();

  useEffect(() => {
    const usfm = loremIpsumBook({
      bookCode: '1LI',
      bookName: '1 Lorem Ipsum',
      chapterMin: 3,
      chapterMax: 20,
      chapterBias: 5,
      // chapterCount: 3,
      paragraphChance: 0.3,
      verseMin: 1,
      verseMax: 100,
      verseBias: 10,
      // verbose: true,
    });
    setText(usfm);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Layout state={state} actions={actions} />
    </div>
  );
};

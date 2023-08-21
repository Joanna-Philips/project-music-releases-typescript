import React from 'react';
import { Albums } from './components/Albums';
import { Playlists } from './components/Playlists';
import Dropup from './components/Dropup';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div>
      <Header headerNameInput="New Albums" />
      <Albums albumTypeInput="album" />
      <Header headerNameInput="New Singles" />
      <Albums albumTypeInput="single" />
      <Dropup />
      <Playlists />
    </div>
  );
}

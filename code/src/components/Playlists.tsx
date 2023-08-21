import React from 'react';
import data from '../stretch-goal.json'

type PlaylistsData = {
  id: string;
  external_urls: {
    spotify: string;
  }
  name: string;
}

// type PlaylistsDataArray = {
//   playlistInput: PlaylistsData[]
// }

export const Playlists: React.FC<PlaylistsData> = () => {
  return (
    <div className="playlists-container">
      <div className="playlists-header-container">
        <img className="playlist-icon" src="icons/playlist.png" alt="playlist icon consisting of 3 lines and a play button" />
        <h1 className="playlists-title">Featured Playlists</h1>
      </div>
      {
        data.playlists.items.map((playlistsData) => {
          return (
            <a key={playlistsData.id} href={playlistsData.external_urls.spotify} target="_blank" rel="noreferrer">
              <p>{playlistsData.name}</p>
            </a>
          )
        })
      }
    </div>
  );
};
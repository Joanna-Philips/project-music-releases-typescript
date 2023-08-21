import React from 'react';

type TracksInputProps = {
  tracksInput: number;
}

export const AlbumTracks: React.FC<TracksInputProps> = ({ tracksInput }) => {
  return <p className="albumTracks">Tracks: {tracksInput}</p>;
};

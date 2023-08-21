import React from 'react';

type AlbumNamesInputProps = {
  albumNamesInput: string;
}

export const AlbumName: React.FC<AlbumNamesInputProps> = ({ albumNamesInput }) => {
  return <p className="albumName">{albumNamesInput}</p>;
};

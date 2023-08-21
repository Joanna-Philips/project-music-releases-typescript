import React from 'react';

type Artist = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

type AlbumArtistsProps = {
  artistsInput: Artist[];
}

export const AlbumArtists: React.FC<AlbumArtistsProps> = ({ artistsInput }) => {
  return (
    <div>
      {artistsInput.map((artist) => (
        <a
          key={artist.id}
          className="artistName"
          target="_blank"
          rel="noreferrer"
          href={artist.external_urls.spotify}>
          {artist.name}
        </a>
      ))}
    </div>
  );
};
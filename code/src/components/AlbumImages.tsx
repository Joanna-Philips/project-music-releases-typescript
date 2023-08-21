import React from 'react';
import { AlbumButtons } from './AlbumButtons';

type Images = {
  url: string;
}

type ImagesInputProps = {
  imagesInput: Images[]
}

export const AlbumImages: React.FC<ImagesInputProps> = ({ imagesInput }) => {
  return (
    <div className="album-cover-picture">
      <div className="overlay">
        <AlbumButtons />
      </div>
      <img className="album-cover-image" src={imagesInput[1].url} alt="album cover" />
    </div>

  )
}
import React from 'react';

type HeaderProps = {
  headerNameInput: string;
}

export const Header: React.FC<HeaderProps> = ({ headerNameInput }) => {
  return (
    <header>
      <h1>{headerNameInput}</h1>
      <hr />
    </header>
  );
};

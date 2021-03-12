import React from 'react';

import LoadingGif from './loading.gif';

export default function Loading() {
  return (
    <div>
      <p>Loading....</p>
      <img src={LoadingGif}></img>
    </div>
  );
}

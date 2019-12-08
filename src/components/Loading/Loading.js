import React from 'react';
import './Loading.scss';

function Loading() {
  return (
    <div className="slui-spinner">
      <div className="slui-double-bounce1" />
      <div className="slui-double-bounce2" />
    </div>
  );
}

export default Loading;

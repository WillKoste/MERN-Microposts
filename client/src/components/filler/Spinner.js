import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading..." style={{display:'block', margin:'auto', width:'225px'}} />
    </Fragment>
  )
}

export default Spinner;
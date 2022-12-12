import React from 'react';
import {Helmet} from 'react-helmet';

const Head = (props) => {
  return (
    <>
    <Helmet>
    <title>Adeel | {props.title}</title>
    </Helmet>
    </>
  )
}

export default Head
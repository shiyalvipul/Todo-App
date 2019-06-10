import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';


const Headercontainer = ({ headertext }) => (
  <Header text={headertext} />
);

Headercontainer.propTypes = {
  headertext: PropTypes.string,
};
Headercontainer.defaultProps = {
  headertext: null,
};

export default Headercontainer;

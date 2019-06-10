import React from 'react';
import PropTypes from 'prop-types';


const Header = ({ text }) => (<h3 className="h3">{ text }</h3>);

Header.propTypes = {
  text: PropTypes.string,
};
Header.defaultProps = {
  text: null,
};
export default Header;

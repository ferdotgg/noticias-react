import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => (
    <nav className="nav-wrapper indigo darken-4">
        <a href="#!" className="brand-logo center">{titulo}</a>
    </nav>
);

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;
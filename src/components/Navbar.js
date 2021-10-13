import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <React.Fragment>
            <Menu>
                <Menu.Item>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/games">Games</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/contact">Contact</Link>
                </Menu.Item>
            </Menu>
        </React.Fragment>
    )
}

export default Navbar;
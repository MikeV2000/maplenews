import {Menu, MenuItemProps} from "semantic-ui-react";
import {environment} from "../../core/environment";
import React, {useState} from "react";
import {Route} from "../../types";
import {Link, useLocation} from "react-router-dom";

interface Props {
    routes: Route[];
}

export function MainMenu(props: Props) {
    const location = useLocation().pathname;
    const {routes} = props;

    return (
        <Menu inverted attached>
            <Menu.Item color="red" name='/' active={location === '/'}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            {routes.map(route => {
                return (
                    <Menu.Item key={route.path} color={route.color} name={route.path} active={location === route.path}>
                        <Link to={route.path}>{route.title}</Link>
                    </Menu.Item>
                );
            })}
            <Menu.Item position="right">
                {environment.location}
            </Menu.Item>
        </Menu>
    );
}
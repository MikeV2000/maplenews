import {Menu} from "semantic-ui-react";
import {environment} from "../../core/environment";
import React from "react";
import {Route} from "../../types";
import {Link} from "react-router-dom";

interface Props {
    routes: Route[];
}

export function MainMenu(props: Props) {
    const {routes} = props;

    return (
        <Menu inverted attached>
            <Menu.Item>
                <Link to='/'>Home</Link>
            </Menu.Item>
            {routes.map(route => {
                return (
                    <Menu.Item>
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
import {Menu} from "semantic-ui-react";
import {environment} from "../../core/environment";
import React from "react";
import {Route} from "../../types";

interface Props {
    routes: Route[];
}

export function MainMenu(props: Props) {
    const {routes} = props;

    return (
        <Menu inverted attached>
            {routes.map(route => {
                return (
                    <Menu.Item>
                        {route.title}
                    </Menu.Item>
                );
            })}
            <Menu.Item position="right">
                {environment.location}
            </Menu.Item>
        </Menu>
    );
}
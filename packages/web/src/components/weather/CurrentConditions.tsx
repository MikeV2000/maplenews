import {Header, Image, Table, TableBody, TableCell, TableRow} from "semantic-ui-react";
import React from "react";
import {Current} from "../../types/Weather";

interface Props {
    current: Current;
}

export function CurrentConditions (props: Props) {
    const {current} = props;

    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Header as='h2'>
                            Current Conditions
                        </Header>
                    </TableCell>
                    <TableCell />
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Header as='h2'>
                            <Image src={`resources/icons/${current?.weather ? current?.weather[0].icon : ''}.png`} />
                            <Header.Content>
                                {Math.round(current?.temp || 0)}
                                <Header.Subheader>{ current?.weather ? current.weather[0].description : ''}</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </TableCell>
                    <TableCell>
                        {new Date(current?.dt ? current.dt*1000 : "").toLocaleString('en-us',  {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
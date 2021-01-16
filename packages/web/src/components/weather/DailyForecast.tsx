import {Header, Image, Table, TableBody, TableCell, TableRow} from "semantic-ui-react";
import React from "react";
import {DailyEntity} from "../../types/Weather";

interface Props {
    daily: DailyEntity[];
}

export function DailyForecast (props: Props) {
    const {daily} = props;

    return (
        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Header as='h2'>
                            Daily Forecast
                        </Header>
                    </TableCell>
                    <TableCell />
                </TableRow>
                {daily?.map(day => {
                    return (
                        <TableRow key={day.dt}>
                            <TableCell>
                                <Header as='h2'>
                                    <Image src={`https://openweathermap.org/img/wn/${day.weather ? day?.weather[0].icon : ''}.png`} />
                                    <Header.Content>
                                        {Math.round(day?.temp?.max)}
                                        <Header.Subheader>{ day.weather ? day.weather[0].description : ''}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </TableCell>
                            <TableCell>
                                {new Date(day?.dt*1000).toLocaleString('en-us',  {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    )
}
import * as React from 'react';

const summonerDetail = (props: any) => (
    <div>
        <p>
            Name: {props.name}
            Summoner Level: {props.summonerLevel}
            ID: {props.id}
            Error: {props.error}
        </p>
    </div>
);

export default summonerDetail;
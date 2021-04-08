import { YMaps, Map, Placemark } from 'react-yandex-maps';
import {Header, Divider, Statistic} from "semantic-ui-react";

export const MapPanel = () => (
    <YMaps>
        <div>
            <Header as='h1'>Мы находимся рядом с вами!</Header>
            <Map height="300px" width="-1" defaultState={{ center: [55.75, 37.57], zoom: 12 }}>
                <Placemark geometry={[55.75, 37.57]} />
            </Map>
        </div>

        <Statistic size="small">
            <Statistic.Value>+7-963-333-78-64</Statistic.Value>
            <Statistic.Label>Позвоните нам</Statistic.Label>
        </Statistic>
    </YMaps>
);

import React from 'react';
import {Container, Grid, Icon, Image, Menu, Segment} from 'semantic-ui-react';

import logo from '../assets/logo.gif'
import BookingPanel from "./BookingPanel";
import AboutUsPanel from "./AboutUsPanel";
import {MapPanel} from "./MapPanel";
import MenuPanel from "./MenuPanel";

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: 'о ресторане',
            data: []
        };
    }

    renderSwitch(activeItem) {
        switch (activeItem) {
            case 'о ресторане':
                return <AboutUsPanel/>
            case 'бронь столика':
                return <BookingPanel/>
            case 'наш адрес':
                return <MapPanel/>
            case 'наше меню':
                return <MenuPanel/>
            default:
                return <AboutUsPanel/>
        }
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <Container>
                <Image src={logo} onClick={() => this.handleItemClick(null, "о ресторане")} size='medium'/>
                <Grid stackable columns={2}>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular icon='labeled'>
                            <Menu.Item
                                name='о ресторане'
                                active={activeItem === 'о ресторане'}
                                onClick={this.handleItemClick}
                            >
                                <Icon name='building'/>
                                О ресторане
                            </Menu.Item>
                            <Menu.Item
                                name='наше меню'
                                active={activeItem === 'наше меню'}
                                onClick={this.handleItemClick}
                            >
                                <Icon name='food'/>
                                Наше меню
                            </Menu.Item>
                            <i className="fa fa-users" aria-hidden="true"/>
                            <Menu.Item
                                name='наш адрес'
                                active={activeItem === 'наш адрес'}
                                onClick={this.handleItemClick}
                            >
                                <Icon name='map marker alternate'/>
                                Наш адрес
                            </Menu.Item>
                            <Menu.Item
                                name='бронь столика'
                                active={activeItem === 'бронь столика'}
                                onClick={this.handleItemClick}
                            >
                                <Icon name='coffee'/>
                                Бронь столика
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                        {this.renderSwitch(activeItem)}
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

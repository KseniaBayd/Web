import React from 'react';
import {Feed, Divider, Flag, Header, Icon, Image, List, Step} from 'semantic-ui-react';

import food1 from '../assets/food/food1.jpg';
import food2 from '../assets/food/food2.jpg';
import food3 from '../assets/food/food3.jpg';
import food4 from '../assets/food/food4.jpeg';

import user1 from '../assets/users/user1.jpg';
import user2 from '../assets/users/user2.jpg';
import user3 from '../assets/users/user3.jpg';
import user4 from '../assets/users/user4.jpg';

import main from '../assets/main.jpg';

const AboutUsPanel = () => (
    <div>
        <Header as='h1'>Один из лучших ресторанов в городе</Header>

        <Image fluid src={main}/>
        <Divider clearing/>

        <Header as='h2'>Блюда вашей любимой кухни</Header>

        <List size="huge">
            <List.Item>
                <List.Icon name='certificate'/>
                <List.Content>Русская кухня <Flag name='ru'/></List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='certificate'/>
                <List.Content>Американская кухня <Flag name='us'/></List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='certificate'/>
                <List.Content>Европейская кухня <Flag name='eu'/></List.Content>
            </List.Item>
        </List>

        <Divider clearing/>

        <Header as="h2">Отзывы наших посетителей</Header>

        <Feed events={events}/>

        <Step.Group size="mini">
            <Step>
                <Icon name='book'/>
                <Step.Content>
                    <Step.Title>Загляните в наше меню</Step.Title>
                    <Step.Description>Вы точно найдёте блюдо на свой вкус!</Step.Description>
                </Step.Content>
            </Step>

            <Step>
                <Icon name='bookmark'/>
                <Step.Content>
                    <Step.Title>Забронируйте столик</Step.Title>
                    <Step.Description>Выбирайте удобное для себя время</Step.Description>
                </Step.Content>
            </Step>

            <Step>
                <Icon name='food'/>
                <Step.Content>
                    <Step.Title>Приходите к нам!</Step.Title>
                </Step.Content>
            </Step>
        </Step.Group>
    </div>
)

export default AboutUsPanel

const events = [
    {
        date: '1 час назад',
        image: user1,
        meta: '4 лайка',
        summary: 'Евгения добавила комментарий',
        extraText:
            "Обожаю посещать этот ресторан!",
    },
    {
        date: '2 дня назад',
        image: user2,
        meta: '1 лайк',
        summary: 'Екатерина прикрепила две фотографии',
        extraImages: [
            food1, food2
        ],
    },
    {
        date: '3 дня назад',
        image: user3,
        meta: '8 лайков',
        summary: 'Владимир оставил комментарий',
        extraText:
            "Всё понравилось, приятные цены и быстрое обслуживание.",
    },
    {
        date: '4 дня назад',
        image: user4,
        meta: '41 лайк',
        summary: 'Виталий добавил две фотграфии',
        extraText:
            'Ужасный персонал, ждали 20 минут свой заказ, но было вкусно',
        extraImages: [
            food3, food4,
        ],
    },
]

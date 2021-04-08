import React from 'react';
import {Card, Image, Rating} from 'semantic-ui-react';

import food5 from '../assets/food/food5.jpg';
import food6 from '../assets/food/food6.jpeg';
import food7 from '../assets/food/food7.jpg';
import food8 from '../assets/food/food8.jpg';
import food9 from '../assets/food/food9.jpg';
import food10 from '../assets/food/food10.jpeg';
import food11 from '../assets/food/food11.jpg';
import food12 from '../assets/food/food12.jpg';
import food13 from '../assets/food/food13.jpg';

const MenuPanel = () => (
    <div>
        <Card.Group itemsPerRow={3}>
            <Card>
                <Image src={food5} wrapped height={200} ui={false}/>
                <Card.Content>
                    <Card.Header>Сосисочки</Card.Header>
                    <Card.Meta>
                        <span>499р.</span>
                    </Card.Meta>
                    <Card.Description>
                        Вкуснейшие сосисочки с овощами и другой ерундой, которую вам положит повар.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Rating icon='star' defaultRating={5} maxRating={5}/>
                </Card.Content>
            </Card>
            <Card>
                <Image src={food6} wrapped height={200} ui={false}/>
                <Card.Content>
                    <Card.Header>Рыбка</Card.Header>
                    <Card.Meta>
                        <span>759р.</span>
                    </Card.Meta>
                    <Card.Description>
                        В составе вкусная рыба. Подаётся вместе с овощами и дольками свежего лимона.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Rating icon='star' defaultRating={4} maxRating={5}/>
                </Card.Content>
            </Card>
            <Card>
                <Image src={food7} wrapped height={200} ui={false}/>
                <Card.Content>
                    <Card.Header>Бургерасы</Card.Header>
                    <Card.Meta>
                        <span>699р.</span>
                    </Card.Meta>
                    <Card.Description>
                        Неотъемлемый атрибут американской кухни: вкуснейшие бургерсы из лучших ингридиентов!
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Rating icon='star' defaultRating={5} maxRating={5}/>
                </Card.Content>
            </Card>
            <Card>
                <Image src={food8} wrapped height={200} ui={false}/>
                <Card.Content>
                    <Card.Header>Тарелка еды</Card.Header>
                    <Card.Meta>
                        <span>499р.</span>
                    </Card.Meta>
                    <Card.Description>
                        Если не знаете, что заказать, то закажите "тарелку еды". В ней точно будет еда. Гарантируем.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Rating icon='star' defaultRating={5} maxRating={5}/>
                </Card.Content>
            </Card>
            <Card>
                <Image src={food9} wrapped height={200} ui={false}/>
                <Card.Content>
                    <Card.Header>Снова рыба</Card.Header>
                    <Card.Meta>
                        <span>690р.</span>
                    </Card.Meta>
                    <Card.Description>
                        На этот раз мы добавили в неё картошки, потому что нас давно об этом просили.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Rating icon='star' defaultRating={5} maxRating={5}/>
                </Card.Content>
            </Card>
            <Card>
                <Image src={food10} wrapped height={200} ui={false}/>
                <Card.Content>
                    <Card.Header>Пиццулечка</Card.Header>
                    <Card.Meta>
                        <span>999р.</span>
                    </Card.Meta>
                    <Card.Description>
                        40 см счастья для вас и вашей компании.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Rating icon='star' defaultRating={3} maxRating={5}/>
                </Card.Content>
            </Card>
            <Card>
                <Image src={food11} wrapped height={200} ui={false}/>
                <Card.Content>
                    <Card.Header>Странная штука</Card.Header>
                    <Card.Meta>
                        <span>359р.</span>
                    </Card.Meta>
                    <Card.Description>
                        Мы не знаем, что это.<br/> Повар тоже не рассказывает.
                        <br/><br/>Но детям очень нравится.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Rating icon='star' defaultRating={5} maxRating={5}/>
                </Card.Content>
            </Card>
            <Card>
                <Image src={food12} wrapped height={200} ui={false}/>
                <Card.Content>
                    <Card.Header>Вкусняйшка</Card.Header>
                    <Card.Meta>
                        <span>2999р.</span>
                    </Card.Meta>
                    <Card.Description>
                        Нас не спрашивают, почему это стоит так дорого, пока не купят попробовать. Потом спрашивают.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Rating icon='star' defaultRating={2} maxRating={5}/>
                </Card.Content>
            </Card>
            <Card>
                <Image src={food13} wrapped height={200} ui={false}/>
                <Card.Content>
                    <Card.Header>Борщик</Card.Header>
                    <Card.Meta>
                        <span>399р.</span>
                    </Card.Meta>
                    <Card.Description>
                        Пришли за русской кухней? Возьмите борща. Дёшево и сердито. По-русски даже как-то.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Rating icon='star' defaultRating={4} maxRating={5}/>
                </Card.Content>
            </Card>
        </Card.Group>
    </div>
)

export default MenuPanel

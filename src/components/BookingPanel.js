import React, {Component} from 'react'
import {Button, Form, Header, Input, Message, TextArea,} from 'semantic-ui-react'


class BookingPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {sent: false};
    }

    render() {
        const {sent} = this.state;

        return (
            <Form>
                <Header as="h1">Форма бронирования столика</Header>
                <Form.Group widths='equal'>
                    <Form.Field
                        disabled={sent}
                        control={Input}
                        label='Ваше имя'
                        placeholder='Введите ваше имя'
                        required
                    />
                    <Form.Field
                        disabled={sent}
                        control={Input}
                        label='Номер телефона'
                        placeholder='Введите ваш номер'
                        required
                    />
                </Form.Group>
                <Form.Field
                    disabled={sent}
                    control={TextArea}
                    label='Комментарий к бронированию'
                    placeholder='Напишите, когда вы желаете к нам прийти и какие у вас есть предпочтения по столику'
                />
                {
                    sent ? <Message info>
                        <Message.Header>Успешно отправлено!</Message.Header>
                        <p>Мы постараемся учесть все ваши пожалания и выбрать лучшее место.</p>
                    </Message> : ''
                }
                <Form.Field onClick={() => this.setState({sent: true})}
                            disabled={sent} control={Button}>Отправить</Form.Field>
            </Form>
        )
    }
}

export default BookingPanel

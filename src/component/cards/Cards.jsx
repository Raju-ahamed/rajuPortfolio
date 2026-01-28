import React, { use } from 'react';
import Card from '../card/Card';

const Cards = ({ promiseCard }) => {
    const component= use(promiseCard)
    return (
        <div className='grid md:grid-cols-3'>
            {
                component.map(card => <Card
                    card={card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;
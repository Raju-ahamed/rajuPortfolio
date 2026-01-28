import React from 'react';
import Fearure from './feature/Fearure';

const Card = ({ card }) => {
    const {name, price, description, features } = card;
    return (
        <div className='bg-cyan-900 flex flex-col rounded-2xl m-4 p-10'> 
            <div><h1 className='text-5xl'>{name}</h1>
                <p className='text-3xl'>$ {price}</p></div>
            <div className='bg-cyan-600 p-4 rounded-xl flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <Fearure
                        key={index}
                        feature={feature}
                    ></Fearure>)
                }
            </div>
            <button className='btn w-full'> Subscribe</button>
        </div>

    );
};

export default Card;
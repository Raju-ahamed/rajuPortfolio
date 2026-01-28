import React from 'react';
import { IoMdCheckboxOutline } from "react-icons/io";


const Fearure = ({ feature }) => {
    return (
        <p className='flex mt-1'>
            <IoMdCheckboxOutline className='mr-2 mt-1 ' />  {feature}
        </p>
    );
};

export default Fearure;
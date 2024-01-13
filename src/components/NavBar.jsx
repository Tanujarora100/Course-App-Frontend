import React from 'react';
import { filterData } from '../utils/data';
import Button from '../components/Button';

const NavBar = () => {
    return (
        <div>
            {filterData.map((data) => (
                <Button key={data.id} title={data.title}></Button>
            ))}
        </div>
    );
};

export default NavBar;

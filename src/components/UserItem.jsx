import React from 'react';
import './UserItem.css';
import user from '../assets/imag/user.svg';

function UserItem(props) {
    const {name, email, isGoldClient, onDelete, id} = props;
    const salary = Math.floor(Math.random() * (18000 - 2500 + 1)) + 2500;
    
    return (
        <div className='aUser'>
            <div className='firstColumn'>
                <h3>Name: { name }</h3>
                <img src={ user } alt='' height="60px"/>
                <button onClick={() => onDelete(id-1)}> Delete this user </button>
                <p>Email: { email }</p>
                { isGoldClient
                    ? <h3>Client GOLD</h3>
                    : null
                }
            </div>
            
            <div className='secondColumn'>
                <p>Salary: { salary } $</p>
                <p>id: {id}</p>
            </div>

        </div>
    );
    
}

export default UserItem;
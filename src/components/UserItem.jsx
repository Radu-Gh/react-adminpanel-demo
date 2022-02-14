import React from 'react';

function UserItem(props) {
    const {name, email, isGoldClient, onDelete, id} = props;
    const salary = Math.floor(Math.random() * (18000 - 2500 + 1)) + 2500;
    
    return (
        <div>
            <h3>Name: { name }</h3>
            <img src='https://cdn2.iconfinder.com/data/icons/ui-kit-vol-1/100/1-55-512.png' alt='' height="60px"/>
            <p>Email: { email }</p>
            <p>Salary: { salary } $</p>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <p>id: {id}</p>
            <button onClick={() => onDelete(id-1)}> Delete this user </button>

        </div>
    );
    
}

export default UserItem;
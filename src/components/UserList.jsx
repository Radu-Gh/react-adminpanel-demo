import React from "react";
import UserItem from "./UserItem";

class UserList extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor was called!");
    }
    
    componentDidMount() {
        console.log("UserList was mounted!");
    }

    componentDidUpdate(){
        console.log("UserList did update!");
    }

    componentWillUnmount(){
        console.log("UserList will unmount!");
    }

    render() {
        const { users, handleDelete } = this.props;
        console.log("UserList was rendered!");
        return (
            <div>
                <h2>Users list:</h2>
                {users.map((user, index) =>{
                    return <UserItem
                        id={ user.id } 
                        name={ user.name }
                        email={ user.email }
                        isGoldClient={ user.isGoldClient }
                        key={ index }
                        onDelete={ handleDelete}
                    />
                })
                }
            </div>
        )
    }
}

export default UserList;
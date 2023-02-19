import React, { Component } from 'react';

class ListUserComponents extends Component {

    constructor(props){
        super(props)
        this.state={
            users:[]
        }
    }

    render() {
        return (
            <div>
                <h2>Users List</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>User Name</th>
                                <th>Age</th>
                                <th>Is Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user => 
                                    <tr key = {user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.isActive}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListUserComponents;
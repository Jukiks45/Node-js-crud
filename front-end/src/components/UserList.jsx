import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Await, Link } from 'react-router-dom';
const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers();
    },[]);
    const getUsers = async()=>{
        const response = await axios.get('http://127.0.0.1:5000/users');
        setUsers(response.data);
    };
    const deleteuser = async(id)=>{
        try {
            await axios.delete(`http://127.0.0.1:5000/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <table className="table is-striped is-fullwidth">
                    <Link to={"/adduser"} className="button is-success">Tambah User</Link>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index ) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>
                                <Link to={`/edit/${user.id}`}><button className='button is-small is-info'>Edit</button></Link>
                                <button onClick={()=> deleteuser(user.id)} className='button is-small is-danger'>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default UserList
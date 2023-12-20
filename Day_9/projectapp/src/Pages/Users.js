import React, { useEffect, useState } from 'react';
import { getUser, deleteUser } from '../Services/api';
import '../Assets/CSS/user.css'
import { useNavigate } from 'react-router-dom';
function Users() {
    const [users, setUser] = useState([]);
    const navigate=useNavigate();
    const fetchData = async () => {
        try {
            const res = await getUser();
            setUser(res.data);
        } catch (e) {
            console.log(e);
        }
    };
    const handleDelete = async (id) => {
        try {
            const res = await deleteUser(id)
            if(res.status===200)
            {
                console.log("deleted successfully")
            }
            fetchData()

        }
        catch(e)
        {
            console.log(e);
        }
    }
    const handleEdit=(id)=>
    {
        navigate(`/edit${id}`)
    }
    const handleAdd=()=>{
        navigate('/add')
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>
                                <button className='edit-btn' onClick={()=>handleEdit(user.id)}>Edit</button>
                            </td>
                            <td>
                                <button className='del-btn' onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                    <button className='edit-btn' type='submit' onClick={handleAdd}>Add user</button>
        </>
    );
}

export default Users;

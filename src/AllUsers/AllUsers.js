import React, { useEffect, useState } from 'react';
import './AllUsers.css'

const AllUsers = () => {
    const [deleted, setDeleted] = useState({})
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setData(data))
    }, [, deleted])
    console.log(data);

    const handleDelete = (id) => {
        const confirm = window.confirm("really want to delete", id);
        if (confirm) {
            fetch(`http://localhost:5000/deleteUser/${id}`,{
                method:'delete'
            })
                .then(res => res.json())
                .then(data => setDeleted(data));
        }
       
    }

    return (
        <div className='attendance'>

                <table className='usersTable'>
                    <thead >
                        <td className='fs-3'>Name</td>
                        <td className='fs-3'>catagory</td>
                        <td className='fs-3'>modify</td>
                    </thead>
                    <tbody>
                    {data.map(res => <tr key={res._id}>
                            <td>{res.name}</td>
                            <td>{res.catagory}</td>
                            <td><button onClick={()=>{handleDelete(res._id)}}> <a target='_blank' href="https://console.firebase.google.com/project/authentic-4fa12/authentication/users">delete</a></button></td>
                        </tr>)}
                    </tbody>
                </table>
        </div>
    );
};

export default AllUsers;
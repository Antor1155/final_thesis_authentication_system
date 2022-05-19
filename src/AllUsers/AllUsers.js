import React, { useEffect, useState } from 'react';
import './AllUsers.css'

const AllUsers = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);

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
                            <td><button> <a target='_blank' href="https://console.firebase.google.com/project/authentic-4fa12/authentication/users">delete</a></button></td>
                        </tr>)}
                    </tbody>
                </table>
        </div>
    );
};

export default AllUsers;
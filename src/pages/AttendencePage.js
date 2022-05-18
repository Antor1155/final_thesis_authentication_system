import React, { useEffect, useState } from 'react';
import "./Attendence.css"

const AttendencePage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);

    return (
        <div className='attendance'>
            {data.map(res => <div key={res.id}>
                <h2 className='mt-5 mb-4'> {res.date}</h2>
                <table>
                    <thead>
                        <td className='fs-3'>name</td>
                        <td className='fs-3'>time</td>
                    </thead>
                    <tbody>
                        {res.presence.map(nt => <tr>
                            <td>{nt.name}</td>
                            <td>{nt.time}</td>
                        </tr>)}
                    </tbody>
                </table>


            </div>)}
        </div>
    );
};

export default AttendencePage;
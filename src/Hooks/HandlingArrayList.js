//Mapped the array of objects and displayed the data in the table format.
// Loop not supported in JSX, so we have to use map function to loop through the array and display the data.
// We have used the map function to loop through the array of objects and displayed the data in the table format.

import React from "react";

const ArryHandling = () => {
    const arr = [
        { Name: 'LalSinghChaddha', UserID: 'battalion 609' },
        { Name: 'Jhon Doe', UserID: 'battalion 771' },
        { Name: 'Rathore Kumar', UserID: 'battalion 192' },

    ];
    return (
        <div>
            <h1>Map / Loop with Array</h1>
            <table border={2} cellPadding={5} width={500}>
                <tbody>
                    <tr>
                        <td>Serial No.</td>
                        <td>Name</td>
                        <td>UserID</td>
                    </tr>
                    {
                        arr.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.UserID}</td>
                                </tr>//
                            )
                        })
                    }
                </tbody>
            </table >
        </div>
    )   
}


export default ArryHandling;

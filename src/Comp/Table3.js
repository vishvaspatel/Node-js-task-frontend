import React, { useState, useEffect } from "react";
import "./style.css"

function Table3() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getdata();
      }, []);
    
      function getdata() {
        fetch(`https://nodejs-task-one.vercel.app/third`,
          {
            method: "GET",
            crossDomain: true,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data.res_data);
            setData(data.res_data)
          });
      }

  return (
    <table>
    <thead>
      <tr>
      <th>SR. No</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Income</th>
        <th>City</th>
        <th>Car</th>
        <th>Quote</th>
        <th>Phone price</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={row._id}>
          <td>{index+1}</td>
          <td>{row.first_name}</td>
          <td>{row.last_name}</td>
          <td>{row.email}</td>
          <td>{row.gender}</td>
          <td>{row.income}</td>
          <td>{row.city}</td>
          <td>{row.car}</td>
          <td>{row.quote}</td>
          <td>{row.phone_price}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table3
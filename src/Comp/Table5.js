import React, { useState, useEffect } from "react";
import "./style.css"

function Table5() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getdata();
      }, []);
    
      function getdata() {
        fetch(`https://nodejs-task-one.vercel.app/fifth`,
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
        <th>City Name</th>
        <th>Count of users</th>
        <th>Income</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={row._id}>
          <td>{index+1}</td>
          <td>{row._id}</td>
          <td>{row.count}</td>
          <td>{row.income}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table5
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { data } from "react-router";
// import { getDataUser } from "../store/action";



export default function TabelComponent(){

    const globalStateUser = useSelector(state =>state.allDataUser)
    console.log(globalStateUser,"global data");

    return (        

        <>
                  {/* <h1>tabel component2</h1> */}
                 
                  {/* {JSON.stringify(globalStateUser)} */}

                  <h1>Tabel Component</h1>
      
      {/* Tabel untuk menampilkan data */}
      <table border="1" style={{ width: "100%", margin: "20px 0", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {/* Mengiterasi data globalStateUser untuk membuat baris tabel */}
          {globalStateUser.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
            
        
        
        </>
          
      
        )
      
      
      }
'use client';

import SessionCheck from '@/components/sessionCheck/sessionCheck';
import { removeUser } from '@/store/userReducer';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import users from '@/data';
import { useDispatch, useSelector } from 'react-redux';

export default function Page(){

    return <>
       <SessionCheck name="ali">
            <Users></Users>
       </SessionCheck>
    </>


}

 function Users(){
    let [users, setUsers] = useState();
    useEffect(function(){
           axios.get('/api/auth').then(function(resp){
            setUsers(resp.data);
            console.log(resp.data);
        });

    }, [])

    return <div>
        {/* <h1>{user?.name}</h1> */}
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                </tr>                
            </thead>

            <tbody>
                {
                  users?.map(function(user, i){
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button onClick={function(){

                                axios.delete('/api/auth?a1='+user._id).then(function(resp){

                                    users.splice(i, 1);
                                    setUsers([...users]);


                                });

                                // dispatch( removeUser(user.id) )
                                
                            }}>Delete</button>
                        </td>
                    </tr>
                  })  
                }
            </tbody>

        </table>
    </div>
}
import React from 'react'

const UserList = ({users}) => {
  return (
     <table>
        <thead>
            <tr>
                <th>Name</th>     
                <th>Email</th>
            </tr>
        </thead>
        <tbody data-testid='users'>
          {users?.map((item,index)=><tr key={index}>
              <td>{item?.name}</td>
              <td>{item?.email}</td>
          </tr>)}
        </tbody>
     </table>
  )
}

export default UserList
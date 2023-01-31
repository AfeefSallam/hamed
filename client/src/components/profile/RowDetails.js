import axios from 'axios'
import React from 'react'
// import user from '../../../../server/models/user'
import user from '../../actions/user'


function RowDetails({_id, name, email, deleteUser}) {

  return (
    
         <>
         <tr key={_id}>
             <td>{_id}</td>
             <td>{name}</td>
             <td>{email}</td>
                <td>
                    <button>Edit</button>
                    <button onClick={() => deleteUser(_id)}>Delete</button>

                 </td>
      </tr>
        </>
  )
}

export default RowDetails
// import React from "react";

// const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
//   return (
//     <tr>

//       <td>{contact.fullname}</td>
//       <td>{contact.gender}</td>
//       <td>{contact.age}</td>
//       <td>{contact.bed}</td>
//       <td>
//         <button
//           type="button"
//           onClick={(event) => handleEditClick(event, contact)}
//         >
//           Edit
//         </button>
//         <button type="button" onClick={() => handleDeleteClick(contact.id)}>
//           Delete
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default ReadOnlyRow;

import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="text-center" align="center">
      <td align="center">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contact.fullname}
      </td>
      <td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contact.gender}
      </td>
      <td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contact.age}
      </td>
      <td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{contact.bed}
      </td>
      
      <td className="text-left">
        <div>  
          <button type="button" className="btn btn-success text-left" onClick={(event) => handleEditClick(event, contact)}>Edit</button>
          &nbsp;&nbsp;
          <button type="button" className="btn btn-danger text-left" onClick={(event) => handleDeleteClick(event, contact)}>Delete</button>
        </div>
        {/* <button type="button" onClick={(event) => handleEditClick(event, contact)}>Edit</button>
         <button type="button" onClick={() => handleDeleteClick(contact.id)}>Delete</button> */}
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
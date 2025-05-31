

const Costdetails = (props) => {
    return (
        <>
            {/* <tr>
                <th scope="row">{props.type}</th>
                <td>{props.price}</td>
            </tr>
            <tr>
                <th scope="row">Person cost</th>
                <td>{props.cost}</td>
            </tr>
            <tr>
                <th scope="row">ExPerson cost</th>
                <td>{props.extra}</td>
            </tr>
            <tr>
                <th scope="row">child cost</th>
                <td>{props.cwb}</td>
            </tr>
            <tr>
                <th scope="row">child bd cost</th>
                <td>{props.cwob}</td>
            </tr> */}

            <tr align="center" class="table-info">
                <td scope="row">{props.valid_from}</td>
                <td scope="row">{props.valid_to}</td>
            </tr>
        </>
    )
};

export default Costdetails;
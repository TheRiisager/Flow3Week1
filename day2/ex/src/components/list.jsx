const List = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Age:</th>
                    </tr>
                </thead>
                <tbody>
                    {props.members.map(mapToTable)}
                </tbody>  
            </table>
        </div>
    )
}

const mapToTable = (member, index) => {
    return <tr>
        <td key={index}>{member.name}</td>
        <td>{member.age}</td>
    </tr>
}

export default List;
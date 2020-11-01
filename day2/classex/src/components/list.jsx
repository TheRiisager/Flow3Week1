
function List(){
    const nameList = [{'fname':'Anders','lname':'Henriksen'},{'fname':'Britta','lname':'Albertsen'},{'fname':'Kalle','lname':'Fredborg'}];
    const mappedList = nameList.map((person) => 
        <li key={person.fname}>
            {person.fname + " " + person.lname}
        </li>
    );

    return (
        <ul>
            {mappedList}
        </ul>
    );
}

export default List;

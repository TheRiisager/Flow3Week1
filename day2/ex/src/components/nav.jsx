import React, { useState } from 'react';
import Counter from './counter';
import Joke from './joke';
import List from './list';

const Nav = () => {
    const [page, setPage] = useState(<Counter initial={0} inc={1}></Counter>);

    const initialMembers = [{name : "Peter", age: 18},
                          {name : "Hanne", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Holger", age: 22}];
  const [members,setMembers] = useState(initialMembers)

    return (
        <div>
            <div>
                <button style={{display: "inline-block"}} onClick={() => setPage( <Counter initial={0} inc={1}></Counter> )}>ex1</button>
                <button style={{display: "inline-block"}} onClick={() => setPage( <Joke></Joke> )}>ex2</button>
                <button style={{display: "inline-block"}} onClick={() => setPage( <List members={members}></List>)}>ex3</button>
            </div>
            {page}
        </div>
    )
}

export default Nav;
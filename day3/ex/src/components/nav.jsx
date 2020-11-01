import React, { useState } from 'react';
import FormDemo from './formDemo';
import ReservationForm from './formDemoMultiple';
import LiftingState from './liftingState';

const Nav = () => {
    const [page, setPage] = useState(<FormDemo></FormDemo>);

    return (
        <div>
            <div>
                <button style={{display: "inline-block"}} onClick={() => setPage( <FormDemo></FormDemo> )}>ex1</button>
                <button style={{display: "inline-block"}} onClick={() => setPage( <ReservationForm></ReservationForm> )}>ex2</button>
                <button style={{display: "inline-block"}} onClick={() => setPage( <LiftingState></LiftingState> )}>ex3</button>
            </div>
            {page}
        </div>
    )
}

export default Nav;
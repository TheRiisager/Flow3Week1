import { useState } from 'react';
import LiftingStateInput from './liftingStateInput';

const LiftingState = () => {
    const initial = ["børge", "brian"];
    const [persons, setpersons] = useState(initial);

    const toList = (item, index) => {
        return <li key={index}>{item}</li>;
    }

    const handleSubmit = (event, value) => {
        setpersons(persons.push(value.toString()));
        event.preventDefault();
    }

    return (
        <div>
            <ul>
                {persons.map(toList)}
            </ul>
            <LiftingStateInput onSubmit={handleSubmit}></LiftingStateInput>
        </div>
    );
}

export default LiftingState;
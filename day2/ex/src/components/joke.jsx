import React, { useEffect, useState } from 'react';

const Joke = () => {
    const [joke,setJoke] = useState("")
    const [dadJoke, setDadJoke] = useState("")

    const fetchJoke = (url) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
           setJoke(data.value);
        });
    }

    const fetchDadJoke = (url) => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
           setDadJoke(data.joke);
        });
    }

    useEffect( () => {
        const interval = setInterval( () => {
            fetchDadJoke("https://icanhazdadjoke.com/")
        }, 10000 )
        return () => {
            clearInterval(interval)
            alert('Du forlader siden, jeg er en irriterend pop up!')
        }
    },[]);

    return (
        <div>
            <p>{joke}</p>
            <button onClick={ () => fetchJoke("https://api.chucknorris.io/jokes/random") }>Get Chuck Norris Joke</button>
            <p>Everchanging dad joke:</p>
            <p>{dadJoke}</p>
        </div>
    )
}

export default Joke;
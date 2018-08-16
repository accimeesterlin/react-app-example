import React from 'react';


/*
    NO STATE
    No Function
    No Side Effects
    NO AJAX Calls
*/

// Pure Function

// Functional Component
// Dumb, Stateless, Representational
function Header(props) {
    // props.username
    // props.age

    const result = "fsfsf";

    // JSX
    return (
        <div>
            <h2>I am Mr. Header</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <p>{result}</p>
        </div>
    );
};

export default Header;
import React from 'react'

const Nav = (props) => {
    
    return (

        <div>
            <section className="buttons">
            <button onClick={props.decrease}>{'<'}Previous</button>
    <button onClick={props.increase}>Next{'>'}</button>
            </section>
        </div>
    )
}

export default Nav
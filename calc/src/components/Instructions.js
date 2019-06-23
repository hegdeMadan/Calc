import React from 'react'

const Instructions = () => {
    return (
        <div className="instruction">
            {/* <h3 align='center'> Welcome to the world's best speed calculator! :p </h3> */}
            <h2> Instructions </h2>
            <div className="bar"></div>
            <ul>
                <li>
                    Input the Distance you've travelled and
                </li>
                <li>
                    Time you spent for travelling that Distance
                </li>
                <li>
                    Once the speed is displayed, you can edit input value
                    and get the calculated speed
                </li>
            </ul>
        </div>
    )
}

export default Instructions
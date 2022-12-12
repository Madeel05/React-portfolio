import React from 'react'

const Title = (props) => {
    return (
        <>
            <div className="section-title">
                <h2>{props.title}</h2>
                <p>{props.children}</p>
            </div>
        </>
    )
}

export default Title;
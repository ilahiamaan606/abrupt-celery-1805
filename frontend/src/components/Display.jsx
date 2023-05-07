import React from 'react'

const Display = () => {
    fetch(`http://localhost:4500/doctor`).then((res) => res.json())
        return(
            <div></div>
        )
}

export default Display
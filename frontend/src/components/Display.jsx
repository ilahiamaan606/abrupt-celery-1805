import React from 'react'

const Display = () => {
    fetch(`https://shy-jade-giraffe.cyclic.app/doctor`).then((res) => res.json())
        return(
            <div></div>
        )
}

export default Display
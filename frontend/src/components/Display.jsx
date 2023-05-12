import React from 'react'

const Display = () => {
    fetch(`https://hospital-appointment-booking-system.onrender.com/doctor`).then((res) => res.json())
        return(
            <div></div>
        )
}

export default Display
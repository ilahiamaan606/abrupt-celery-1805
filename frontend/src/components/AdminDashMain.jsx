import React, { useState, useEffect } from 'react'
import styles from '.././pages/admin/AdminDashMain.module.css'

const AdminDashMain = ({ type }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/admin/${type}`);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [type]);

    return (
        <div className={styles.container}>
            <h1>Welcome</h1>

            {/* Add more components and content here */}
        </div>
    )
}

export default AdminDashMain

import React, { useState } from 'react'
import styles from '.././pages/admin/AdminDashMain.module.css'

const AdminDashMain = ({type}) => {
    const [data,setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`/admin/${type}`);
            res = await response.json();
            setData(res);
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

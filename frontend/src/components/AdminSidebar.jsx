import React from 'react'
import styles from '.././pages/admin/AdminSidebar.module.css'

const AdminSidebar = ({handleChange}) => {
  return (
    <div className={styles.container}>
      <button onClick={()=>handleChange("doctor")}>Doctor</button>
      <button onClick={()=>handleChange("patients")}>Patients</button>
    </div>
  )
}

export default AdminSidebar

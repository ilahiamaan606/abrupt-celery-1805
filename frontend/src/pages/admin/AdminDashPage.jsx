import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import AdminDashMain from '../../components/AdminDashMain'

const AdminDashPage = () => {
    const [dataType, setDataType] = useState("doctor")
    const handleChange = (type) => {
        setDataType(type)
    }
    return (
        <div className='dashboard'>
            <AdminSidebar handleChange={handleChange}/>
            <AdminDashMain type={dataType}/>
        </div>
    )
}

export default AdminDashPage
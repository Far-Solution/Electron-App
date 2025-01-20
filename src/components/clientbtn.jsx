import { Typography } from 'antd'
import React from 'react'

const { Title } = Typography

const Clientbtn = ({ icon, name }) => {
    return (
        <div style={{ width: '150px', height: '150px', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#37373F', cursor: 'pointer' }} >
            <div>{icon}</div>
            <Title level={4} className='!text-white'>{name}</Title>
        </div>
    )
}

export default Clientbtn
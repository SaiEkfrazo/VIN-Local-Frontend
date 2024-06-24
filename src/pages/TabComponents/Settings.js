import React ,{useMemo, useState} from 'react';
import {Button, Select ,Space, Card, Col, Row ,ColorPicker, Form, Input, Radio, notification, Descriptions } from 'antd';
import { Switch } from 'antd';
import axios from "axios";

import {  EditOutlined} from '@ant-design/icons';


const Alerts = () => {
  const [api, contextHolder] = notification.useNotification();

  // COLOR PICKER USESTATE
  const [color, setColor] = useState("#561ecb");

// FORM STATE
  const [form] = Form.useForm();

// State Values
const [data,setData] = useState();

  // POST METHOD FOR SENDING COLOR CODE
  const handlePost = (param)=>{
    console.log(data)
if(data === '' || data === undefined || data === null){
  return (
    api.open({
      message: 'Please Fill out required Fields',
      placement:'top',
           })
  )
}
    const payload = {
      "name": data,
      "color_code": handleChange
    }
    
    const PostData = async()=>{
      const res = await axios.post(`http://143.110.184.45:8100/${param}/`,payload)
      try{
        api.open({
          message: `${param} created`,
          placement:'top',
               });
      }
      catch(err){
        console.log(err)
      }

    }
    PostData()
  }


const handleChange = useMemo(
  ()=>(typeof color === "string" ? color:color?.toHexString()),
  [color],
);
console.log(data)
  return (
<>
{contextHolder}
<Row gutter={24} style={{display:'flex',justifyContent:'space-between'}}>
<Col span={9} > 
<h5 style={{fontWeight:650}}>User Creation</h5>
</Col>
<Col span={3}  >

<Button type="primary" style={{width:'100%',padding:'0'}} danger>
User Creation
    </Button>   </Col>
</Row>
<Row gutter={24} style={{display:'flex',flexDirection:'column',gap:'2rem',margin:'2rem'}} >
  <Col span={16} style={{display:'flex',justifyContent:'space-between'}}>
<div className="">
  <h6>Email Id</h6>
  <h6>developer@mail.com</h6>
</div>
<div className="">
<h6>Mobile Number</h6>
  <h6>987654310</h6>
</div>
<div className="">
<h6>Password</h6>
  <h6>12345</h6>
</div>
  </Col>
  <Col span={9}><h6 style={{fontWeight:650}}>Users</h6></Col>
  <Col span={16} style={{display:'flex',justifyContent:'space-between'}}>
  <div className="">
  <h6>Email Id</h6>
  <h6>developer@mail.com</h6>
</div>
<div className="">
<h6>Mobile Number</h6>
  <h6>987654310</h6>
</div>
<div className="">
<h6>Password</h6>
  <h6>12345</h6>
</div>
  </Col>
</Row>
<Row style={{display:'flex',gap:'2rem',flexDirection:'column',marginTop:'1rem'}}>
  <Col style={{display:'flex',alignItems:'center' ,gap:'1rem'}}>
  <h5 style={{fontWeight:650,marginBottom:0}}>Send email notification</h5>
  <Switch defaultChecked />
  </Col>
  <Col style={{display:'flex',alignItems:'center' ,gap:'1rem'}}>
  <h5 style={{fontWeight:650,marginBottom:0}}>Send sms notification</h5>
  <Switch defaultChecked />

  </Col>
</Row>
</>
  )
}

export default Alerts
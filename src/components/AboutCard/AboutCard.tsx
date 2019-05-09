import React from 'react';
import {
  Skeleton, Switch, Card, Icon, Avatar, Row, Button
} from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = Card;


const iconWithLink = (icon:string, link:string) => (
  <Link to={link}>
    <Icon type={icon}/>
  </Link>
)


export default () =>{

  return (
    <>
      <Card 
        style={{ width: 350 }} 
        loading={false}
        actions={[
          iconWithLink("github", "/github"),
          iconWithLink("linkedin", "/linkedin"),
          iconWithLink("mail", "/email"),
          iconWithLink("audit", "/resume"),
        ]}
      >
        <Meta
          avatar={<Avatar src="https://avatars1.githubusercontent.com/u/8227297" size={100} />}
          title="Arun Woosaree"
          description="4th Year Computer Software Engineering Co-Op Student at the University of Alberta"
        />
      </Card>


      </>

    );
}
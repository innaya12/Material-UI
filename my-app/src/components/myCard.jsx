import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const MyCard = () =>{
  return (
    <Card >
      <title>nnnnnn</title>
      <CardContent >
        <Typography>
          title
        </Typography>        
        <Button>Button1</Button>
        <span>12345</span>
        <Button>Button2</Button>
      </CardContent>
    </Card>
  );
}
export default MyCard;
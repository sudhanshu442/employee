import React,{useEffect,useState} from 'react'
import Card from './card';
import {withStyles} from "@mui/styles";
const styles={
  margin:'0',
  padding:'0',
  boxSizing:'border-box',
  scrollBehavior: 'smooth',
  fontFamily:'Roboto',
  home:{
    display:'flex',
    justfiyContent:'space-between',

  },
}
const home = ({classes}) => {
  return (
    <>
        <div className={classes.home}>
          <Card/>
          <br/>

        </div>
    </>
  )
}

export default withStyles(styles)(home);
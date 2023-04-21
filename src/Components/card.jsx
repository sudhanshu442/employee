import React,{useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import {withStyles} from "@mui/styles";
import {Table, TableRow,TableHead,TableCell,TableBody } from '@mui/material';
// import Db from  '../Database/db.json';
const styles={
  card:{
    margin:'20px',
  }
}
const initialValues={
  title:'',
  body:'',
}
function card({classes}) {
  const [isEditing, setIsEditing]=useState(false);
  const [user,setUser]=useState(initialValues);
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('db.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        //  console.log(myJson);
        setData(myJson);
      });
  }
  useEffect(()=>{
    getData();
  },[])
  const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
   const handleEdit=(item)=>{
    setUser(item);
      setIsEditing(true);
   }
   const handleSave=()=>{
     setIsEditing(false);
   }
   const handleReset=()=>{
    setUser(initialValues);
    setIsEditing(false);


   }
  return (
    <>
  { data && data.length>0 &&
      data.map((item, index) => {
                  return ( 
                     <div key={index}>
                    <Card className={classes.card} sx={{ minWidth: 150 }}>
                      <CardContent>
                        <Table>
                          <TableHead className="th">
                            <TableRow>
                              <TableCell>Name</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow key={index}>
                              <TableCell value={user.title}>{item.title}</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Edit</Button>
                      </CardActions>
                      {/* {isEditing && (
              <CardContent>
                <Table>
                  <TableHead className="th">
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Body</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key={user.id}>
                      <TableCell>
                        <input type="text" name="title" value={user.title} onChange={onValueChange} />
                      </TableCell>
                      <TableCell>
                        <input type="text" name="body" value={user.body} onChange={onValueChange} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <CardActions>
                  <Button size="small" onClick={handleSave}>Save</Button>
                  <Button size="small" onClick={handleReset}>Reset</Button>
                </CardActions>
              </CardContent>)} */}
                    </Card>
                  </div>
                  )})
                   
                  
}
                  </>
                  
)
  
}           

export default withStyles(styles)(card)
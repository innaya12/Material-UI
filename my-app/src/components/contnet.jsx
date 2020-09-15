import { Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
import MyCard from './card';
import list from './constants'

// const useStyles = makeStyles({
//     root: {
//         height: 100,
//     },
//   });


// const Content = () =>{
//     // const classes = useStyles();
//     const getData = (dataList) => {
//         return (
//             <Grid item sx={12} sm={4} >
            
//             <MyCard {...dataList}/>
//             </Grid>

//         ) 
//     }
//     return (
//         <Grid container spacing={2 }>
//                 {list.map(dataList => getData(dataList))}

//         </Grid>
//     );
// };
// export default Content;


const Content = () =>{
    // const classes = useStyles();

    return (
        <Grid container spacing={2 }>
            <Grid item sx={12} sm={4} >
                <MyCard title ="bla bla" width="100"/>
            </Grid>
            <Grid item sx={12} sm={4} >
                <MyCard title ="sdfdfdsfs bla" />
            </Grid>
            <Grid item sx={6} sm={2} >
                <MyCard title ="bla qwwe" width="200"/>
            </Grid> 
            <Grid item sx={6} sm={2}>
                <MyCard title ="cvcxvxc bla" width="300"/>
            </Grid> 


            <Grid item sx={12} sm={4}>
                <MyCard/>
            </Grid>
            <Grid item sx={12} sm={4}>
                <MyCard/>
            </Grid>
            <Grid item sx={12} sm={4} >
                <MyCard/>
            </Grid> 

            <Grid item sx={12} sm={6}>
                <MyCard/>
            </Grid>
            <Grid item sx={12} sm={6}>
                <MyCard/>
            </Grid>
     

        </Grid>
    );
};
export default Content;
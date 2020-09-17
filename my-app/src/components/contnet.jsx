import React from 'react';
import { Grid } from '@material-ui/core';
import MyCard from './myCard';
import Table from './table';
import Graph from './graph';

const Content = () =>{

    return (
        <Grid container spacing={2}>
            <Grid item sx={12} sm={4} >
                <Table />
            </Grid>
            <Grid item sx={12} sm={4} >
                <Table />
            </Grid>
            <Grid item sx={6} sm={2} >
                <Graph />
                <Graph />
            </Grid> 
            <Grid item sx={6} sm={2}>
                <Graph />
                <Graph />
            </Grid> 
            <Grid item sx={12} sm={4}>
                <Table />
            </Grid>
            <Grid item sx={12} sm={4}>
                <MyCard/>
                <MyCard/>

            </Grid>
            <Grid item sx={12} sm={4} >
                <Graph/>
            </Grid> 
            <Grid item sx={12} sm={6}>
                <Table />
            </Grid>
            <Grid item sx={12} sm={6}>
                <Table />
            </Grid>
        </Grid>
    );
};
export default Content;
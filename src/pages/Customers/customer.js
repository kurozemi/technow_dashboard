import React, { useState, useEffect } from 'react'
import { 
    Box,
    Container,
    Grid,
    Typography
} from '@mui/material'
import SearchBar from '../../components/SearchBar/searchBar'
import SortByTime from '../../components/SortByTime/sortByTime'
import Pagination from '../../components/Pagination/pagination'
import color from '../../constant/color'
import AreaChart from '../../components/AreaChart/areaChart'
import SortPurchased from './sortPurchased'
import TableUser from './tableUser'

// import axios from 'axios'
// import { BASE_API_URL, TEST_API_URL } from '../constant/string';

// import { getUserListAPI } from '../../api/userApi'

const dataAreaChart = [
    {
        month: 'Jan',
        users: 70,
    },
    {
        month: 'Feb',
        users: 180,
    },
    {
        month: 'Mar',
        users: 200,
    },
    {
        month: 'Apr',
        users: 415,
    },
    {
        month: 'May',
        users: 390,
    },
    {
        month: 'Jun',
        users: 490,
    },
];

const dataTable = [
    {
        rank: 1,
        username: 'Tri Minh Quan',
        amount: 12221000
    },
    {
        rank: 2,
        username: 'minhdaongtr',
        amount: 102000000
    },
    {
        rank: 3,
        username: 'phutruong123',
        amount: 79000000
    },
    {
        rank: 4,
        username: 'cuongvl',
        amount: 47000000
    },
    {
        rank: 5,
        username: 'longtran',
        amount: 18221000
    },
    {
        rank: 6,
        username: 'vanana111',
        amount: 10221000
    },
    {
        rank: 7,
        username: 'chelinh',
        amount: 9221000
    },
    {
        rank: 8,
        username: 'chelinh',
        amount: 9221000
    },
    {
        rank: 9,
        username: 'chelinh',
        amount: 9221000
    },
    {
        rank: 10,
        username: 'chelinh',
        amount: 9221000
    }
];

const Customers = () => {
    const [sortTime, setSort] = useState("month");

    return (
        <Box
            style={{
                height: "111vh",
                background: color.background
            }}
        >
            <Container sx={{ py: "52px"}}>
                <Box style={{display: "flex", justifyContent: "space-between"}}>
                    <Grid container spacing={2}>
                        <Grid item lg={4}>
                            <Typography style={{ fontSize: "32px", fontWeight: 700, textAlign: "left", marginBottom: "1rem"}}>User Statistic</Typography>
                        </Grid>
                        <Grid item lg={2}>
                            <SortByTime onChangeValue={value => setSort(value)} />
                        </Grid>
                    </Grid>


                </Box>     
                <Grid container spacing={10}>
                    <Grid item lg={6}>

                        <Box style={{marginBottom: "2rem", background: color.white, borderRadius: "15px", paddingLeft: "45px"}}>
                            <Box>
                                <Typography style={{ fontSize: "22px", fontWeight: 500, textAlign: "center", paddingTop: "10px", paddingBottom: "10px"}}>Guest Visited</Typography>
                            </Box>
                            <AreaChart 
                                data={dataAreaChart}
                                xAxisName="month"
                                yAxisName="users"
                                yAxisCount={6}
                                width={430}
                                height={270}
                                lineColor={color.yellow}
                                areaColor={color.lightYellow}
                                style={{ fontSize: "13px"}}
                            />
                        </Box>
                        
                        <Box style={{marginBottom: "2rem", background: color.white, borderRadius: "15px", paddingLeft: "45px"}}>
                            <Box>
                                <Typography style={{ fontSize: "22px", fontWeight: 500, textAlign: "center", paddingTop: "10px", paddingBottom: "10px"}}>Active Users</Typography>
                            </Box>
                            <AreaChart
                                data={dataAreaChart}
                                xAxisName="month"
                                yAxisName="users"
                                yAxisCount={6}
                                width={430}
                                height={270}
                                lineColor={color.green}
                                areaColor={color.lightGreen}
                                style={{ fontSize: "13px"}}
                            />
                        </Box>
                        
                    </Grid>
                    <Grid item lg={6}>
                        <TableUser sortTime={sortTime}/>
                    </Grid>
                </Grid>
            </Container>

            

        </Box>
    )
}

export default Customers
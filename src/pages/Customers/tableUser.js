import {
    Box,
    Container,
    Grid,
    Typography,
    Divider
} from '@mui/material'
import color from '../../constant/color'
import SearchBar from '../../components/SearchBar/searchBar'
import Pagination from '../../components/Pagination/pagination'
import SortPurchased from './sortPurchased'
import React, { useState, useEffect } from 'react'

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
const TableUser = ({ sortTime = "month" }) => {

    const [userList, setUserList] = useState(dataTable);
    const [totalPage, setTotalPage] = useState(3);
    const [page, setPage] = useState(1);
    const [purchasedSort, setPurchasedSort] = useState("Top Purchased");
    const [search, setSearch] = useState("");

    const itemsPerPage = 5;
    const offset = (page - 1) * itemsPerPage;

    useEffect(() => {
        setTotalPage(3)
    }, [])

    useEffect(() => {
        setUserList(dataTable.slice(offset, offset + itemsPerPage))
    }, [page, sortTime]);

    // const [userList, updateUserList] = useState({"isLoading": true});
    // useEffect(() => {
    //     getUserListAPI().then((response) => {
    // 		if (response.data.success === true) {
    // 			updateUserList({ "isLoading": false, data: response.data.data })
    // 			console.log("userList ", response.data)
    // 		}
    //     })
    // }, [])

    // const formatPrice = (value) => {
    // 	return new Intl.NumberFormat('vi-VN', {
    // 		style: 'currency',
    // 		currency: '₫',
    // 	}).format(value)
    // }

    return (
        <Box style={{ display: "block", background: color.white, paddingTop: "20px", borderRadius: '15px' }}>
            <Container>
                <Box>
                    <SearchBar
                        width='100%'
                        placeholder="Search for username..."
                        text={search}
                        setText={setSearch} />
                </Box>
            </Container>
            <Box style={{ paddingLeft: "50px", paddingTop: "20px", paddingBottom: "20px" }}>
                <Grid container spacing={1}>
                    <Grid item lg={3}>
                        <Typography style={{ fontWeight: 600 }}>Rank</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography style={{ fontWeight: 600 }}>Username</Typography>
                    </Grid>
                    <Grid item lg={5}>
                        <SortPurchased onChangeValue={setPurchasedSort} />
                    </Grid>
                </Grid>
                <Divider style={{ marginTop: '10px' }} />
            </Box>
            {userList.map(user =>
                <Box style={{ paddingLeft: "50px", paddingTop: "15px", paddingBottom: "10px" }}>
                    <Grid container spacing={1}>
                        <Grid item lg={3}>
                            <Typography>{user.rank}</Typography>
                        </Grid>
                        <Grid item lg={4}>
                            <Typography>{user.username}</Typography>
                        </Grid>
                        <Grid item lg={5}>
                            <Typography>{user.amount}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            )}
            <Box style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '10px' }}>
                <Pagination page={page} maxPages={totalPage}
                    onBack={() => {
                        if (page > 1)
                            setPage(page - 1)
                    }}
                    onForward={() => {
                        if (page < totalPage)
                            setPage(page + 1)
                    }} />
            </Box>
        </Box>
    )
}

export default TableUser
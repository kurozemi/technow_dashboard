import React from 'react'

import { Typography, Box, Button } from '@mui/material';
import useStore from "./appStore";
const UserInfo = () => {

    const { username, password } = useStore(state => state.userInfo);
    const logOut = useStore(state => state.logout);

    return (
        <Box>
            {
                username != ""
                &&
                <Box>
                    <Typography>
                        <b>Username: </b>{username}
                    </Typography>

                    <Typography>
                        <b>Password: </b>{password}
                    </Typography>

                    <Button
                        onClick={logOut}
                        variant='outlined'
                        color='error'
                    >
                        Logout
                    </Button>
                </Box>


            }
        </Box>
    )
}

export default UserInfo;
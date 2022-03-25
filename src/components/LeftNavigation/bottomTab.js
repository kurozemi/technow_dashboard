import React from 'react'
import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material';
// import Button from '@mui/material/ButtonBase';


import styles from "./leftNavigation.style"
import {
    VersionIc,
    LogOutIc,
} from "../../constant/icon"

const BottomTab = () => {
    return (
        <Box
            sx={styles.bottomBox}>
            <Box
                sx={styles.bottomIc}
            >
                <img src={VersionIc} width={38} height={38} />

            </Box>

            <Button
                sx={styles.bottomIc}
                color={"error"}
            >
                <img src={LogOutIc} width={20} height={20} />
            </Button>
        </Box>
    )
}

export default BottomTab
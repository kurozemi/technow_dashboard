import React, { useState } from 'react'
import { Select, FormControl, MenuItem, styled, InputBase, Box } from '@mui/material'

const MyInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
        borderWidth: 0,
        paddingTop: 0,
        'aria-label': 'Without label',
    },
}))

const sortList = ['Top Purchased', 'Least Purchased']

const SortPurchased = ({ value, onChangeValue }) => {

    const handleChange = (event) => {
        const result = event.target.value
        onChangeValue && onChangeValue(result)
    }

    return (
        <Box sx={{display: 'flex', justifyContent: 'end'}}>
            <FormControl sx={styles.formControl}>
                <Select
                    sx={styles.select}
                    value={value}
                    onChange={handleChange}
                    input={<MyInput />}
                    MenuProps={{ disableScrollLock: true }}
                >
                    {sortList.map((sort) => (
                        <MenuItem value={sort} key={sort}>{sort}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

const styles = {
    title: {
        color: '#848484',
    },
    formControl: {
        boxSizing: 'border-box',
        height: "100%",
        width: "160px",
        py: 0,
    },
    select: {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '17px',
    },
}

export default SortPurchased
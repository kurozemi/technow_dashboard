import React from 'react'
import color from '../../constant/color'
import { Box, height } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import { GreenUpArrIc, RedDownArrIc } from '../../constant/icon'

import SaleCommonCard from '../SaleCommonCard/SaleCommonCard'
import styles from './CardNameSeller.style'

const CatalogPercentage = [1, 4, 1, 4]
const NamePercentage = [1, 9]
const CardNameSeller = ({ rank, name, grow, payment, isName = false }) => {
    const rankcolor = color["R" + rank]
    const flexpercentage = isName ? NamePercentage : CatalogPercentage
    const growImg = grow > 0 ? GreenUpArrIc : RedDownArrIc
    if (grow < 0) grow = grow * -1


    return (
        <Box sx={{ ...styles.flex, px: 3, py: "14px" }}>
            <Box sx={{
                width: 36,
                height: 36,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: rankcolor,
                mx: 1,
                display: "flex",
                // flex: flexpercentage[0]
            }}>
                <Typography sx={{
                    textAlign: 'center',
                    color: color.white,
                    fontWeight: "600",
                    fontSize: '17px',
                    my: 0,
                }}>
                    {rank}
                </Typography>

            </Box>



            <Typography sx={{ ...styles.pNameSlider, flex: flexpercentage[1], }}>
                {name}
            </Typography>

            {isName
                ? <></>
                :
                [<Box sx={{ ...styles.flex, flex: flexpercentage[2], justifyContent: 'center', ml: "2px" }}>
                    {rank < 4
                        &&
                        [<img src={growImg} style={{ height: '13px', marginTop: "2px" }} alt="" />,
                        <p style={{ color: growImg == GreenUpArrIc ? color.green : color.red, fontWeight: 500, margin: 0 }}>{grow}</p>]
                    }


                </Box>,
                <Box sx={{
                    backgroundColor: "#F0F7FF",
                    borderRadius: "5px", 
                    px: '12px', 
                    py: "6px",
                    marginLeft: "12px",
                }}>
                    <Typography sx={{ ...styles.money, }}>
                        {payment}
                    </Typography>
                </Box>


                ]
            }
        </Box>
    )
}
export default CardNameSeller;
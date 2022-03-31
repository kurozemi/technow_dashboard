import React from 'react'
import color from '../../constant/color'
import { borderRadius, Box, height, width } from '@mui/system'
import { Card, Typography, CardHeader, CardMedia, CardContent } from '@mui/material'
import { EyeIc, GreenUpArrIc, RedDownArrIc, GreenUpStonkIc, RedDownStonkIc } from '../../constant/icon'
import styles from './sales.style'
import CardItemSellerStock from '../../components/CardItemSellerStock/CardItemSellerStock'
import SaleCommonCard from '../../components/SaleCommonCard/SaleCommonCard'
import CardProductSeller from '../../components/CardProductSeller/CardProductSeller'
import CardNameSeller from '../../components/CardNameSeller/CardNameSeller'
import CustomLineChart from '../../components/LineChart/lineChart'
let img = "https://product.hstatic.net/1000026716/product/45124_macbook_pro_14_m1_grey_ha4_5fced1b51ace4acd8825d494e0b55ec3.jpg"
let catalog = [['laptoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaap', '2', '0000000000D'], ['laptop', '2', '10000'], ['laptop', '2', '10000'], ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalaptop', '2', '10000'], ['laptop', '2', '10000']]
let customers = ['Naasdasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadasam', 'Nam', 'Nam', 'Nam', 'Nam']
let product = ['mac', img, "121212"]
let products = [['maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac', img, "121212"], ['mac', img, "121212"], ['mac', img, "121212"], ['mac', img, "121212"]]

const dataLineChart = [
    {
        month: 'Jan',
        income: 25,
    },
    {
        month: 'Feb',
        income: 28,
    },
    {
        month: 'Mar',
        income: 23,
    },
    {
        month: 'Apr',
        income: 37,
    },
    {
        month: 'May',
        income: 40,
    },
];
const Sales = () => {
    return (

        <Box sx={{ ...styles.flex, justifyContent: 'space-around', backgroundColor: color.background, ml: '84px' }}>
            <Box sx={styles.box}>
                <SaleCommonCard title='Best seller'>
                    <CardItemSellerStock productImg="https://product.hstatic.net/1000026716/product/45124_macbook_pro_14_m1_grey_ha4_5fced1b51ace4acd8825d494e0b55ec3.jpg" isViewed={false} content="1000000 đ" stonkImg={GreenUpStonkIc} percentage="51"></CardItemSellerStock>
                </SaleCommonCard>



                <SaleCommonCard title='Most viewed product'>
                    <CardItemSellerStock productImg="https://product.hstatic.net/1000026716/product/45124_macbook_pro_14_m1_grey_ha4_5fced1b51ace4acd8825d494e0b55ec3.jpg" isViewed={true} content="1000000 đ" contentImg={EyeIc} stonkImg={GreenUpStonkIc} percentage="55"></CardItemSellerStock>
                </SaleCommonCard>
                <SaleCommonCard title='Most profitable categories'>
                    {
                        catalog.map((cata, rank) =>
                            <CardNameSeller name={cata[0]} rank={rank + 1} grow={cata[1]} growImg={GreenUpArrIc} payment={cata[2]}></CardNameSeller>
                        )
                    }
                </SaleCommonCard>

            </Box>


            <Box sx={styles.box}>

                <SaleCommonCard title="Top selling products">
                    {
                        products.map((product) =>
                            <CardProductSeller name={product[0]} productImg={product[1]} payment={product[2]} ></CardProductSeller>
                        )
                    }
                </SaleCommonCard>
                <SaleCommonCard title='Total sales'>

                    <p style={{marginLeft: 10}}>million VND</p>
                    <CustomLineChart
                        
                        data={dataLineChart}
                        xAxisName="month"
                        yAxisName="income"
                        yAxisCount={6}
                        width={370}
                        height={300}
                        lineColor={color.red}
                    />




                </SaleCommonCard>
            </Box>
            <Box sx={styles.box}>
                <SaleCommonCard title="Top Customer">
                    {
                        customers.map((customer, rank) =>
                            <CardNameSeller rank={rank + 1} name={customer} isName={true} ></CardNameSeller>
                        )
                    }
                </SaleCommonCard>
            </Box>


        </Box>




    )
}

export default Sales
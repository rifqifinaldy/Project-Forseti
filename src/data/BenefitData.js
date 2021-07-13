import {IoShieldSharp, IoTrendingDownOutline ,IoBonfire, IoWater, IoRepeatOutline} from 'react-icons/io5';
import { FaDollarSign } from "react-icons/fa";

export const benefitData = [
    {
        id:"1",
        description: "Proteksi terhadap nilai aset.",
        icon: <IoShieldSharp color="#317481" fontSize="48px" />
    },
    {
        id:"2",
        description: "Hepyer Deflasi Dengan melakukan pembakaran token secara bertahap hingga 30% dari Jumlah Supply.",
        icon: <IoTrendingDownOutline color="#317481" fontSize="48px" />
    },
    {
        id:"3",
        description: "Pemberlakukan pajak sebanyak 12% apabila melakukan penjualan token.",
        icon: <FaDollarSign color="#317481" fontSize="48px"/>
    },
    {
        id:"4",
        description: "Auto Burn sebanyak 3% dan 2% hadiah kepada holder dari setiap transaksi penjualan yang terjadi.",
        icon: <IoBonfire color="#317481" fontSize="48px"/>
    },
    {
        id:"5",
        description: "Auto Liquidity Pool 3% dari setiap transaksi jual beli.",
        icon: <IoWater color="#317481" fontSize="48px"/>
    },
    {
        id:"6",
        description: "Pembelian Kembali (Buyback) Token secara berkala. Sebuah langkah besar untuk menjaga nilai aset token agar tetap memberikan keuntungan bagi pemengang token.",
        icon: <IoRepeatOutline color="#317481" fontSize="48px"/>
    },
]
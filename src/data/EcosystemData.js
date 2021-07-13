import {IoHeart, IoAlbums ,IoCard, IoLogoBitcoin, IoPeople , IoRepeatOutline, IoPodiumSharp} from 'react-icons/io5';
import { FaMobileAlt, FaMoneyCheckAlt, FaBitcoin  } from "react-icons/fa";

export const ecosystemData = [
    {
        id:"1",
        description: "Charity",
        icon: <IoHeart color="#317481" fontSize="48px" />
    },
    {
        id:"2",
        description: "Stacking",
        icon: <IoAlbums color="#317481" fontSize="48px" />
    },
    {
        id:"3",
        description: "Dex Swap",
        icon: <IoRepeatOutline color="#317481" fontSize="48px"/>
    },
    {
        id:"4",
        description: "E-Wallet Crypto With NFC",
        icon: <><FaMoneyCheckAlt color="#317481" fontSize="48px"/>
        <FaMobileAlt color="#317481" fontSize="48px"/>
              </>
        
    },
    {
        id:"5",
        description: "Payment Gateway with E-Crypto Card",
        icon: <><IoLogoBitcoin color="#317481" fontSize="48px"/> 
                <IoCard color="#317481" fontSize="48px"/></>
    },
    {
        id:"6",
        description: "Escrow Platform",
        icon: <IoPeople color="#317481" fontSize="48px"/>
    },
    {
        id:"7",
        description: "Real Forseti Blockchain for Life",
        icon: <FaBitcoin color="#317481" fontSize="48px"/>
    },
    {
        id:"8",
        description: "IPO",
        icon: <IoPodiumSharp color="#317481" fontSize="48px"/>
    },
]
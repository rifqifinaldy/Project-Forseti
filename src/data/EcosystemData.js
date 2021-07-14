import {IoHeart, IoAlbums ,IoCard, IoLogoBitcoin, IoGameController, IoPeople , IoRepeatOutline, IoPodiumSharp} from 'react-icons/io5';
import { FaMobileAlt, FaMoneyCheckAlt, FaBitcoin } from "react-icons/fa";
import forsetiNonCircle from '../images/icon/logo-non-circle-img.png';
import blockchainImage from '../images/about/blockchain3.svg';
import Herologo from '../images/logo/logo-img.png';

export const ecosystemData = [
    {
        id:"1",
        description: "Charity",
        icon: <IoHeart color="#317481" fontSize="72px" />
    },
    {
        id:"2",
        description: "Stacking",
        icon: <IoAlbums color="#317481" fontSize="72px" />
    },
    {
        id:"3",
        description: "Dex Swap",
        icon: <IoRepeatOutline color="#317481" fontSize="72px"/>
    },
    {
        id:"4",
        description: "E-Wallet Crypto With NFC",
        icon: <><FaMoneyCheckAlt color="#317481" fontSize="72px"/>
        <FaMobileAlt color="#317481" fontSize="72px"/>
              </>
        
    },
    {
        id:"5",
        description: "Payment Gateway with E-Crypto Card",
        icon: <><img src={forsetiNonCircle} style={{width: '60px'}}/> 
                <IoCard color="#317481" fontSize="72px"/></>
    },
    {
        id:"6",
        description: "Escrow Platform",
        icon: <IoPeople color="#317481" fontSize="72px"/>
    },
    {
        id:"7",
        description: "Game Platform",
        icon: <IoGameController color="#317481" fontSize="72px"/>
    },
    {
        id:"8",
        description: "Real Forseti Blockchain for Life",
        icon: <><img src={forsetiNonCircle} style={{width: '60px'}}/><img src={blockchainImage} style={{width: '72px'}}/>
        </>
    },
    {
        id:"9",
        description: "IPO",
        icon: <IoPodiumSharp color="#317481" fontSize="72px"/>
    },
]
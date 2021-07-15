import {IoHeart, IoAlbums ,IoCard, IoLogoBitcoin, IoGameController, IoPeople , IoRepeatOutline, IoPodiumSharp} from 'react-icons/io5';
import { FaMobileAlt, FaMoneyCheckAlt, FaBitcoin } from "react-icons/fa";
import forsetiNonCircle from '../images/icon/logo-non-circle-img.png';
import blockchainImage from '../images/about/blockchain3.svg';

export const ecosystemData = [
    {
        id:"1",
        animation : 'fade-up',
        duration : '1000',
        description: "Charity",
        icon: <IoHeart color="#317481" fontSize="72px" />
    },
    {
        id:"2",
        animation : 'fade-up',
        duration : '2000',
        description: "Stacking",
        icon: <IoAlbums color="#317481" fontSize="72px" />
    },
    {
        id:"3",
        animation : 'fade-up',
        duration : '3000',
        description: "Dex Swap",
        icon: <IoRepeatOutline color="#317481" fontSize="72px"/>
    },
    {
        id:"4",
        animation : 'fade-up',
        duration : '1000',
        description: "E-Wallet Crypto With NFC",
        icon: <><FaMoneyCheckAlt color="#317481" fontSize="72px"/>
        <FaMobileAlt color="#317481" fontSize="72px"/>
              </>
        
    },
    {
        id:"5",
        animation : 'fade-up',
        duration : '2000',
        description: "Payment Gateway with E-Crypto Card",
        icon: <><img src={forsetiNonCircle} alt="Forseti" style={{width: '60px'}}/> 
                <IoCard color="#317481" fontSize="72px"/></>
    },
    {
        id:"6",
        animation : 'fade-up',
        duration : '3000',
        description: "Escrow Platform",
        icon: <IoPeople color="#317481" fontSize="72px"/>
    },
    {
        id:"7",
        animation : 'fade-up',
        duration : '1000',
        description: "Game Platform",
        icon: <IoGameController color="#317481" fontSize="72px"/>
    },
    {
        id:"8",
        animation : 'fade-up',
        duration : '2000',
        description: "Real Forseti Blockchain for Life",
        icon: <><img src={forsetiNonCircle} style={{width: '60px'}}/><img src={blockchainImage} alt="Forseti" style={{width: '72px'}}/>
        </>
    },
    {
        id:"9",
        animation : 'fade-up',
        description: "IPO",
        duration : '3000',
        icon: <IoPodiumSharp color="#317481" fontSize="72px"/>
    },
]
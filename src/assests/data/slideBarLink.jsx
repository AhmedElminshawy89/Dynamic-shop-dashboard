import {AiOutlineHome,AiOutlineHeart} from 'react-icons/ai';
import {BsWindowStack,BsBagCheck} from 'react-icons/bs';

const NavListData = [
    {
        _id:1,
        target:'home',
        name:'Home',
        icon:<AiOutlineHome/>,
        active:true,
    },
    {
        _id:2,
        target:'categories',
        name:'Categories',
        icon:<BsWindowStack/>,
        active:false,
    },
    {
        _id:3,
        target:'library',
        name:'My Library',
        icon:<AiOutlineHeart/>,
        active:false,
    },
    {
        _id:4,
        target:'bag',
        name:'My Bag',
        icon:<BsBagCheck/>,
        active:false,
    }
]

export default NavListData;
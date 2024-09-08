import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.css';

export default function SearchIcon({value}) {
    return (
        <div className='search-icon relative basis-1/5 flex items-center bg-white h-2/3'>
                <FmdGoodIcon className=" ml-2 mr-3"/>
                <div className='basis-2/3'>
                    <input type='text' 
                    value={}
                    name='origin'
                    className='w-full outline-none'
                    onChange={handleChange}
                    placeholder='Origin'
                    autoComplete='off'></input>
                </div>
                <ExpandMoreIcon 
                className=' absolute right-2'
                onClick={toggleArrow}
                />
        </div>
    );
}
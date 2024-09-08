import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.css';

export default function SearchBox({ name, value, handleChange }) {
    function toggleArrow() 
    {
        console.log('Toggle');
    }

    return (
        <div className='search-icon relative basis-1/5 flex items-center bg-white h-2/3'>
                <FmdGoodIcon className=" ml-2 mr-3"/>
                <div className='basis-2/3'>
                    <input type='text' 
                    value={value}
                    name={name}
                    className='w-full outline-none'
                    onChange={handleChange}
                    placeholder={name}
                    autoComplete='off'></input>
                </div>
                <ExpandMoreIcon 
                className=' absolute right-2'
                onClick={toggleArrow}
                />
        </div>
    );
}
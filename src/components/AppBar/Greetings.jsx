import { useSelector } from 'react-redux';
import style from './style.module.css';
import { fetchLogout } from '../../redux/operation';
import { useDispatch } from 'react-redux';

export function Greetings() {
    const dispatch = useDispatch();
    const name = useSelector((state => state.userData.name));
    const token = useSelector(state => state.token);
    
    const handleClick = () => dispatch(fetchLogout(token));
    
    return <div
        className={style.innerContainerRight}
    >
        <span
        className={style.firstText}
        >Hi {name}</span>
        
        <button
            onClick={handleClick}
            className={style.button}
            type="button">
            Logout
    </button>
    </div>
}
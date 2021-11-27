import style from './style.module.css';
import { NavLink } from "react-router-dom";

export function Navigation() {
    return <div className={style.innerContainerRight}>
                
                <NavLink
                    className={style.firstText}                   
                    to="/register">Registration
                </NavLink>

                <NavLink
                    className={style.secondText}
                    
                    to="/login">Login
                </NavLink>
        </div>
}
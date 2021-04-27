import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import DialogIthem from "../Dialogs/DialogIthem/DialogIthem";
import StoreContext from "../../StoreContext";

const Navbar = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let friendsNavbarFooter = state.dialogsPage.dialogs.slice(0, 3)
                        .map(d => <DialogIthem id={d.id} name={d.name} url={d.url}/>);
                    return (
                        <nav className={s.nav}>
                            <div className={s.heaDitHem + ' ' + s.active}>
                                <div className={s.itHem}>
                                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                                </div>
                                <div className={s.itHem}>
                                    <NavLink to="/dialogIthem" activeClassName={s.active}>Messages</NavLink>
                                </div>
                                <div className={s.itHem}>
                                    <NavLink to="/news" activeClassName={s.active}>News</NavLink>
                                </div>
                                <div className={s.itHem}>
                                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                                </div>
                                <div className={s.itHem}>
                                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                                </div>
                                <div className={s.itHem} className={s.servitHem1}>
                                    <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
                                </div>
                                <div className={s.itHem} className={s.servitHem2}>
                                    <NavLink to="/friends" activeClassName={s.active}>{friendsNavbarFooter}</NavLink>
                                </div>

                            </div>
                        </nav>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}


export default Navbar;

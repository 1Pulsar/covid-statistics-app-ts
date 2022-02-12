import React, {useState} from "react";
import style from "./Header.module.css";
import siteLogo from "../../../images/siteLogo.png";
import searchLogo from "../../../images/searchLogo.svg"
import {actionType} from "../../common/commonTypes/commonReducerTypes";

type HeaderProps = {
    setSearchInputValueField: (searchInputField: string) => actionType,
    searchInputField: string
}

export const Header: React.FC<HeaderProps> = ({searchInputField, setSearchInputValueField}) => {

    const [localSearchInput, setLocalSearchInput] = useState('')

    const searchInputChanges = (event: any): void => {
        setLocalSearchInput(event.target.value)
    }

    const searchInputPressEnter = (event: any) => {
        if (event.key === "Enter") {
            setSearchInputValueField(localSearchInput)

        }
    }

    const searchInputClick = () => {
        setSearchInputValueField(localSearchInput)
    }

    return (
        <div className={style.headerContainer}>
            <div>
                <img src={siteLogo} alt={'Site covid logo'}/>
                <p>STATISTIC</p>
            </div>
            <input className={style.inputField} placeholder={'Search...'} value={localSearchInput}
                   onChange={searchInputChanges} onKeyDown={searchInputPressEnter}/>
            <img src={searchLogo} alt={'Search logo'} onClick={searchInputClick}/>
        </div>
    );
};
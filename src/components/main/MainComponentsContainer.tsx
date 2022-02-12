import React from "react";
import style from "./MainComponentsContainer.module.css"
import {Content} from "./Content/Content";
import {HeaderContainer} from "./Header/HeaderContainer";

export const MainComponentsContainer: React.FC = (props) => {
    return (
        <div className={style.main_container}>
            <HeaderContainer />
            <Content />
        </div>
    );
};
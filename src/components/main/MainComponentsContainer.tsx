import React from "react";
import style from "./MainComponentsContainer.module.css"
import {Header} from "./Header/Header";
import {Content} from "./Content/Content";

export const MainComponentsContainer: React.FC = (props) => {
    return (
        <div className={style.main_container}>
            <Header />
            <Content />
        </div>
    );
};
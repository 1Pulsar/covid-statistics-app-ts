import React from "react";
import preloaderGIF from "../../../../images/standartPreloader.gif";

export const Preloader: React.FC = (props) => {
    return (
        <img style={{height: '300px'}} src={preloaderGIF} alt={'Preloader'}/>
    );
};
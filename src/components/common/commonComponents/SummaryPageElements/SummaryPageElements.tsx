import React from "react";
import style from "./SummaryPageElements.module.css";

type SummaryPageElementPropsType = {
    isHead: boolean,
    number: number,
    Country: string,
    TotalConfirmed: number
};

export const SummaryPageElement: React.FC<SummaryPageElementPropsType> =
    ({isHead, number, Country, TotalConfirmed}) => {

        const elementWrapper: string =
            style.elementStyle + (isHead ? " " + style.headBackground : " " + style.countryBackground);

        const borderColor: string = isHead ? " " + style.headBorderColor : " " + style.countryBorderColor;

        return (
            <div className={elementWrapper}>
                <div className={style.commonBlock + " " + style.countyNumber}>
                    <p>{isHead ? "№" : number}</p>
                </div>
                <div className={style.elementBorder + " " + style.firstElementBorder + borderColor}/>
                <div className={style.commonBlock + " " + style.countryName}>
                    <p>{isHead ? "Country" : Country}</p>
                </div>
                <div className={style.elementBorder + " " + style.secondElementBorder + borderColor}/>
                <div className={style.commonBlock + " " + style.countryTotal}>
                    <p>{isHead ? "TotalConfirmed" : TotalConfirmed}</p>
                </div>
            </div>
        );
    };
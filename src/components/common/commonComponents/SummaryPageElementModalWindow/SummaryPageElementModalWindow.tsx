import React from "react";
import style from "./SummaryPageElementModalWindow.module.css";
import totalConfirmedIcon from "../../../../images/totalConfirmedIcon.svg";
import totalDeathIcon from "../../../../images/totalDeathIcon.svg";
import totalRecoveredIcon from "../../../../images/totalRecoveredIcon.svg";

type SummaryPageElementModalWindowProps = {
    modalCountryName: string,
    modalTotalConfirmed: number,
    modalTotalDeath: number,
    modalTotalRecovered: number,
    toggleModalWindow: any
};

export const SummaryPageElementModalWindow: React.FC<SummaryPageElementModalWindowProps> =
    ({modalCountryName, modalTotalConfirmed, modalTotalDeath, modalTotalRecovered, toggleModalWindow}) => {

        const closeButtonEvent = (): void => {
            toggleModalWindow(false);
        };

        return (
            <div className={style.modalWindowWrapper}>
                <p>{modalCountryName}</p>
                <div className={style.totalInfoString}>
                    <div>
                        <img src={totalConfirmedIcon} alt={'Total confirmed icon'}/>
                        <p>Total confirmed</p>
                    </div>
                    <p>{modalTotalConfirmed}</p>
                </div>
                <div className={style.totalInfoString}>
                    <div>
                        <img src={totalDeathIcon} alt={'Total death icon'}/>
                        <p>Total death</p>
                    </div>
                    <p>{modalTotalDeath}</p>
                </div>
                <div className={style.totalInfoString}>
                    <div>
                        <img src={totalRecoveredIcon} alt={'Total recovered icon'}/>
                        <p>Total recovered</p>
                    </div>
                    <p>{modalTotalRecovered}</p>
                </div>
                <div className={style.closeWindowButton} onClick={closeButtonEvent}>OK</div>
            </div>
        )
    };
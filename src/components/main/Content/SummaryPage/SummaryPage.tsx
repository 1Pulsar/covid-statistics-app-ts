import React, {useEffect, useState} from "react";
import {CountryType} from "../../../common/commonTypes/summaryResponseTypes";
import {SummaryPageElement} from "../../../common/commonComponents/SummaryPageElements/SummaryPageElements";
import {Preloader} from "../../../common/commonComponents/Preloader/Preloader";
import style from "./SummaryPage.module.css"
import {filterCountriesArray} from "../../../common/commonFunctions/summaryPageFunctions";
import {ModalWindow} from "../../../common/commonComponents/ModalWindow/ModalWindow";
import {SummaryPageElementModalWindow} from "../../../common/commonComponents/SummaryPageElementModalWindow/SummaryPageElementModalWindow";

type summaryPagePropsType = {
    countries: Array<CountryType>,
    searchInputField: string,
    setCountriesThunk: () => Promise<void>
};

export const SummaryPage: React.FC<summaryPagePropsType> =
    ({countries, searchInputField, setCountriesThunk}) => {

        const [isFetching, toggleFetch] = useState(true);

        const [filteredCountries, toggleFilter] = useState(countries);

        const [modalWindowIsActive, toggleModalWindow] = useState(false);

        const [[modalCountryName, modalTotalConfirmed, modalTotalDeath, modalTotalRecovered], changeModalWindowInfo] = useState(['', 0, 0, 0]);

        useEffect(() => {
            setCountriesThunk().then(() => toggleFetch(false))
        }, []);

        useEffect(() => {
            toggleFilter(filterCountriesArray(searchInputField, countries));
        }, [searchInputField, countries]);

        const countryElements = filteredCountries.map(
            (country, index) => <div><SummaryPageElement isHead={false} number={index + 1}
                                                         Country={country.Country}
                                                         TotalConfirmed={country.TotalConfirmed}
                                                         TotalDeath={country.TotalDeaths}
                                                         TotalRecovered={country.TotalRecovered}
                                                         key={index + 1}
                                                         toggleModalWindow={toggleModalWindow}
                                                         changeModalWindowInfo={changeModalWindowInfo}/></div>);

        const countryElementsIsFound = countryElements.length > 0 ? countryElements :
            <div className={style.noResult}>Result's not found</div>;

        if (isFetching) {
            return (
                <div className={style.mainWrapper}>
                    <Preloader/>
                </div>
            );
        } else {
            return (
                <div className={style.mainWrapper}>
                    <SummaryPageElement isHead={true} toggleModalWindow={toggleModalWindow}
                                        changeModalWindowInfo={changeModalWindowInfo} number={0} Country={""}
                                        TotalConfirmed={0} TotalDeath={0}
                                        TotalRecovered={0}/>

                    {countryElementsIsFound}

                    <ModalWindow modalWindowIsActive={modalWindowIsActive} toggleModalWindow={toggleModalWindow}>
                        <SummaryPageElementModalWindow modalCountryName={modalCountryName}
                                                       modalTotalConfirmed={modalTotalConfirmed}
                                                       modalTotalDeath={modalTotalDeath}
                                                       modalTotalRecovered={modalTotalRecovered}
                                                       toggleModalWindow={toggleModalWindow}/>
                    </ModalWindow>
                </div>
            );
        }
    };
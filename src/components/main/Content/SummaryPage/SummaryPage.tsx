import React, {useEffect, useState} from "react";
import {CountryType} from "../../../common/commonTypes/summaryResponseTypes";
import {SummaryPageElement} from "../../../common/commonComponents/SummaryPageElements/SummaryPageElements";
import {Preloader} from "../../../common/commonComponents/Preloader/Preloader";
import style from "./SummaryPage.module.css"
import {filterCountriesArray} from "../../../common/commonFunctions/summaryPageFunctions";

type summaryPagePropsType = {
    countries: Array<CountryType>,
    searchInputField: string,
    setCountriesThunk: () => Promise<void>
};

export const SummaryPage: React.FC<summaryPagePropsType> =
    ({countries, searchInputField, setCountriesThunk}) => {

        const [isFetching, toggleFetch] = useState(true);

        const [filteredCountries, toggleFilter] = useState(countries)

        useEffect(() => {
            setCountriesThunk().then(() => toggleFetch(false))
        }, []);

        useEffect(() => {
            toggleFilter(filterCountriesArray(searchInputField, countries));
        }, [searchInputField, countries])

        const countryElements = filteredCountries.map(
            (country, index) => <div><SummaryPageElement isHead={false} number={index + 1}
                                                         Country={country.Country}
                                                         TotalConfirmed={country.TotalConfirmed}
                                                         key={index + 1}/></div>);

        if (isFetching) {
            return (
                <div className={style.mainWrapper}>
                    <Preloader/>
                </div>
            );
        } else {
            return (
                <div className={style.mainWrapper}>
                    <SummaryPageElement isHead={true} number={0} Country={""} TotalConfirmed={0}/>
                    {countryElements}
                </div>
            );
        }
    };
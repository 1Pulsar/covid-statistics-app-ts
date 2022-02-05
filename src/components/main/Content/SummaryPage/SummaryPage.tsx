import React, {useEffect} from "react";
import {CountryType} from "../../../common/commonTypes/summaryResponseTypes";
import {SummaryPageElement} from "../../../common/commonComponents/SummaryPageElements/SummaryPageElements";

type summaryPagePropsType = {
    countries: Array<CountryType>,
    searchInputField: string,
    setCountriesThunk: () => Promise<void>
};

export const SummaryPage: React.FC<summaryPagePropsType> =
    ({countries, searchInputField, setCountriesThunk}) => {

        useEffect(() => {
            setCountriesThunk()
        }, []);

        const countryElements = countries.map(
            (country, index) => <div><SummaryPageElement isHead={false} number={index + 1}
                                                         Country={country.Country}
                                                         TotalConfirmed={country.TotalConfirmed}
                                                         key={index + 1}/></div>);

        return (
            <div>
                <SummaryPageElement isHead={true} number={0} Country={""} TotalConfirmed={0}/>
                {countryElements}
            </div>
        );
    };
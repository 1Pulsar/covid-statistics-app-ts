import React, {useEffect} from "react";
import {CountryType} from "../../../common/commonTypes/summaryResponseTypes";

type summaryPagePropsType = {
    countries: Array<CountryType>,
    searchInputField: string,
    setCountriesThunk: () => Promise<void>
}

export const SummaryPage: React.FC<summaryPagePropsType> =
    ({countries, searchInputField, setCountriesThunk}) => {
        useEffect(() => {
            setCountriesThunk()
        }, [])
        return (
            <div>

            </div>
        );
    };
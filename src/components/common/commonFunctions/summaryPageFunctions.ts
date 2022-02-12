import {CountryType} from "../commonTypes/summaryResponseTypes";

export const filterCountriesArray = (searchInputField: string, countries: Array<CountryType>): Array<CountryType> => {
    if (searchInputField !== '') {
        const validSearchInput:string = searchInputField.toLowerCase().replace(/ /g, '-')
        const countryElementFilter = (country: CountryType): boolean => (
            country.Slug.startsWith(validSearchInput)
        );
        return countries.filter(countryElementFilter);
    } else {
        return countries;
    }
};
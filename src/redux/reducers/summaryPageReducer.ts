import {
    actionType,
    dispatchClosureType
} from "../../components/common/commonTypes/commonReducerTypes";
import {CountryType} from "../../components/common/commonTypes/summaryResponseTypes";
import {summaryDataAPI} from "../../API/API";

const SET_COUNTRIES: string = "summaryPage/SET_COUNTRIES";
const SET_SEARCH_INPUT_VALUE_FIELD: string = "summaryPage/SET_SEARCH_INPUT_VALUE_FIELD";

const initialState = {
    countries: [] as Array<CountryType>,
    searchInputField: ""
};

type summaryStateType = typeof initialState

export const summaryPageReducer: (summaryState: summaryStateType, action: actionType) => summaryStateType =
    (summaryState = initialState, action) => {
        switch (action.type) {
            case SET_COUNTRIES:
                return {...summaryState, countries: action.countries};
            case SET_SEARCH_INPUT_VALUE_FIELD:
                return {...summaryState, searchInputField: action.searchInputField};
            default:
                return summaryState;
        }
    };

export const setCountries: (countries: Array<CountryType>) => actionType =
    (countries) => {
        return ({type: SET_COUNTRIES, countries: countries});
    };

export const setCountriesThunk: () => dispatchClosureType =
    () => async (dispatch) => {
        const responseData = await summaryDataAPI.getSummaryData();
        dispatch(setCountries(responseData.Countries));
    };

export const setSearchInputValueField: (searchInputField: string) => actionType =
    (searchInputField) => {
        return ({type: SET_SEARCH_INPUT_VALUE_FIELD, searchInputField});
    };
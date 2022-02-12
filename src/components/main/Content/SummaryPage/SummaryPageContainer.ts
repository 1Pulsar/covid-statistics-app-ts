import {setCountriesThunk} from "../../../../redux/reducers/summaryPageReducer";
import {connect} from "react-redux";
import {SummaryPage} from "./SummaryPage";
import {CountryType} from "../../../common/commonTypes/summaryResponseTypes";
import {dispatchClosureType} from "../../../common/commonTypes/commonReducerTypes";

type mapStatePropsType = {
    countries: Array<CountryType>,
    searchInputField: string,
};

type mapDispatchType = {
    setCountriesThunk: () => dispatchClosureType
};

const mapState = (state: any):mapStatePropsType => ({
    countries: state.summaryPage.countries,
    searchInputField: state.summaryPage.searchInputField
});

const mapDispatch:mapDispatchType = {
    setCountriesThunk
};

export const SummaryPageContainer = connect(mapState, mapDispatch)(SummaryPage);
import {connect} from "react-redux";
import {Header} from "./Header";
import {setSearchInputValueField} from "../../../redux/reducers/summaryPageReducer";
import {actionType} from "../../common/commonTypes/commonReducerTypes";

type mapStateType = {
    searchInputField:string
}

type mapDispatchType = {
    setSearchInputValueField: (searchInputField: string) => actionType
}

const mapState = (state:any):mapStateType => ({
    searchInputField: state.summaryPage.searchInputField
})

const mapDispatch:mapDispatchType = {
    setSearchInputValueField
}

export const HeaderContainer = connect(mapState, mapDispatch)(Header)
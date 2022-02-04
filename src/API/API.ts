import axios from "axios";
import {summaryDataResponseType} from "../components/common/commonTypes/summaryResponseTypes";

type summaryDataAPIType = { getSummaryData(): Promise<summaryDataResponseType> };

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://api.covid19api.com/"
});

export const summaryDataAPI: summaryDataAPIType = {
    getSummaryData() {
        return instance.get(`summary`)
            .then((response): summaryDataResponseType => response.data)
    }
};
import {Dispatch} from "react";
import {CountryType} from "./summaryResponseTypes";

export type actionType = { type: string, [propName: string]: any };

export type dispatchClosureType = (dispatch: Dispatch<any>) => Promise<void>;
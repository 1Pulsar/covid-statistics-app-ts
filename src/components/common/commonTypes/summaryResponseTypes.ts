export type globalType = {
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: string
};

export type CountryType = {
    ID: string,
    Country: string,
    CountryCode: string,
    Slug: string,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: string,
    Premium: any
};

export type summaryDataResponseType = {
    ID: string,
    Message: string,
    Global: globalType,
    Countries: Array<CountryType>,
    Date: string
};
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { ICompany } from "../models/company"
import { ICompanyData } from "../models/companyData"
import { CompanyStockQuote } from "../models/companyStockQuote"
import { ICompanyLogo } from "../models/company_logo"

const api_token = "pk_6a2f5a2856a047ad933ed2d2f67b8523"

export const CompaniesApi = createApi({
    reducerPath: "companiesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.iex.cloud", }),
    endpoints: (build) => ({
        fetchAllCompanies: build.query<Array<ICompany>, number>({
            query: () => ({
                url: `/stable/ref-data/symbols?token=${api_token}`
            })
        }),
        fetchCompanyData: build.query<ICompanyData, string>({
            query: (company_name) => ({
                url: `/stable/stock/${company_name}/company?token=${api_token}`
            })
        }),
        fetchCompanyStats: build.query<Array<CompanyStockQuote>, string>({
            query: (company_name) => ({
                url: `/v1/data/CORE/QUOTE/${company_name}?token=${api_token}`
            })
        }),
        fetchCompaniesCollection: build.query<CompanyStockQuote[], string>({
            query: (collectionName) => ({
                url: `/stable/stock/market/collection/tag?tagName=${collectionName}&token=${api_token}`
            })
        }),
        fetchTags: build.query<CompanyStockQuote[], string>({
            query: () => ({
                url: `https://api.iex.cloud/v1/data/CORE/REF_DATA_TAGS?token=${api_token}`
            })
        }),
        fetchCompanyLogo: build.query<ICompanyLogo, string>({
            query: (company_name) => ({
                url: `/stable/stock/${company_name}/logo?token=${api_token}`
            })
        })
    })
})
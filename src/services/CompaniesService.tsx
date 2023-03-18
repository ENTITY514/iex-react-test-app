import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { ICompany } from "../models/company"
import { ICompanyData } from "../models/companyData"
import { CompanyStockQuote } from "../models/companyStockQuote"
import { ICompanyLogo } from "../models/company_logo"

const api_token = "pk_6a2f5a2856a047ad933ed2d2f67b8523"
const base_url = "https://api.iex.cloud/v1/"
const company_data = `https://cloud.iexapis.com/stable/stock/aapl/company?token=${api_token}`
const company_stats = `https://api.iex.cloud/v1/data/CORE/QUOTE/TWTR?token=${api_token}`
const companies_collection = `https://api.iex.cloud/v1/data/CORE/STOCK_COLLECTION/list?collectionName=mostactive&token=${api_token}`
const company_logo = `https://cloud.iexapis.com/stable/stock/aapl/logo?token=${api_token}`

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
            query: () => ({
                url: `/stable/stock/aapl/company?token=${api_token}`
            })
        }),
        fetchCompanyStats: build.query<CompanyStockQuote, string>({
            query: () => ({
                url: `/v1/data/CORE/QUOTE/TWTR?token=${api_token}`
            })
        }),
        fetchCompaniesCollection: build.query<CompanyStockQuote[], string>({
            query: () => ({
                url: `/v1/data/CORE/STOCK_COLLECTION/list?collectionName=mostactive&token=${api_token}`
            })
        }),
        fetchCompanyLogo: build.query<ICompanyLogo, string>({
            query: () => ({
                url: `/stable/stock/aapl/logo?token=${api_token}`
            })
        }),
        fetchFinancial: build.query<ICompany, string>({
            query: () => ({
                url: `/stable/stock/aapl/financials?token=${api_token}`
            })
        })
    })
})
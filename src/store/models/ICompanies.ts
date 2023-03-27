import { ICompany } from "../../models/company";

export interface Icompanies {
    companies: Array<ICompany>
    active_company: string
}
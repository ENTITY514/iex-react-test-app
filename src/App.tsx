import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from "./app.module.css"
import { About } from './pages/About/about';
import { CompaniesPage } from './pages/Companies/companies_page';
import { Company } from './pages/Company/company';
import { Root } from './pages/Root/root';
import { CompaniesApi } from './services/CompaniesService';
import { useAppDispatch } from './store/hooks/redux';
import { companiesSlice } from './store/reducers/CompaniesSlice';


function App() {
  const { data: companies, error, isLoading } = CompaniesApi.useFetchAllCompaniesQuery(0)
  const dispatch = useAppDispatch()
  const actions = companiesSlice.actions
  React.useEffect(() => {
    if (companies) dispatch(actions.setCompanies(companies))
  }, [isLoading])
  return (
    <div className={style.container}>
      <BrowserRouter>
        <Routes>
          <Route path={""} element={<Root />} />
          <Route path={"company"} element={<Company />} />
          <Route path={"companies"} element={<CompaniesPage />} />
          <Route path={"about"} element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

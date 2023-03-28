import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from "./app.module.css"
import { About } from './pages/About/about';
import { CompaniesPage } from './pages/Companies/companies_page';
import { CompanyPage } from './pages/Company/company_page';
import { Root } from './pages/Root/root';
import { CompaniesApi } from './services/CompaniesService';


function App() {
  CompaniesApi.useFetchAllCompaniesQuery(0)
  return (
    <div className={style.container}>
      <BrowserRouter>
        <Routes>
          <Route path={""} element={<Root />} />
          <Route path={"company"} element={<CompanyPage />} />
          <Route path={"companies"} element={<CompaniesPage />} />
          <Route path={"about"} element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

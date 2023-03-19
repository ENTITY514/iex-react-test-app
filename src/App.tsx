import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from "./app.module.css"
import { About } from './pages/About/about';
import { Companies } from './pages/Companies/companies';
import { Company } from './pages/Company/company';
import { Root } from './pages/Root/root';
import { CompaniesApi } from './services/CompaniesService';


function App() {
  const { data: companies, error, isLoading } = CompaniesApi.useFetchCompanyFinancialQuery("")
  return (
    <div className={style.container}>
      <BrowserRouter>
        <Routes>
          <Route path={""} element={<Root />} />
          <Route path={"company"} element={<Company />} />
          <Route path={"companies"} element={<Companies />} />
          <Route path={"about"} element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

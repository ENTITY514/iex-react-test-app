import './App.css';
import { CompaniesApi } from './services/CompaniesService';


function App() {
  const api_token = "pk_6a2f5a2856a047ad933ed2d2f67b8523"
  const base_url = "https://api.iex.cloud/v1/"
  const company_data = `https://cloud.iexapis.com/stable/stock/aapl/company?token=${api_token}`
  const company_stats = `https://api.iex.cloud/v1/data/CORE/QUOTE/TWTR?token=${api_token}`
  const companies_collection = `https://api.iex.cloud/v1/data/CORE/STOCK_COLLECTION/list?collectionName=mostactive&token=${api_token}`
  const company_logo = `https://cloud.iexapis.com/stable/stock/aapl/logo?token=${api_token}`

  const { data: companies, error, isLoading } = CompaniesApi.useFetchCompanyDataQuery("")
  console.log(companies);
  
  return (
    <div className="App">
      {isLoading && <h1>Загрузка</h1>}
      {companies && <h1>{JSON.stringify(companies)}</h1>}
      {error && <h1>{JSON.stringify(error)}</h1>}
    </div>
  );
}

export default App;

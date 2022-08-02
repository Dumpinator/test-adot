import { createContext, FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.scss';


export interface IDataContext {
  id: number,
  title: string,
  address: string,
  population: number,
  booking: number,
  cost: number,
  area: number,
  active: boolean
};

export const AppCtx = createContext<IDataContext[] | null>(null);

const datasAppContext: IDataContext[] =
[
  {
    id: 1,
    title: "Copenhagen",
    address: "Radhuspladsen 1, 1550 Kobenhavn, Denmark",
    population: 3.4,
    booking: 5_000,
    cost: 70_000,
    area: 88.25,
    active: true,
  },
  {
    id: 2,
    title: "Tehran",
    address: "Tehran, Azadi Square, Iran",
    population: 8.6,
    booking: 400,
    cost: 30_000,
    area: 730,
    active: true,
  },
  {
    id: 3,
    title: "Paris",
    address: "Pl. de l'Hôtel de Ville, 75004, France",
    population: 2.1,
    booking: 7_500,
    cost: 50_000,
    area: 105.4,
    active: true,
  },
  {
    id: 4,
    title: "London",
    address: "London SW1A OAA, United Kingdom",
    population: 8.98,
    booking: 10_000,
    cost: 90_000,
    area: 1572,
    active: true,
  },
  {
    id: 5,
    title: "Tokyo",
    address: "Shibakoen, Minato City, Tokyo, Japan",
    population: 13.9,
    booking: 7_000,
    cost: 70_000,
    area: 627.6,
    active: true,
  },
  {
    id: 6,
    title: "New York",
    address: "New York, NY 10004, United States",
    population: 8.4,
    booking: 12_000,
    cost: 100_000,
    area: 783.8,
    active: true,
  },
];

const App: FunctionComponent = () => {

  return (
    <AppCtx.Provider value={datasAppContext}>

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>

    </AppCtx.Provider>
  );
}

export default App;

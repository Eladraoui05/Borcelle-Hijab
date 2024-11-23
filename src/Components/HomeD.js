import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

function HomeD() {
  const data = [
    { name: 'Janvier', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Février', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mars', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Avril', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Mai', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Juin', uv: 5880, pv: 9600, amt: 2500 },
    { name: 'Juillet', uv: 3430, pv: 4500, amt: 2290 },
    { name: 'Août', uv: 6880, pv: 4700, amt: 2700 },
    { name: 'Septembre', uv: 3690, pv: 4200, amt: 2390 },
    { name: 'Octobre', uv: 7880, pv: 9700, amt: 2600 },
    { name: 'Novembre', uv: 3590, pv: 9900, amt: 2590 },
    { name: 'Décembre', uv: 8880, pv: 9900, amt: 2690 },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
  <h3>DASHBOARD</h3>
</div>

<div className="main-cards">
  <div className="card">
    <div className="card-inner">
      <h3>PRODUCTS</h3>
      <BsFillArchiveFill className="card_icon" />
    </div>
    <h1>96</h1>
    <Link to="/ProductDashboard">Voir les produits</Link> 
  </div>

  <div className="card">
    <div className="card-inner">
      <h3>CATEGORIES</h3>
      <BsFillGrid3X3GapFill className="card_icon" />
    </div>
    <h1>6</h1>
    <Link to="/CategoryDashboard">Voir les catégories</Link> 
  </div>

  <div className="card">
    <div className="card-inner">
      <h3>CUSTOMERS</h3>
      <BsPeopleFill className="card_icon" />
    </div>
    <h1>33</h1>
    <Link to="/Customers">Voir les clients</Link> 
  </div>

  <div className="card">
    <div className="card-inner">
      <h3>Reports</h3>
      <BsFillGrid3X3GapFill className="card_icon" />
    </div>
    <h1></h1>
    <Link to="/ReportsPage">Voir les rapports</Link> 
  </div>
</div>

      <div className="charts">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default HomeD;

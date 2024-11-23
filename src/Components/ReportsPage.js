import React, { useState, useEffect } from 'react';

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState('');

  useEffect(() => {
    const storedReports = JSON.parse(localStorage.getItem('reports')) || [];
    setReports(storedReports);
  }, []);

  useEffect(() => {
    if (reports.length > 0) {
      localStorage.setItem('reports', JSON.stringify(reports));
    }
  }, [reports]);

  const handleAddReport = () => {
    if (newReport) {
      const newReportData = { id: reports.length + 1, content: newReport };
      const updatedReports = [...reports, newReportData];
      setReports(updatedReports);
      setNewReport('');
    }
  };

  const handlePrint = (reportId) => {
    const report = reports.find((r) => r.id === reportId);
    if (report) {
      const printWindow = window.open('', '', 'width=600,height=400');
      printWindow.document.write('<h1>Rapport</h1>');
      printWindow.document.write(`<p>${report.content}</p>`);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleDownload = (reportId) => {
    const report = reports.find((r) => r.id === reportId);
    if (report) {
      const element = document.createElement('a');
      const file = new Blob([report.content], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `rapport_${reportId}.txt`;
      document.body.appendChild(element);
      element.click();
    }
  };

  return (
    <div className="reports-page">
      <h1>Rapports</h1>

      <div className="add-report">
        <textarea
          placeholder="Ajouter un rapport"
          value={newReport}
          onChange={(e) => setNewReport(e.target.value)}
        />
        <button onClick={handleAddReport}>Ajouter un rapport</button>
      </div>

      <div className="reports-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Contenu</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.content}</td>
                <td>
                  <button onClick={() => handlePrint(report.id)}>Imprimer</button>
                  <button onClick={() => handleDownload(report.id)}>Télécharger</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsPage;

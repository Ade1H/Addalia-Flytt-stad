import React from 'react';

const PrisFlyttstadning = () => {
  return (
    <div className="container mt-5">
      <h2
        className="text-center mb-4"
        style={{
          fontWeight: 'bold',
          color: '#004085',
          textShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        Pris för flyttstädning i Göteborg
      </h2>
      <p className="mt-4" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
        Priset för flyttstädning brukar generellt landa på mellan{' '}
        <strong style={{ color: '#28a745' }}>35-80 kronor per kvadratmeter</strong> för flyttstädning i Göteborg.
      </p>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
        Nedan räkneexempel baseras på en kostnad på{' '}
        <strong style={{ color: '#17a2b8' }}>23-59 kronor per kvadratmeter</strong>, där vi även inkluderar RUT-avdraget.
        Kontakta oss så skickar vi en kostnadsfri offert för en flyttstädning av din fastighet.
      </p>

      <table
        className="table table-bordered table-striped mt-4"
        style={{
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <thead className="table-warning">
          <tr style={{ fontSize: '1.1rem', textAlign: 'center' }}>
            <th scope="col">Antal m²</th>
            <th scope="col">Arbetskostnad</th>
            <th scope="col">RUT-avdrag</th>
            <th scope="col">Din kostnad</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ textAlign: 'center' }}>
            <td>30 m²</td>
            <td>3 580 kr</td>
            <td>1 790 kr</td>
            <td style={{ fontWeight: 'bold', color: '#28a745' }}>1 790 kr</td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>50 m²</td>
            <td>3 980 kr</td>
            <td>1 990 kr</td>
            <td style={{ fontWeight: 'bold', color: '#28a745' }}>1 990 kr</td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>100 m²</td>
            <td>6 980 kr</td>
            <td>3 490 kr</td>
            <td style={{ fontWeight: 'bold', color: '#28a745' }}>3 490 kr</td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>150 m²</td>
            <td>8 980 kr</td>
            <td>4 490 kr</td>
            <td style={{ fontWeight: 'bold', color: '#28a745' }}>4 490 kr</td>
          </tr>
          <tr style={{ textAlign: 'center' }}>
            <td>250 m²</td>
            <td>11 580 kr</td>
            <td>5 790 kr</td>
            <td style={{ fontWeight: 'bold', color: '#28a745' }}>5 790 kr</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PrisFlyttstadning;

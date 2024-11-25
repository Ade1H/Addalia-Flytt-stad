import React from 'react';

const PrisFlyttstadning = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Pris för flyttstädning i Göteborg</h2>
      <p className="mt-4">
        Priset för flyttstädning brukar generellt landa på mellan <strong>35-80 kronor per kvadratmeter</strong> för flyttstädning i Göteborg.
      </p>
      <p>
        Nedan räkneexempel baseras på en kostnad på <strong>23-59 kronor per kvadratmeter</strong>, där vi även inkluderar RUT-avdraget.
        Kontakta oss så skickar vi en kostnadsfri offert för en flyttstädning av din fastighet.
      </p>

      <table className="table table-bordered table-striped mt-4">
        <thead className="table-warning">
          <tr>
            <th scope="col">Antal m²</th>
            <th scope="col">Arbetskostnad</th>
            <th scope="col">RUT-avdrag</th>
            <th scope="col">Din kostnad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30 m²</td>
            <td>3 580 kr</td>
            <td>1 790 kr</td>
            <td>1 790 kr</td>
          </tr>
          <tr>
            <td>50 m²</td>
            <td>3 980 kr</td>
            <td>1 990 kr</td>
            <td>1 990 kr</td>
          </tr>
          <tr>
            <td>100 m²</td>
            <td>6 980 kr</td>
            <td>3 490 kr</td>
            <td>3 490 kr</td>
          </tr>
          <tr>
            <td>150 m²</td>
            <td>8 980 kr</td>
            <td>4 490 kr</td>
            <td>4 490 kr</td>
          </tr>
          <tr>
            <td>250 m²</td>
            <td>11 580 kr</td>
            <td>5 790 kr</td>
            <td>5 790 kr</td>
          </tr>
        </tbody>
      </table>


    </div>
  );
};

export default PrisFlyttstadning;

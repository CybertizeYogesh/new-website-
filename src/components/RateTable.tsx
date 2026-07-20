'use client';

import React from 'react';

export default function RateTable() {
  return (
    <section className="section" id="rate-list">
      <div className="container">
        <h2 className="text-center" style={{ color: 'red', fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 600 }}>
          &rarr; Packers and Movers Rate List for Nearby in India &larr;
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Shifting Type</th>
                <th>50 to 150 Km<br />(Rs.)</th>
                <th>150 to 400 Km<br />(Rs.)</th>
                <th>400 to 800 Km<br />(Rs.)</th>
                <th>800 to 1200 Km<br />(Rs.)</th>
                <th>1200 to 1700<br />Km (Rs.)</th>
                <th>1700 to 2500<br />Km (Rs.)</th>
                <th>2500 to 3500<br />Km (Rs.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: 'left', fontWeight: 700 }}>1 BHK house shifting charges</td>
                <td>15k to 25k</td>
                <td>20k to 28k</td>
                <td>28k to 38k</td>
                <td>35k to 48k</td>
                <td>45k to 58k</td>
                <td>55k to 85k</td>
                <td>85k to 150k</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', fontWeight: 700 }}>2 BHK house shifting cost</td>
                <td>25k to 35k</td>
                <td>28k to 38k</td>
                <td>35k to 45k</td>
                <td>45k to 55k</td>
                <td>55k to 75k</td>
                <td>75k to 95k</td>
                <td>95k to 150k</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', fontWeight: 700 }}>3 BHK house relocation cost</td>
                <td>35k to 45k</td>
                <td>45k to 55k</td>
                <td>55k to 65k</td>
                <td>65k to 75k</td>
                <td>75k to 85k</td>
                <td>85k to 120k</td>
                <td>120k to 165k</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', fontWeight: 700 }}>4 BHK house shifting cost</td>
                <td>45k to 55k</td>
                <td>55k to 65k</td>
                <td>65k to 75k</td>
                <td>75k to 85k</td>
                <td>85k to 95k</td>
                <td>95k to 130k</td>
                <td>130k to 175k</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', fontWeight: 700 }}>5 BHK house shifting charges</td>
                <td>55k to 65k</td>
                <td>65k to 75k</td>
                <td>75k to 85k</td>
                <td>85k to 95k</td>
                <td>95k to 105k</td>
                <td>105k to 120k</td>
                <td>130k to 180k</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', fontWeight: 700 }}>Car Transport cost</td>
                <td>8k to 15k</td>
                <td>15k to 20k</td>
                <td>20k to 25k</td>
                <td>25k to 35k</td>
                <td>35k to 45k</td>
                <td>45k to 55k</td>
                <td>55k to 65k</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left', fontWeight: 700 }}>Few Office items shifting cost</td>
                <td>15k to 25k</td>
                <td>20k to 28k</td>
                <td>28k to 38k</td>
                <td>35k to 48k</td>
                <td>45k to 58k</td>
                <td>55k to 85k</td>
                <td>85k to 150k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export function Pie({label,color,pieData}) {
    const data = {
        labels: label,
        datasets: [
          {
            label: '# of Votes',
            data: pieData,
            backgroundColor: color,
            borderColor: color,
            borderWidth: 1,
          },
        ],
      };

  return <Doughnut data={data} />;
}

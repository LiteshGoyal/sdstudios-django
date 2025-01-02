'use client'
// components/AnimatedGraph.js
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AnimatedGraph = () => {
  // Example data for the graph
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
        pointRadius: 5,
        pointHoverRadius: 8,
      },
    ],
  };

  // Options for animation
  const options = {
    responsive: true,
    animation: {
      duration: 1000, // Time in ms
      easing: 'easeOutBounce', // Animation easing
    },
  };

  return (
    <div className="w-full h-64">
      <Line data={data} options={options} />
    </div>
  );
};

export default AnimatedGraph;

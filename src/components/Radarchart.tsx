import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js/auto";
import { Radar } from "react-chartjs-2";
import activity from "../data/activity.json";
import "../styles/Radarchart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Radarchart: React.FC = () => {
  const data = {
    labels: activity.map((data) => data.label),
    datasets: [
      {
        label: "Percent",
        data: activity.map((data) => data.value),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        hoverBackgroundColor: "rgba(255, 162, 0, 0.7)",
        borderColor: "rgba(255 , 255, 255, 0.8)",
        borderWidth: 2,
        // pointBackgroundColor: 'rgba(0, 0, 0, 1)',
        pointBackgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        pointBorderColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        pointHoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        pointHoverBorderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options: ChartOptions<"radar"> = {
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        pointLabels: {
          font: {
            size: 14,
            family: "Fira Code",
            weight: "normal",
          },
          color: "#FFFFFF",
          callback: (value: string) => value,
        },
        grid: {
          color: "rgba(1, 157, 244, 0.8)",
        },
        angleLines: {
          color: "rgba(1, 157, 244, 0.8)",
          lineWidth: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw;
            const label = data.labels[tooltipItem.dataIndex];
            return `${label}: ${value}%`;
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.1, // Smoothing the lines
      },
    },
  };

  return (
    <div className="Radarchart">
      <Radar data={data} options={options} height={350} width={550} />
    </div>
  );
};

export default Radarchart;

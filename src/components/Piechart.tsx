import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import activity from "../data/activity.json";
import "../styles/Piechart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart: React.FC = () => {
  const data = {
    labels: activity.map((data) => data.label),
    datasets: [
      {
        label: "Percent",
        data: activity.map((data) => data.value),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw;
            return `${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="Piechart">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Piechart;

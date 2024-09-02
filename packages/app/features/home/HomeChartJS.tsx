import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale, Colors } from "chart.js";
import { Stack, useTheme } from "@my/ui";

const chart = Chart.register(CategoryScale, Colors)


export const HomeChartJS = () => {
  const chartData = {
    labels: ['Janurary', 'February', 'March', 'April', 'Mai', 'June', 'July'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: 'Satoshis',
        data: [1000.50, 3000.23, 2500.23, 900.23, 4000.23, 3450.23, 2890.23],
        backgroundColor: [
          '#ffffff',
        ],
        fill: false,
        borderColor: "#f08c51",
        borderWidth: 2,
        tension: 0.2
      }
    ]
  }


  return (
    <Stack f={1} width={600} margin="$2">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Wealth Developement",
            },
            legend: {
              display: false,
            }
          }
        }}

      />
    </Stack>
  )
}
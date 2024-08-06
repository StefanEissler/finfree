import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Stack, Theme } from "@my/ui";
import { colorTokens } from "@tamagui/themes";
import { tokens } from "@tamagui/themes/v3-themes";

Chart.register(CategoryScale)

export const HomeChartJS = () => {

  const chartData = {
    labels: ['Janurary', 'February', 'March', 'April', 'Mai', 'June', 'July'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: 'Popularity of colours',
        data: [1000.50, 1200.23, 1200.23, 1200.23, 1200.23, 1200.23, 1200.23],
        backgroundColor: [
          'rgba(255, 255, 255, 0.6)',
        ],
        borderColor: "$color10",
        borderWidth: 2,
      }
    ]
  }


  return (
    <Stack f={1} jc="center" width={600} margin="$5">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Wealth Developement"
            },
            legend: {
              display: false
            }
          }
        }}

      />
    </Stack>
  )
}
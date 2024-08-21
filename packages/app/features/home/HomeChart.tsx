import { Stack, YStack, Text, useTheme, XStack, Paragraph, Spacer } from "@my/ui"
import { Bitcoin } from "@tamagui/lucide-icons";
import { CurveType } from "gifted-charts-core"
import { LineChart } from "react-native-gifted-charts"


const ptData = [
  { value: 1000, date: '1 Apr 2022' },
  { value: 250, date: '2 Apr 2022' },
  { value: 50, date: '3 Apr 2022' },
  { value: 900, date: '4 Apr 2022' },
  { value: 850, date: '5 Apr 2022' },
  { value: 400, date: '6 Apr 2022' },
  { value: 450, date: '7 Apr 2022' },
  { value: 440, date: '8 Apr 2022' },
  { value: 490, date: '9 Apr 2022' },
  {
    value: 490,
    date: '10 Apr 2022',
    label: '10 Apr',
    labelTextStyle: { color: 'lightgray', width: 60 },
  },
  { value: 490, date: '11 Apr 2022' },
  { value: 200, date: '12 Apr 2022' },
  { value: 600, date: '13 Apr 2022' },
  { value: 950, date: '14 Apr 2022' },
  { value: 500, date: '15 Apr 2022' },
  { value: 299, date: '16 Apr 2022' },

  { value: 500, date: '17 Apr 2022' },
  { value: 260, date: '18 Apr 2022' },
  { value: 190, date: '19 Apr 2022' },
  {
    value: 600,
    date: '20 Apr 2022',
    label: '20 Apr',
    labelTextStyle: { color: 'lightgray', width: 60 },
  },
  { value: 600, date: '21 Apr 2022' },
  { value: 750, date: '22 Apr 2022' },
  { value: 777, date: '23 Apr 2022' },
  { value: 255, date: '24 Apr 2022' },

  { value: 800, date: '25 Apr 2022' },
  { value: 800, date: '26 Apr 2022' },
  { value: 800, date: '27 Apr 2022' },
  { value: 850, date: '28 Apr 2022' },
  { value: 900, date: '29 Apr 2022' },
  {
    value: 1200,
    date: '30 Apr 2022',
    label: '30 Apr',
    labelTextStyle: { color: 'lightgray', width: 60 },
  },
  { value: 950, date: '1 May 2022' },
  { value: 930, date: '2 May 2022' },
  { value: 850, date: '3 May 2022' },
  { value: 850, date: '4 May 2022' },
  { value: 800, date: '5 May 2022' },
];


export const HomeChart = () => {

  const theme = useTheme()

  return (
    <YStack margin="$3" width="100%">
      <LineChart
        isAnimated
        areaChart
        data={ptData}
        width={300}
        hideDataPoints
        spacing={13}
        color={theme.accentColor.val}
        thickness={4}
        startFillColor={theme.accentColor.val}
        endFillColor={theme.background.val}
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={0}
        noOfSections={6}
        maxValue={1200}
        yAxisColor={theme.color11.val}
        yAxisThickness={0}
        yAxisTextStyle={{ color: theme.color11.val }}
        xAxisColor={theme.color1.val}
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: theme.color6.val,
          pointerStripWidth: 2,
          pointerColor: theme.color8.val,
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: items => {
            return (
              <Stack
                style={{
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                  marginTop: -30,
                  marginLeft: -40,
                }}>
                <Text style={{ color: theme.color0.val, fontSize: 14, marginBottom: 6, textAlign: 'center' }}>
                  {items[0].date}
                </Text>

                <Stack style={{ paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16, backgroundColor: theme.background.val }}>
                  <XStack ai='center'>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                      {items[0].value}
                    </Text>
                    <Spacer size='$1' />
                    <Paragraph size={12}>
                      SAT
                    </Paragraph>
                  </XStack>
                </Stack>
              </Stack>
            );
          },
        }}
      />
    </YStack>
  )
}
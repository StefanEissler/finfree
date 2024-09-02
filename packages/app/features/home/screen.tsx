import {
  Separator,
  YStack,
  Stack,
  Tabs,
  ScrollView,
  Text,
  Spacer,
  Button,
  XStack,
} from '@my/ui'
import { HomeChart } from './HomeChart'
import { TransactionList } from '../transactions/TransactionList'
import { CurrentBalance } from './CurrentBalance'
import { FinancialGoal } from '../user/FinancialGoal'
import { ChevronLeftCircle, ChevronRightCircle } from '@tamagui/lucide-icons'
import { useRef, useState } from 'react';
import { Dimensions } from 'react-native'


export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const { width, height } = Dimensions.get("window");

  //const currentPageRef = useRef(0);
  const [currentPage, setCurrentPage] = useState(0)


  const scrollRef = useRef<ScrollView>(null)

  const toNextPage = (direction: string) => {
    let newPage = direction === "left" ? currentPage - 1 : currentPage + 1;
    if (newPage >= 0 && newPage <= 1) {
      scrollRef.current?.scrollTo({ x: newPage * width, animated: true });
      setCurrentPage(newPage);
    }
  };


  return (
    <YStack flex={1} height="100%" w="100%" p="$1" pb={0} alignContent='center' bg="$background" >
      <YStack marginTop="$8" ai="center" flexGrow={1}>
        <CurrentBalance props={{ marginTop: "$4" }} />
        <ScrollView flex={1} w="100%" p="$1">
          <Separator margin={20} />
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => {
              const contentOffsetX = event.nativeEvent.contentOffset.x;
              const pageIndex = Math.round(contentOffsetX / width);
              setCurrentPage(pageIndex);
            }}
            scrollEventThrottle={16}
          >
            <Stack width={width}>
              <HomeChart />
            </Stack>
            <Stack width={width}>
              <FinancialGoal />
            </Stack>
          </ScrollView>
          <XStack f={1} jc="center" gap="$4">
            <Button
              size="$2"
              onPress={() => toNextPage("left")}
              icon={ChevronLeftCircle}
              chromeless={currentPage === 1}
              disabled={currentPage === 0}
              circular
            />
            <Button
              size="$2"
              onPress={() => toNextPage("right")}
              icon={ChevronRightCircle}
              chromeless={currentPage === 0}
              disabled={currentPage === 1}
              circular
            />
          </XStack>
          <Separator m="$3" />
          <Stack p="$2">
            <TransactionList />
          </Stack>
        </ScrollView>
      </YStack>
    </YStack >
  )
}
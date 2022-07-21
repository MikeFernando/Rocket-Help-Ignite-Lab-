import { Center, FlatList, Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Button } from '../components/Button';
import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';

import Logo from '../assets/logo_secondary.svg';

export function Home() {
  const [ statusSelected, setStatusSelected ] = useState<'open' | 'closed'>('open')
  const [ orders, setOrders ] = useState<OrderProps[]>([
    {
      id: '123',
      patrimony: '123456',
      when: '2022-07-21 ás 16:00',
      status: 'open'
    },
    {
      id: '1234',
      patrimony: '123456',
      when: '2022-07-21 ás 16:00',
      status: 'closed'
    }
  ]);

  const navigation = useNavigation();
  const { colors } = useTheme();

  function handleNewOrder() {
    navigation.navigate('new')
  }

  function handleOpenDetails(orderId: string) {
    navigation.navigate('details', { orderId })
  }

  function handleSignOut() {
    navigation.navigate('exit');
  }

  return (
    <VStack flex={1} pb={6} bg='gray.700'>
      <HStack
        w='full'
        pb={5}
        pt={12}
        px={6}
        bg='gray.600'
        alignItems='center'
        justifyContent='space-between'
      >
        <Logo />

        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} onPress={handleSignOut}/>
      </HStack>

      <VStack flex={1} px={6}>
        <HStack w='full' mt={9} mb={4} justifyContent='space-between' alignItems='center'>
            <Heading color='gray.100'>
              Meus chamados
            </Heading>
            <Text color='gray.200'>
              3
            </Text>
        </HStack>

        <HStack space={3} mb={8}>
            <Filter 
              type='open'
              title='Em andamento'
              onPress={() => setStatusSelected('open')}
              isActive={statusSelected === 'open'}
            />
            <Filter 
              type='closed'
              title='Finalizados'
              onPress={() => setStatusSelected('closed')}
              isActive={statusSelected === 'closed'}
            />
        </HStack>

        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Order data={item} onPress={() => handleOpenDetails(item.id)} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText size={40} color={colors.gray[300]} />
              <Text color='gray.300' fontSize='xl' mt={8} textAlign='center'>
                Você ainda não possui {'\n'}
                solicitações { statusSelected === 'open' ? 'em andamento' : 'finalizadas' }
              </Text>
            </Center>
          )}
        />

        <Button title='Nova solicitação' onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}
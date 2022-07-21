import { Heading, Icon, useTheme, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Envelope, Key } from "phosphor-react-native";
import { useState } from "react";


import { Button } from "../components/Button";
import { Input } from "../components/Input";

import Logo from '../assets/logo_primary.svg';

export function SignIn() {
  const navigation = useNavigation()
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleSignIn() {
    navigation.navigate('home');
  }

  const { colors } = useTheme()

  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
      <Logo />

      <Heading color='gray.100' fontSize='xl' mt={20} mb={6} >
        Acesse sua conta
      </Heading>

      <Input 
        onChangeText={setEmail}
        placeholder='E-mail'
        marginBottom={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
      />
      <Input
        onChangeText={setPassword}
        placeholder='Senha'
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        mb={8}
      />

      <Button onPress={handleSignIn} title="Entrar" w='full' />
    </VStack>
  )
}
import React, { useRef } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp() {
  const navigation = useNavigation();

  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitaliza="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmittingEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-adress"
            autoCorrect={false}
            autoCapitaliza="none"
            placeholder="Email"
            ref={emailRef}
            returnKeyType="next"
            onSubmittingEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmittingEditing={handleSubmit}
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

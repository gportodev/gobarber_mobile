import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, Avatar, Name, Time, SubmitButton } from './styles';
import Background from '~/components/Background';

import api from '~/services/api';

export default function Confirm({ route, navigation }) {
  const { provider, time } = route.params;

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  );

  function handleAppointment() {
    api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://randomuser.me/api/portraits/women/${provider.id}.jpg`,
          }}
        />

        <Name>{provider.name}</Name>

        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={() => handleAppointment()}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
}

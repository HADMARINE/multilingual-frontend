import Input from '@src/components/assets/Input';
import { Title } from '@src/components/assets/Text';
import { Flex, FlexSpacer } from '@src/components/assets/Wrapper';
import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const RegisterPage = (props: Props) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState<string[]>([]);

  return (
    <>
      <Flex vertical center fit>
        <Flex>
          <FlexSpacer flex={10} />
          <Title>Register</Title>
          <FlexSpacer flex={1} />
          <Input
            variant="primary"
            width="300px"
            height="40px"
            border="10px yellow"
            type="password"
            placeholder="Password"
            error={passwordError}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default RegisterPage;

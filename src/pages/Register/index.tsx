import { langcode } from '@src/api/serve';
import Button from '@src/components/assets/Button';
import Input from '@src/components/assets/Input';
import { Title } from '@src/components/assets/Text';
import { Flex, FlexSpacer } from '@src/components/assets/Wrapper';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Lookup } from 'react-rainbow-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const RegisterPage = (props: Props) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [email, setEmail] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState<string[]>([]);

  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVerifyError, setPasswordVerifyError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [preferredLanguageError, setPreferredLanguageError] = useState('');

  const [langCode, setLangCode] = useState<Record<string, any>>({});

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function work() {
      const langCodeData = localStorage.getItem('langcode-data');
      if (langCodeData === null) {
        const data = await langcode.data();
        if (!data.result) {
          toast.error('There was a problem while connecting to a server');
          return;
        }
        localStorage.setItem('langcode-data', JSON.stringify(data.data));
      } else if (
        JSON.parse(langCodeData).version !== (await langcode.version())
      ) {
        const data = await langcode.data();
        localStorage.setItem('langcode-data', JSON.stringify(data.data));
      }
      setLangCode(JSON.parse(langCodeData as string));
      setIsLoaded(true);
    }

    work();
  });

  return (
    <>
      <Flex vertical center fit>
        <>
          <FlexSpacer flex={10} />
          <Title>Register</Title>
          <FlexSpacer flex={1} />
          <Input
            variant="primary"
            width="300px"
            height="40px"
            border="10px yellow"
            type="id"
            placeholder="ID"
            error={idError}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <FlexSpacer flex={1} />
          <Input
            variant="primary"
            width="300px"
            height="40px"
            border="10px yellow"
            type="password"
            placeholder="Password"
            error={passwordError}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FlexSpacer flex={1} />
          <Input
            variant="primary"
            width="300px"
            height="40px"
            border="10px yellow"
            type="password"
            placeholder="Re-enter password"
            error={passwordVerifyError}
            value={passwordVerify}
            onChange={(e) => setPasswordVerify(e.target.value)}
          />
          <FlexSpacer flex={1} />
          <Input
            variant="primary"
            width="300px"
            height="40px"
            border="10px yellow"
            type="email"
            placeholder="Email"
            error={emailError}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FlexSpacer flex={1} />
          <Flex>
            {preferredLanguage.map((v, i) => (
              <Lookup
                // onSearch={}
                // options=i
                debounce
                key={`preferred_language_${i}`}
              />
            ))}
            <Button
              onClick={() => {
                setPreferredLanguage([...preferredLanguage, '']);
                console.log(preferredLanguage);
              }}
              width={'20px'}
              height={'20px'}>
              +
            </Button>
          </Flex>

          <FlexSpacer flex={10} />
        </>
      </Flex>
    </>
  );
};

export default RegisterPage;

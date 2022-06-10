import React from 'react';
import { Flex, FlexSpacer } from '@src/components/assets/Wrapper';
import { Title } from '@src/components/assets/Text';
import Input from '@src/components/assets/Input';
import Button from '@src/components/assets/Button';
import { login } from '@src/api/auth';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const LoginPage = (props: Props) => {
  const navigate = useNavigate();

  const [id, setId] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const [idError, setIdError] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<string>('');

  React.useEffect(() => {
    setIdError('');
    setPasswordError('');
  }, [id, password]);

  const handleLogin = async () => {
    const result = await login({ userid: id, password });
    if (result.result) {
      navigate('/');
      return;
    } else {
      if (result.reason === 'LOGIN_FAIL') {
        setIdError(' ');
        setPasswordError(' ');
        toast.error('Login Failed : ' + result.reason);
      }
    }
  };

  return (
    <>
      <Flex vertical center fit>
        <Toaster position={'top-center'} />
        <FlexSpacer flex={10} />

        <Flex>
          <Title>Log in</Title>
        </Flex>
        <FlexSpacer flex={1} />
        <Flex>
          <Input
            variant="primary"
            width="300px"
            height="40px"
            border="10px yellow"
            type="id"
            placeholder="ID"
            error={idError}
            onChange={(e) => setId(e.target.value)}
          />
        </Flex>
        <FlexSpacer flex={1} />
        <Flex>
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

        <FlexSpacer flex={1} />
        <Flex>
          <Button variant="primary-inversed" onClick={handleLogin}>
            LOG IN
          </Button>
        </Flex>
        <FlexSpacer flex={10} />
      </Flex>
    </>
  );
};

export default LoginPage;

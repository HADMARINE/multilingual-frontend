import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DismissButtonImage from '@img/icon/DismissButton.png';
import Img from '@components/assets/Img';
import Button from '@components/assets/Button';
import colorSettings from '@settings/color.json';

interface Props {
  children?: React.ReactNode;
  timeout?: number;
}

const Noti = styled.div`
  @keyframes NotiVanish {
    0%,
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  animation: NotiVanish ${(props: Props) => props.timeout || '3'}s ease-out;
  opacity: 0;
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  background-color: ${colorSettings.keyColor}; // TODO : change color
  margin: auto;
  width: 400px;
  height: 50px;
  z-index: 1000;
  border-radius: 20px;
  color: white;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Notification = (props: Props) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, (props.timeout || 3) * 1000);
  });

  return visible ? (
    <Noti timeout={props.timeout}>
      {props.children}
      <div style={{ position: 'absolute', right: '10px', top: 0 }}>
        <Button
          width={'20px'}
          height={'20px'}
          variant={'transparent'}
          onClick={() => setVisible(false)}>
          <Img width={'20px'} alt={'Dismiss'} src={DismissButtonImage} />
        </Button>
      </div>
    </Noti>
  ) : (
    <></>
  );
};

export default {
  default: Notification,
};

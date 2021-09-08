import React from 'react';
import Input from './Input';

export default {
  title: 'Component/Input',
  component: Input,
};

export const FormInputEnabled = (): JSX.Element => (
  <Input
    placeholder="enter..."
    userDataValue="Bolock"
    setUserDataValue={(data) => console.log('huhu', data)}
    isDisabled={false}
  />
);

export const FormInputDisabled = (): JSX.Element => (
  <Input
    userDataValue="Mi.22.10"
    setUserDataValue={(data) => console.log('huhu', data)}
    isDisabled={true}
  />
);

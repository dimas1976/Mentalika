import React from 'react';
import Input from './Input';

export default {
  title: 'Component/Input',
  component: Input,
};

export const FormInputEnabled = (): JSX.Element => (
  <Input
    placeholder="enter..."
    value="Bolock"
    onValueChange={(data) => console.log('huhu', data)}
    isDisabled={false}
  />
);

export const FormInputDisabled = (): JSX.Element => (
  <Input
    value="Mi.22.10"
    onValueChange={(data) => console.log('huhu', data)}
    isDisabled={true}
  />
);

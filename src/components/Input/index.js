import React from 'react';
import { InputContainer } from './style.js';

export default function Input({ value }) {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
}

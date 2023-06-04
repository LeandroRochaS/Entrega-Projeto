import { ButtonContainer } from './style.js';

export default function Button({ label, onClick }) {
  return (
    <ButtonContainer onClick={onClick} type='button'>
      {label}
    </ButtonContainer>

  );
}


import { Container, Content, Row } from "./styles.js";
import { TiBackspaceOutline } from "react-icons/ti";
import { useState } from 'react';



// Components
import Button from './components/Button';
import Input from './components/Input';
import Header from './components/Header/index.js';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');

  const handleOnClear = () => {
    setCurrentNumber('0');
  };


  function handleSubmitAddNumber(number) {
    setCurrentNumber(prev => prev === '0' ? number : `${prev}${number}`);
  }

  const handleCalculateResult = () => {
    // eslint-disable-next-line no-eval
    setCurrentNumber(prev => eval(prev));
  };

  const handleDeleteLastNumber = () => {
    setCurrentNumber(prev => prev.toString().substring(0, prev.toString().length - 1));
  };


  return (
    <>
      <Header />
      <Container >
        <Content>
          <Input value={currentNumber} />

          <Row>
            <Button label="AC" onClick={() => handleOnClear()} />
            <Button label={< TiBackspaceOutline style={{ backgroundColor: "transparent" }} />} onClick={() => handleDeleteLastNumber()} />
            <Button label="/" onClick={() => handleSubmitAddNumber('/')} />
            <Button label="*" onClick={() => handleSubmitAddNumber('*')} />
          </Row>

          <Row>
            <Button label="9" onClick={() => handleSubmitAddNumber('9')} />
            <Button label="8" onClick={() => handleSubmitAddNumber('8')} />
            <Button label="7" onClick={() => handleSubmitAddNumber('7')} />
            <Button label="-" onClick={() => handleSubmitAddNumber('-')} />

          </Row>

          <Row>
            <Button label="6" onClick={() => handleSubmitAddNumber('6')} />
            <Button label="5" onClick={() => handleSubmitAddNumber('5')} />
            <Button label="4" onClick={() => handleSubmitAddNumber('4')} />
            <Button label="+" onClick={() => handleSubmitAddNumber('+')} />
          </Row>

          <Row>
            <Button label="3" onClick={() => handleSubmitAddNumber('3')} />
            <Button label="2" onClick={() => handleSubmitAddNumber('2')} />
            <Button label="1" onClick={() => handleSubmitAddNumber('1')} />
            <Button label="=" onClick={() => handleCalculateResult()} />

          </Row>

        </Content>
      </Container >
    </>
  );
}

export default App;

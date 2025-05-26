import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  return (
    <>
      <Input text={text} setText={setText} label="First input" />
      <Input text={text} setText={setText} label="Second input" />
    </>
  );
}
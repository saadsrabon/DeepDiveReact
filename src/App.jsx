import { useState } from 'react';
import { BackgroundProvider } from './contexts/BgColorContext';
import BgWrapper from './components/bgWrapper';

export default function App() {
  const [text, setText] = useState('');
  return (
    <>
      {/* <Input text={text} setText={setText} label="First input" />
      <Input text={text} setText={setText} label="Second input" /> */}


      <BackgroundProvider>
        <BgWrapper>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Background Color Context Example</h1>
            <p className="mb-4">This is a simple example of using context to manage background color.</p>
            <button
              onClick={() => setText('Hello World')}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Change Text
            </button>
            <p className="mt-4">{text}</p>
          </div>
        </BgWrapper>
        
      </BackgroundProvider>

    </>
  );
}
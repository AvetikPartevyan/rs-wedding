import { useState } from "react";
import FirstPage from '../src/components/firstPage.tsx'
import SecondPage from '../src/components/secondPage.tsx';
function App() {
  const [showSecondPage, setShowSecondPage] = useState(false);

  return (
    <>
    {showSecondPage ? (
      <SecondPage />
    ) : (
      <FirstPage onContinue={() => setShowSecondPage(true)} />
    )}
  </>
  )
}

export default App

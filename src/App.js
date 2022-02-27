import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="My-App"/>
      <TextForm heading="Enter the Text to Analyze"/>
    </>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-screen-white flex w-full h-screen justify-center align-middle ">
        <div className="hero_content  flex justify-center gap-8 align-middle flex-col mt-[-200px]">
          <p className='items-center text-center header1 font-poppins'>Discover & Share</p>
          <span className='items-center text-center header2 font-poppins'>AI Powered Prompts</span>
          <p className='items-center text-center text-xl'>
            PromptMe is a simple, open-source, and privacy-focused prompt
            generator for writers, artists, and more.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

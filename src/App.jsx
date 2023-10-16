import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-screen-white flex w-full h-[80vh] justify-center align-middle ">
        <div className="hero_content  flex justify-center gap-8 align-middle flex-col mt-[-200px]">
          <p className="items-center text-center header1 font-poppins">
            Discover & Share
          </p>
          <span className="items-center text-center header2 font-poppins">
            AI Powered Prompts✨
          </span>
          <p className="items-center text-center oneliner text-xl">
          AI-fueled creativity On-Chain incentivizing your creations through prompt generation!
          </p>

          <button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:from-teal-500 hover:to-blue-600">
            Get This Extension From Chrome Store
          </button>  <button className="bg-gradient-to-r from-teal-900 to-blue-900 text-white font-semibold py-2 px-4 rounded-md hover:from-teal-700 hover:to-blue-700">
            Whitepaper 📰
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

// Components
import Article from "./components/article/article";
import Brand from "./components/brand/brand";
import Navbar from "./components/navbar/navbar";
import Feature from "./components/feature/feature";
import Cta from "./components/cta/cta";

// Containers
import Blog from "./containers/blog/blog";
import Features from "./containers/features/features";
import Footer from "./containers/footer/footer";
import Header from "./containers/header/header";
import Possibility from "./containers/possibility/possibility";
import WhatGPT3 from "./containers/whatGPT3/whatGPT3";
// import { Blog, Features , Footer, Header, Possibility, WhatGPT3} from "./containers"

function App() {
  return (
   <>

   <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
    <Brand />
    
    <WhatGPT3 />
    <Feature/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
   </div>
   </>
  );
}

export default App;

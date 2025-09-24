import About from './About'
import './App.css'
import Features from './Features'
import Footer from './Footer'
import Gellery from './Gellery'
import Header from './Header'
import HeroSection from './HeroSection'
import Images from './Images'
import Review from './Review'
import Services from './Services'

function App() {

  return (
    <>
   <Header />
   <HeroSection />
   <Features />
   <About />
   <Services />
    <Gellery />
 <div className="images">
     <div className="img"><Images imgSrc="./02-small.jpg.jpeg" /></div>
   <div className='img'> <Images imgSrc="./04-large.jpg.jpeg" /></div>
     <div className='img'> <Images imgSrc="./05-large.jpg.jpeg" /></div>
   <div className='img'> <Images imgSrc="06-large.jpg.jpeg" /></div>
     <div className='img'> <Images imgSrc="08-large.jpg.jpeg" /></div>
   <div className='img'> <Images imgSrc="09-large.jpg.jpeg" /></div>
     <div className='img'> <Images imgSrc="03-small.jpg.jpeg" /></div>
   <div className='img'> <Images imgSrc="about.jpg.jpeg" /></div>
     <div className='img'> <Images imgSrc="02-small.jpg.jpeg" /></div>
 </div>
 <Footer />
    </>
  )
}

export default App

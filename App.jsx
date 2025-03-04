import Footer from './components/Footers/Footer.jsx'
import Navigation from './components/Navbar/Navigation';
import Home from './components/Hero/Home.jsx'
import Aboutt from './components/About/Aboutt.jsx'
import Mypro from './components/Mywork/Mypro.jsx';
import Services from './components/Serviece/Services.jsx';
import Contactt from './components/Contacts/Contactt.jsx';
import WebsiteChatBot from './components/ChatBot/WebsiteChatBot.jsx';
// import Chat from './components/ChatBot/WebsiteChatBot.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-black-50 font-sans overflow-x-hidden">
      {/* Fixed navigation */}
      <div className="fixed top-0 z-10 w-full ">
        <Navigation />
      </div>
     <WebsiteChatBot/>
      {/* Main content sections */}
      <main className="w-full">
        {/* Hero section with full height */}
        <br />
        <section id="home" className="min-h-screen w-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Home />
          </div>
        </section>
      {/* <hr className='bg-amber-600' /> */}
        {/* About section with responsive padding */}
        <section id="about" className="py-12 md:py-16 lg:py-20 w-full bg-black-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Aboutt />
          </div>
        </section>
        {/* Portfolio section with responsive grid */} 
        <br />
        <br />
        <section id="portfolio" className="py-12 md:py-16 lg:py-20 w-full bg-black-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Mypro />
          </div>
        </section>
        
        {/* Services section with responsive layout */}
        <br /><br />
        <section id="services" className="py-12 md:py-16 lg:py-20 w-full bg-black-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Services />
          </div>
        </section>
        
        {/* Contact section with responsive form */}
        <section id="contact" className="py-12 md:py-16 lg:py-20 w-full bg-black-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Contactt />
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="w-full bg-black -800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App;





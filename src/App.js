
import './App.css';
import Nav from './Components/Nav';
import CustomerReviews from './Sections/CustomerReviews';
import Footer from './Sections/Footer';
import Hero from './Sections/Hero';
import PopularProducts from './Sections/PopularProducts';
import Services from './Sections/Services';
import SpecialOffers from './Sections/SpecialOffers';
import SubscribeApp from './Sections/SubscribeApp';
import SuperQuality from './Sections/SuperQuality';

function App() {
  return (
   <main className='relative'>
    <Nav />
    <section className='xl:padding-1 wide:padding-r padding-b'>
      <Hero />

    </section>
    <section className='padding'> 
      <PopularProducts />

    </section>
    <section className='padding'>
        <SuperQuality />
    </section>

    <section className='padding-x py-10'>
        <Services />

      </section>
     
      <section className='padding'>
         <SpecialOffers />
      </section>
      <section className='padding bg-pale-blue padding'>
           <CustomerReviews />
        </section>

        <section className='padding-x sm:py-32 py-16 w-full'>
           <SubscribeApp />
        </section>
  
        <section className='padding bg-black padding-x padding-t pb-8'>
          <Footer />
      </section>

     
   

   </main>
  );
}

export default App;

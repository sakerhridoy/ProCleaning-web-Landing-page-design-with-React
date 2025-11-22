import './App.css'
import Banner from './components/Banner/Banner'
import Blog from './components/Blog/Blog';
import ExpertTeam from './components/ExpertTeam/ExpertTeam';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import GetQuote from './components/GetQuote/GetQuote';
import Header from './components/Header/Header'
import PricePlan from './components/PricePlan/PricePlan';
import ServiceNews from './components/ServiceNews/ServiceNews';
import Services from './components/Services/Services';

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Services />
      <GetQuote />
      <ExpertTeam />
      <Blog />
      <PricePlan />
      <Feedback />
      <ServiceNews />
      <Form />
      <Footer/>
    </>
  )
}

export default App

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import TutorialDetail from './pages/TutorialDetail';

import {BrowserRouter, Route} from 'react-router-dom';
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
          <ScrollToTop />
          <Route path="/" component={Home} exact />
          <Route path="/tutoriais/:id" component={TutorialDetail} />
        
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

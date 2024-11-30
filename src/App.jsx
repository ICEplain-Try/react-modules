import "./App.css";

import {
  Header,
  Footer,
  FAQ,
  ProductSection,
  MainContent,
} from "./components/Content";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

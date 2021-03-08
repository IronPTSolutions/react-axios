import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Section from './components/section/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container py-5">
        <Section title="Example section">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum temporibus suscipit commodi saepe unde doloribus ab nulla delectus eveniet molestias dolorem, voluptas hic ipsa exercitationem ullam optio possimus perferendis necessitatibus.</p>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default App;

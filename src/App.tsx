
import './App.css';
import { Footer, Header } from './components';


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-primary">
          LSofecia DEV BRANCH TO WORK
        </h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;

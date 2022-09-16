import './App.scss';
import Comments from './components/Comments';
// import FileUpload from './components/FileUpload';
import Goals from './components/Goals';
import Header from './components/Header';
import Values from './components/Values';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Values />
        <Goals />
        <Comments />
      </div>
    </>
  );
}

export default App;

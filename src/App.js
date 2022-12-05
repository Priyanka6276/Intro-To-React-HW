//components
import Menu from './components/Menu'
import SmallMenu from './components/Small-Menu'
import WebsiteVisitors from './components/Website-Visitors'


//css
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <Menu />
        <SmallMenu />
        <WebsiteVisitors />
      </div>
    </>

  )
}

export default App;

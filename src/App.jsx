
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import QnA from './components/QnA/QnA'

function App() {

  return (
    <div className="App">
        <Header></Header>
        <Blogs></Blogs>
        <QnA></QnA>
    </div>
  )
}
export default App

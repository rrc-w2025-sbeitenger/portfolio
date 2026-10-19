import { Routes, Route } from 'react-router'
import Home from './components/pages/Home/Home'
import Layout from './components/common/layout/Layout'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App

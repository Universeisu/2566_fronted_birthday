import { useState } from 'react'
import data from './data'
import './App.css'
import List from './List'


function App() {
  const [people, setPeople] = useState(data);
  const clearAll = () =>{
    setPeople([]);
  }
  return (
      <div>
        <h1>Woekshop 1 : Birthday List Projest</h1>
        <h2>Arthittaya Kongdee</h2>
        <main>
          <section className="container">
            <h3>{people.length} birthday today</h3>
            <List people = {people}/>
              <button>Clear all</button>
          </section>
        </main>
       
        
      </div>
      
  )
}

export default App

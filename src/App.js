import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import { useState } from 'react';

function App() {
  const [selectedColor, setSelectedColor] = useState("")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [cards, setCards] = useState([])
  const Save = (e) => {
    e.preventDefault();
      setCards([...cards, { selectedColor, title, desc, }])
      setIsFormOpen(false)
      // setTitle("")
      // setDesc("")
      // setSelectedColor("");
    
    // console.log(cards)
  }
  const Cancel = (e) => {
    e.preventDefault();
    setIsFormOpen(false)
    // setTitle("")
    // setDesc("")
    // setSelectedColor("");
  }

  return (
    <div className="container my-4 main-cnt">
      <div className="form-cnt">
        <div className='create-card-btn btn btn-primary' onClick={(e) => { e.preventDefault(); setIsFormOpen(!isFormOpen); }}>create card</div>
        <div className={isFormOpen ? `open colors` : `colors`}>
          <div className='color-cnt bg-success' onClick={() => setSelectedColor("green")}></div>
          <div className='color-cnt bg-dark' onClick={() => setSelectedColor("black")}></div>
          <div className='color-cnt bg-danger' onClick={() => setSelectedColor("red")}></div>
          <div className='color-cnt bg-warning' onClick={() => setSelectedColor("yellow")}></div>
        </div>
          <div className={isFormOpen ? `open selected-color mt-2` : `selected-color mt-2`}>{selectedColor}</div>
        <div className={isFormOpen ? `open title-cnt` : `title-cnt`} >
          <input className='w-100 mt-2 p-1 ' onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Give a title' />
        </div>
        <div className={isFormOpen ? `open desc-cnt` : `colors desc-cnt`}>
          <label htmlFor="desc">Description</label>
          <textarea className='w-100' type="text" placeholder='write a desc' rows="5" maxLength={300} onChange={(e) => setDesc(e.target.value)} />
          <div className="btn-cnt d-flex my-4 justify-content-around">
            <button className='btn btn-success' onClick={Save}>save</button>
            <button className='btn btn-danger' onClick={Cancel}>cancel</button>
          </div>
        </div>
      </div>

      {/* <Cards title='green' desc ='asdifj' selectedColor = 'yellow'/> */}
      {cards.map(i => {
        return <Cards title={i.title} desc={i.desc} selectedColor={i.selectedColor} />
      })}
    </div>
  );
}

export default App;

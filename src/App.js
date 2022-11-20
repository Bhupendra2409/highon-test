import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [attributes, setAttributes] = useState([])

  useEffect(() => {
    axios.get('https://demo2965432.mockable.io/highon/colors').then(res => {
      setAttributes(res.data.data);
    });
  }, [])

  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [moreDetail, setMoreDetail] = useState({})
  const [desc, setDesc] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [cards, setCards] = useState([])
  const [code, setCode] = useState("")
  const Save = (e) => {
    e.preventDefault();

    setCards([...cards, { moreDetail, code, name, title, desc }])
    setIsFormOpen(false)
    // setTitle("")
    // setDesc("")
    // setname("");

    // console.log(cards)
  }
  const Cancel = (e) => {
    e.preventDefault();
    setIsFormOpen(false)
  }

  return (
    <div className="container my-4 main-cnt">
      <div className="form-cnt">
        <div className='create-card-btn btn btn-primary' onClick={(e) => { e.preventDefault(); setIsFormOpen(!isFormOpen); }}>create card</div>
        <div className={isFormOpen ? `open colors` : `colors`}>
          {attributes !== {} ?
            attributes.map(item => {
              return <div className="color-cnt" onClick={() => {
                setCode(item.code);
                setName(item.name);
                setMoreDetail(item.data);
              }} style={{ backgroundColor: `${item.code}` }}></div>
            })
            : <div></div>}

        </div>
        <div className={isFormOpen ? `open selected-color mt-2` : `selected-color mt-2`}>{name}</div>
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

      {/* <Cards title='green' desc ='asdifj' name = 'yellow'/> */}
      {cards.map(i => {
        return <Cards code={i.code} moreDetail={i.moreDetail} title={i.title} desc={i.desc} name={i.name} />
      })}
    </div>
  );
}

export default App;

import './Search.css'

export default function Search() {
  return (
    <div className='search'>
      <h1>Search Your Best Cars</h1>
      <p>Using 'Content here, content here', making it look like readable
</p>
<div className='option'>
    <select >
       
        <option selected disabled>price</option>
        <option>1</option>
        <option>2</option>
        <option >3</option>
        <option>4</option>
    </select>
    <select>
        <option selected disabled>Helicoptewr</option>
        <option>Private Plane</option>
        <option >Fighter Jet</option>
        <option>PIA</option>
    </select>
    <select>
        <option selected disabled>Toyota V8</option>
        <option>Sygenic</option>
        <option >Toyota Revo</option>
        <option>Prado</option>
    </select>
    
    <button className='search-btn'>SEARCH NOW</button>
</div>

    </div>
  )
}

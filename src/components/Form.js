const Form = ({handleCoordinateChange}) => {
  return (
    <div className="w-75 mx-auto">
      <form autoComplete="off">
        {/* <input className="form-control w-25 my-3 mx-auto" name="x" onChange={(e) => handleCoordinateChange(e)}/>
        <input className="form-control w-25 my-3 mx-auto" name="y" onChange={(e) => handleCoordinateChange(e)}/> */}
        {/* <input className="form-control w-25 my-3 mx-auto" type="number" name="h" onChange={(e) => handleCoordinateChange(e)}/> */}
        
        <label>Wall Height</label>
        <select name="h" className="form-control mb-3"  onChange={(e) => handleCoordinateChange(e)}>
          <option value="96">8'</option>
          <option value="108">9'</option>
          <option value="120">10'</option>
          <option value="132">11'</option>
          <option value="144">12'</option>
          <option value="156">13'</option>
          <option value="168">14'</option>
        </select>
        <label>Stud Spacing</label>
        <select name="stud" className="form-control mb-3"  onChange={(e) => handleCoordinateChange(e)}>
          <option value="16">16"</option>
          <option value="24">24"</option>
        </select>
        <label>Windows</label>
        <select name="windows" className="form-control mb-3"  onChange={(e) => handleCoordinateChange(e)}>
          <option value="0">none</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </form>
    </div>
  )

}

export default Form
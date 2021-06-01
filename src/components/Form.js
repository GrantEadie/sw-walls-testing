const Form = ({ handleTraitChange, trait }) => {

  return (
    <div className="w-75 mx-auto">
      <form autoComplete="off">
        {/* <input className="form-control w-25 my-3 mx-auto" name="x" onChange={(e) => handleTraitChange(e)}/>
        <input className="form-control w-25 my-3 mx-auto" name="y" onChange={(e) => handleTraitChange(e)}/> */}
        {/* <input className="form-control w-25 my-3 mx-auto" type="number" name="h" onChange={(e) => handleTraitChange(e)}/> */}

        <br />
        <label>Wall Height</label>
        <select
          name="h"
          className="form-control mb-3"
          onChange={(e) => handleTraitChange(e)}
        >
          <option value="96">8'</option>
          <option value="108">9'</option>
          <option value="120">10'</option>
          <option value="132">11'</option>
          <option value="144">12'</option>
          <option value="156">13'</option>
          <option value="168">14'</option>
        </select>
        <label>Stud Spacing</label>
        <select
          name="stud"
          className="form-control mb-3"
          onChange={(e) => handleTraitChange(e)}
          
        >
          <option value="16">16"</option>
          <option value="24">24"</option>
        </select>
        <label>Windows</label>
        <select
          name="windows"
          className="form-control mb-3"
          onChange={(e) => handleTraitChange(e)}
        >
          <option value="0">none</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <div className="row" style={{display: !trait.windows ? "none" : "flex"}}>
          <div className="col-3"></div>
          <div className="col-9">
            <label>Type</label>
            <select
              name="windowType"
              className="form-control mb-3"
              onChange={(e) => handleTraitChange(e)}
            >
              <option value="0">STANDARD</option>
              <option value="1">CASEMENT</option>
            </select>
            <label>Sill Height (inches)</label>
            <input
              className="form-control mb-3"
              type="number"
              name="sill"
              step=".5"
              min="10"
              value={trait.sill/trait.pixels}
              
              onChange={(e) => handleTraitChange(e)}
            ></input>
            <label>Width (inches)</label>
            <input
              disabled={!trait.windowType}
              className="form-control mb-3"
              type="number"
              name="windowW"
              min="24"
              max="42"
              
              value={!trait.windowType || trait.windowW > 42*trait.pixels ? '42' : trait.windowW/trait.pixels}
              
              onChange={(e) => handleTraitChange(e)}
            ></input>
            <label>Height (inches)</label>
            <input
              step=".5"
              className="form-control mb-3"
              type="number"
              name="windowH"
              value={trait.windowH/trait.pixels}
              onChange={(e) => handleTraitChange(e)}
            ></input>
            <label>Header</label>
            <select
              className="form-control mb-3"
              type="number"
              name="header"
              onChange={(e) => handleTraitChange(e)}
            >
              <option value="5.5">2 x 6</option>
              <option value="7.25">2 x 8</option>
              <option value="9.25">2 x 10</option>
              <option value="11.25">2 x 12</option>
            </select>
            <label>Header Amount</label>
            <select
              className="form-control mb-3"
              type="number"
              name="headerAmount"
              onChange={(e) => handleTraitChange(e)}
            >
              <option value="0">SINGLE</option>
              <option value="1">DOUBLE</option>
              <option value="2">TRIPLE</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

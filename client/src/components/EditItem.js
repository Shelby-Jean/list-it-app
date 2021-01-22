const EditItem = () => {
  return (
    <div>
      <form className="form">
        <input className="input" type="text" placeholder="item name" />
        <select className="input" defaultValue="category">
            <option value="" disabled selected>category</option>
            <option value="bakery">bakery</option>
            <option value="dairy">dairy</option>
        </select>
        <input className="input" type="number" placeholder="quantity" />
        <button className="button" type="submit">SAVE ITEM</button>
      </form>
    </div>
  );
}

export default EditItem;
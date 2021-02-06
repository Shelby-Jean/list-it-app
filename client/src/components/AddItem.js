import { MdAddShoppingCart } from 'react-icons/md';

const AddItem = () => {
  return (
    <div>
      <form>
        <input className="input" type="text" placeholder="new item" />
        <button className="button" type="submit">
          <MdAddShoppingCart />
        </button>
      </form>
    </div>
  );
}

export default AddItem;
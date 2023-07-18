import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const ToDo = () => {
    const imgStyle = {
        height: '100px',
        width: '100px'
    }

    const [items, setItem] = useState([]);
    const [inputData, setInput] = useState('');

    const addItem = () => {
        if (!inputData) {
            return;
        }
        else {
            const newItem = { task: inputData, completed: false }; // Create a new task object
            setItem([...items, newItem]); 
            setInput('');

        }
    }

    const deleteItem = (index) => {
        items.splice(index, 1);
        setItem([...items])
    }

    const handleCheckboxChange = (index) => {
        const updatedItems = [...items];
        updatedItems[index].completed = !updatedItems[index].completed;
        setItem(updatedItems);
    };
    return (
        <>
          <div className="main-div">
            <div className="child-div">
              <figure>
                <img src="src/assets/images/toDO-logo.png" alt="To-Do Logo" style={imgStyle} />
                <figcaption>Your To-Do, Your Way!</figcaption>
              </figure>
              <div className="addItems">
                <input
                  type="text"
                  placeholder="✍ Add here ...."
                  className='add_task'
                  value={inputData}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addItem} className="add-btn">
                  <FontAwesomeIcon icon={faPlus} title="Add Item" />
                </button>
              </div>
              <div className="showItem">
              {items.length === 0 ? (
            <p>No tasks available!!!😴</p>
          ) : 
                (items.map((element, i) => (
                  <div className="eachItem" key={i}>
                    <input
                      type="checkbox"
                      title={element.completed ? 'Completed' : 'Check to mark as completed'}
                      checked={element.completed}
                      onChange={() => handleCheckboxChange(i)}
                    />
                    <h5 style={{ textDecoration: element.completed ? 'line-through' : 'none' }}>
                      {element.task}
                    </h5>
                    <FontAwesomeIcon icon={faTrash} title="Delete Item" onClick={() => deleteItem(i)} />
                  </div>
                )))}
              </div>
            </div>
        
          </div>
        </>
      );
};

export default ToDo;
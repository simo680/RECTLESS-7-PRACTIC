import { useState } from "react"
import './App.css'

function App() {

    const data = [
        { id: 1, name: 'Велосипед', price: 1000, count: 1 },
        { id: 2, name: 'Самокат', price: 700, count: 1 },
        { id: 3, name: 'Ролики', price: 1300, count: 2 },
        { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
    ]

    const [items, setItems] = useState(data)

    function addNewItem() {
        let [name, price] = prompt().split(' ')
        let NewItem = {
            id: Date.now(),
            name,
            price,
            count: 1
        }
        setItems([...items, NewItem])
    }

    function incrementCount(id) {
        const updatedItems = items.map((items) => {
            if (items.id === id && items.count < 25) {
                return { ...items, count: items.count + 1 };
            }
            return items;
        });
        setItems(updatedItems);
    }

    function decrementCount(id) {
        const updatedItems = items.map((items) => {
            if (items.id === id && items.count > 1) {
                return { ...items, count: items.count - 1 };
            }
            return items;
        });
        setItems(updatedItems);
    }

    function removeItems(id) {
        let removeItems = items.filter((elem => elem.id !== id))
        setItems(removeItems)
    }



    return (
        <div className="Main">
            <h1>Предметы</h1>
            <div className="ListItems">
                <button onClick={() => addNewItem()}>Add New Item</button>
            </div>
            <div className="items-container">
                {items.map(elem =>
                    <div onDoubleClick={() => removeItems(elem.id)} className="item" key={elem.id}>
                        <h3>{elem.name}</h3>
                        <p>{elem.price}</p>
                        <div className="count-buttons">
                            <button className="mobile-button" onClick={() => decrementCount(elem.id)}>-</button>
                            <p>{elem.count}</p>
                            <button className="mobile-button" onClick={() => incrementCount(elem.id)}>+</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App

import { useContext } from "react";
import { OrderContext } from "../App";
import menuData from "../data/menu.json";

function MenuList() {
  const { order, setOrder } = useContext(OrderContext);

  const addToOrder = (item) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((i) => i.id === item.id);
      if (existingItem) {
        return prevOrder.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      } else {
        return [...prevOrder, { ...item, quantity: 1 }];
      }
    });
    console.log("Giỏ hàng hiện tại:", order);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Thực Đơn</h2>
      <div className="row">
        {menuData.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src={process.env.PUBLIC_URL + item.image}
                alt={item.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="fw-bold text-danger">{item.price} VND</p>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => addToOrder(item)}
                >Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuList;
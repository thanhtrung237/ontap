import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function BookTable() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Đặt bàn thành công!\nTên: ${name}\nSĐT: ${phone}\nSố khách: ${guests}`);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Đặt Bàn</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Họ và Tên</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Nhập tên" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Số điện thoại</label>
            <input 
              type="tel" 
              className="form-control" 
              placeholder="Nhập số điện thoại" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Số khách</label>
            <input 
              type="number" 
              className="form-control" 
              min="1" 
              value={guests} 
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)} 
              required 
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Xác nhận đặt bàn
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookTable;
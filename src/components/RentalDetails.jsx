import React, { useEffect, useState } from "react";
import { getRental } from "../services/rentalApi";

export default function RentalDetails({ id }) {
  const [rental, setRental] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getRental(id)
      .then(data => {
        setRental(data);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (!id) return <div>請提供租屋 ID</div>;
  if (loading) return <div>載入中...</div>;
  if (error) return <div style={{ color: "red" }}>錯誤: {error}</div>;
  if (!rental) return <div>找不到租屋資料</div>;

  return (
    <div>
      <h2>{rental.title}</h2>
      <p><strong>價格：</strong>NT${rental.price}</p>
      <p><strong>地址：</strong>{rental.address}</p>
      <p><strong>房間：</strong>{rental.bedrooms} 房 / {rental.bathrooms} 衛</p>
      <p>{rental.description}</p>
      {rental.images && rental.images.length > 0 && (
        <div style={{ display: "flex", gap: "8px" }}>
          {rental.images.map((src, idx) => (
            <img key={idx} src={src} alt={`img-${idx}`} style={{ width: 200, height: 150, objectFit: "cover" }} />
          ))}
        </div>
      )}
      {rental.tags && rental.tags.length > 0 && (
        <div>
          {rental.tags.map(tag => <span key={tag} style={{ marginRight: "8px" }}>#{tag}</span>)}
        </div>
      )}
    </div>
  );
}

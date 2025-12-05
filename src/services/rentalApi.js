const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";

export async function getRental(id) {
  const res = await fetch(`${API_BASE}/api/rentals/${encodeURIComponent(id)}`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch rental ${id}: ${res.status} ${text}`);
  }
  return await res.json();
}

export async function listRentals() {
  const res = await fetch(`${API_BASE}/api/rentals`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch rentals: ${res.status} ${text}`);
  }
  return await res.json();
}

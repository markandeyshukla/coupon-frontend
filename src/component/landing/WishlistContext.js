import { createContext, useContext, useEffect, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const fetchWishlist = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const res = await fetch('http://localhost:5000/api/wishlist/my', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setWishlist(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch wishlist", err);
      setWishlist([]);
    }
  };

  const toggleWishlist = async (coupon) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Please login first.");
      return;
    }

    const exists = wishlist.find((w) => w?.coupon?._id === coupon._id);

    try {
      if (exists) {
        await fetch(`http://localhost:5000/api/wishlist/remove/${coupon._id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        });
        setWishlist((prev) => prev.filter((w) => w?.coupon?._id !== coupon._id));
        // alert('Removed from wishlist');
      } else {
        const res = await fetch('http://localhost:5000/api/wishlist/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ couponId: coupon._id })
        });

        if (res.ok) {
          const newItem = await res.json();
          setWishlist((prev) => [...prev, newItem]);
          // alert('Added to wishlist');
        }
      }
    } catch (err) {
      console.error("Error updating wishlist", err);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

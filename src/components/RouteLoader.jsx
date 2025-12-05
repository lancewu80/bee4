import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

const RouteLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const minTime = new Promise(res => setTimeout(res, 500)); // at least 0.5s
    const loadDone = new Promise(res => window.requestIdleCallback(res, { timeout: 2000 }));

    Promise.all([minTime, loadDone]).then(() => setLoading(false));
  }, [location.pathname]);

  return (
    <>
      {/* Inline Styles */}
      <style>{`
        .route-loader {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.3s ease;
        }
.loader {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  box-sizing: border-box;
  border-top: 8px solid #fff;
  border-left: 8px solid #fff;
  border-right: 8px solid #ff00;
  animation: loader .7s infinite linear;
}

@keyframes loader {
  to {
    transform: rotate(360deg);
  }
}
      `}</style>

      {loading && (
        <div className="route-loader">
          <div className="loader"></div>
        </div>
      )}

      <div style={{ opacity: loading ? 0.3 : 1, transition: "opacity 0.3s ease" }}>
        {children}
      </div>
    </>
  );
};

export default RouteLoader;

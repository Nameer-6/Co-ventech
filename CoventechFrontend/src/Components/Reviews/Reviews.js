import React, { useEffect } from 'react';

const ClutchWidget = () => {
  useEffect(() => {
    // Load Clutch widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://widget.clutch.co/static/js/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="clutch-widget mt-24"
         data-url="https://widget.clutch.co"
         data-widget-type="12"
         data-height="375"
         data-nofollow="true"
         data-expandifr="true"
         data-scale="100"
         data-primary-color="#F90003"
         data-secondary-color="#F90003"
         data-reviews="2287113,2262425,2262262,2225201,2198285,2188435,2184865,2165593"
         data-clutchcompany-id="2118350">
    </div>
  );
};

export default ClutchWidget;
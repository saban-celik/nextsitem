// src/components/ads/AdManager.tsx
import { useEffect, useState } from 'react';

const AdManager = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const loadAds = () => {
      if (typeof window !== 'undefined' && !(window as any).adsLoaded) {
        try {
          (window as any).adsbygoogle = (window as any).adsbygoogle || [];
          (window as any).adsbygoogle.push({});
          (window as any).adsLoaded = true;
        } catch (e) {
          console.error('Google Ads loading error:', e);
        }
      }
    };

    if (isClient) {
      loadAds();
    }
  }, [isClient]);

  return (
    <>
      {isClient && (
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx" // Kendi AdSense ID'ni ekle
          data-ad-slot="xxxxxxxxxx" // Kendi slot ID'ni ekle
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      )}
    </>
  );
};

export default AdManager;

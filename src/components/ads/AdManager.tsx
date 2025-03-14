// src/components/ads/AdManager.tsx
import { useEffect, useState } from 'react';

// Google Ads için Window nesnesine özel bir tür tanımı ekliyoruz
interface AdsWindow extends Window {
  adsbygoogle?: {
    push: (config: object) => void;
  };
  adsLoaded?: boolean;
}

const AdManager = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const loadAds = () => {
      // Türü AdsWindow olarak belirtiyoruz
      const adsWindow = window as unknown as AdsWindow;

      if (typeof window !== 'undefined' && !adsWindow.adsLoaded) {
        try {
          adsWindow.adsbygoogle = adsWindow.adsbygoogle || { push: () => {} };
          adsWindow.adsbygoogle.push({});
          adsWindow.adsLoaded = true;
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
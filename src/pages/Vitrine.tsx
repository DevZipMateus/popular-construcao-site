import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      // Altura total - header (80px)
      const height = window.innerHeight - 80;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);

    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <div className="w-full" style={{ height: `${iframeHeight}px` }}>
        <iframe 
          src="https://apopular.egestor.com.br/vitrine/" 
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;

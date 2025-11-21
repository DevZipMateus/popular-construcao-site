import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <div className="pt-20">
        <iframe 
          src="https://apopular.egestor.com.br/vitrine/" 
          className="w-full border-none"
          style={{ height: 'calc(100vh - 80px)' }}
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;

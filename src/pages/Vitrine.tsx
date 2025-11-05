import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <div className="pt-20 h-screen">
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

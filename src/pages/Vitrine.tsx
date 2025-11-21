import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden fixed inset-0">
      <Header />
      <div className="pt-20 h-full overflow-hidden">
        <iframe 
          src="https://apopular.egestor.com.br/vitrine/" 
          className="w-full border-none overflow-hidden"
          style={{ height: 'calc(100vh - 80px)' }}
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;

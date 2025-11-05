import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 w-full overflow-hidden">
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

import SalaryDetailsSection from "../components/SalaryDetailsSection";
import SalaryInputSection from "../components/SalaryInputSection";

const Home = () => {
  return (
    <main className="flex flex-1 flex-col gap-5 p-4 md:px-[128px] md:py-[142px] xl:flex-row">
      <SalaryInputSection />
      <SalaryDetailsSection />
    </main>
  );
};

export default Home;

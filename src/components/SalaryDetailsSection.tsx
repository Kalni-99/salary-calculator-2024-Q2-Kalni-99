const SalaryDetailsSection = () => {
  return (
    <section className="border-border flex flex-col gap-6 rounded-lg border p-4 xl:w-[480px]">
      <h1 className="heading-1">Your Salary</h1>

      <table>
        <tr className="flex-between">
          <th className="text-muted-foreground text-sm font-semibold">Items</th>
          <th className="text-muted-foreground text-sm font-semibold">
            Amount
          </th>
        </tr>
        <div className="mt-4 space-y-2">
          <tr className="flex-between">
            <td>Basic Salary</td>
            <td>100,000.00</td>
          </tr>
          <tr className="flex-between">
            <td>Gross Earning</td>
            <td>100,000.00</td>
          </tr>
          <tr className="flex-between">
            <td>Gross Deducation</td>
            <td>0.00</td>
          </tr>
          <tr className="flex-between">
            <td>Employee EPF (8%)</td>
            <td>-8,000.00</td>
          </tr>
          <tr className="flex-between">
            <td>APIT</td>
            <td>-0.00</td>
          </tr>
        </div>
        <tr className="flex-between mt-4 rounded-md border px-2 py-3 font-semibold">
          <td>Net Salary (Take Home)</td>
          <td>92,000.00</td>
        </tr>
        <div className="mt-4">
          <h3 className="text-muted-foreground text-sm font-semibold">
            Contribution from the Employer
          </h3>
          <div className="mt-2">
            <tr className="flex-between">
              <td>Employeer EPF (12%)</td>
              <td>12,000,00</td>
            </tr>
            <tr className="flex-between">
              <td>Employeer ETF (3%)</td>
              <td>3,000.00</td>
            </tr>
          </div>
          <div className="mt-4">
            <tr className="flex-between">
              <td>CTC (Cost to Company)</td>
              <td>107,000.00</td>
            </tr>
          </div>
        </div>
      </table>
    </section>
  );
};

export default SalaryDetailsSection;

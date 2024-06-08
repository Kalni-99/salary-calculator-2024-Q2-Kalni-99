import Button from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";

const SalaryInputSection = () => {
  return (
    <section className="border-border flex flex-1 flex-col gap-6 rounded-lg border bg-[#FAFAFA] px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="heading-1">Calculate Your Salary</h1>
        <Button
          type="button"
          variant="text"
          className="text-primary flex items-center space-x-2 px-0"
        >
          <img src="/icons/reset.svg" alt="reset" width={24} height={24} />
          <p className="font-semibold">Reset</p>
        </Button>
      </div>
      <div className="space-y-2">
        <h2 className="heading-2">Basic Salary</h2>
        <input
          type="text"
          value={"100,000.00"}
          className="border-border w-full max-w-[356px] rounded-sm border px-2 py-1.5 outline-none"
        />
      </div>
      <div className="space-y-2">
        <h2 className="heading-2">Earings</h2>
        <p className="text-muted-foreground text-sm">
          Allowance, Fixed Allowance, Bonus and etc.
        </p>
      </div>
      <Dialog>
        <DialogTrigger>
          <Button
            type="button"
            variant="text"
            className="text-primary flex w-max items-center space-x-2 px-0"
          >
            <img src="/icons/add.svg" alt="add" width={24} height={24} />
            <p className="font-semibold">Add New Allowance</p>
          </Button>
        </DialogTrigger>
        <DialogContent title="Add New Earnings">
          <div className="flex flex-col">
            <form className="flex flex-col gap-4 p-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="earnings_name"
                  className="text-primary font-semibold"
                >
                  Earnings Name
                </label>
                <input
                  type="text"
                  name="earnings_name"
                  id="earnings_name"
                  placeholder="Eg: Travel"
                  className="rounded-sm border px-2 py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-primary font-semibold">
                  Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="Eg: 10,000"
                  className="rounded-sm border px-2 py-1"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  name="epf/etf"
                  id="epf/etf"
                  className="h-4 w-4"
                />
                <label htmlFor="epf/etf" className="font-semibold">
                  EPF/ETF
                </label>
              </div>
            </form>
            <DialogFooter className="gap-4 px-6 border-t py-3">
              <Button variant="ghost" className="text-primary">
                Cancel
              </Button>
              <Button>Add</Button>
            </DialogFooter>
            {/* <div className="flex items-center justify-end gap-4 border-t bg-[#FAFAFA] px-6 py-3">
            </div> */}
          </div>
        </DialogContent>
      </Dialog>
      <span className="bg-border h-[2px] w-full" />
      <div className="space-y-2">
        <h2 className="heading-2">Deducation</h2>
        <p className="text-muted-foreground text-sm">
          Salary Advances, Loan Deducations and all
        </p>
      </div>
      <Button
        type="button"
        variant="text"
        className="text-primary flex w-max items-center space-x-2 px-0"
      >
        <img src="/icons/add.svg" alt="add" width={24} height={24} />
        <p className="font-semibold">Add New Deducation</p>
      </Button>
    </section>
  );
};

export default SalaryInputSection;

import React, { useState } from "react";
import { cn } from "../../lib/utils";

const Dialog = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <DialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </DialogContext.Provider>
  );
};

const DialogContext = React.createContext({
  isOpen: false,
  openDialog: () => {},
  closeDialog: () => {},
});

const useDialogContext = () => {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog components must be used within a DialogProvider");
  }
  return context;
};

const DialogTrigger = ({ children }: { children: React.ReactNode }) => {
  const { openDialog } = useDialogContext();

  return <button onClick={openDialog}>{children}</button>;
};

const DialogClose = ({ children }: { children: React.ReactNode }) => {
  const { closeDialog } = useDialogContext();

  return (
    <button onClick={closeDialog} className="w-full">
      {children}
    </button>
  );
};

const DialogPortal = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useDialogContext();

  if (!isOpen) return null;

  return <div>{children}</div>;
};

const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { closeDialog } = useDialogContext();

  return (
    <div
      ref={ref}
      onClick={closeDialog}
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
        className,
      )}
      {...props}
    />
  );
});

DialogOverlay.displayName = "DialogOverlay";

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ title, className, children, ...props }, ref) => {
    const { closeDialog } = useDialogContext();

    return (
      <DialogPortal>
        <DialogOverlay />
        <div
          ref={ref}
          className={cn(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-[540px] -translate-x-1/2 -translate-y-1/2 border shadow-lg duration-200 sm:rounded-sm",
            className,
          )}
          {...props}
        >
          <div className="flex items-center justify-between border-b px-6 py-4">
            <p className="text-lg font-bold">{title}</p>
            <button type="button" onClick={closeDialog} className="">
              <img src="/icons/clear.svg" alt="clear" width={24} height={24} />
            </button>
          </div>
          {children}
        </div>
      </DialogPortal>
    );
  },
);

DialogContent.displayName = "DialogContent";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogFooter,
};

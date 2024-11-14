import React, { createContext, useContext, useState } from "react";

type AccordionContextType = {
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
} | null;

const AccordionContext = createContext<AccordionContextType>(null);

const AccordionProvider = ({ children }: { children: React.ReactNode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      {children}
    </AccordionContext.Provider>
  );
};

const useAccordionContext = () => useContext(AccordionContext);

export { useAccordionContext, AccordionProvider };

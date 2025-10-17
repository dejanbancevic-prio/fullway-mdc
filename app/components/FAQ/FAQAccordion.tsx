"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SchemaScript from "@components/seo/SchemaScript";
import { getFaqSchema } from "@lib/seo/seoSchemas";

const FAQAccordion = () => {
  const [expandAll, setExpandAll] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const items = [
    {
      value: "item-1",
      question: "WHO MAKES FULLWAY TIRES",
      answer: ` 
            Fullway tires, including the Fullway HP108, are manufactured by GOLDEN HORSE RUBBER SDN BHD. 
            Different types of tires are produced yearly under the Fullway banner for the replacement tire market. 
            Fullway Tires offer a good choice, budget tire models.`,
    },
    {
      value: "item-2",
      question: "ARE FULLWAY TIRES GOOD OR BAD?",
      answer: ` We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days. All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.`,
    },
    {
      value: "item-3",
      question: "WHERE ARE FULLWAY TIRES MADE?",
      answer: `Fullway tires are manufactured in Malaysia by GOLDEN HORSE RUBBER SDN BHD. 
            The company uses state-of-the-art technologies to design and produce good-quality tires at budget- friendly prices.
            Fullway tires are imported to the US, therefore, they meet safety and performance expectations.`,
    },
  ];

  const allValues = items.map((item) => item.value);

  const faqSchema = getFaqSchema(items);

  return (
    <div className="w-full">
      <SchemaScript id={"faq-schema"} schema={faqSchema} />
      {expandAll ? (
        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={(val: string[]) => setOpenItems(val)}
          className="w-full border-b-1 border-black transition-all duration-300"
        >
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b-1 border-black"
            >
              <AccordionTrigger className="font-[600] text-[1.25rem] cursor-pointer">
                <p>{item.question}</p>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[1rem] text-balance">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full border-b-1 border-black transition-all duration-300"
        >
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b-1 border-black"
            >
              <AccordionTrigger className="font-[600] text-[1.25rem] cursor-pointer">
                <p>{item.question}</p>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-[1rem] text-balance">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      <div className="flex justify-center">
        <Button
          onClick={() => {
            setExpandAll(!expandAll);
            setOpenItems(allValues);
          }}
          className="buttonSkew-white text-base font-[700] w-[14.688rem] mt-[1.5rem] mb-[1rem] md:mb-[1.5rem] "
        >
          VIEW ALL QUESTIONS
        </Button>
      </div>
    </div>
  );
};

export default FAQAccordion;

import { useState } from 'react';
// import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

export const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b mt-8">
      <h3
        className="text-xl font-medium py-4 flex transition-max-height duration-200 ease-in-out justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {/* <span>{isOpen ? <SlArrowUp /> : <SlArrowDown />}</span> */}
        <span>{isOpen ? ' v' : '^'}</span>
      </h3>
      <div
        className={`overflow-hidden transition-max-height duration-200 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
};

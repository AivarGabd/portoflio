"use client";

const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" }
];

import ExampleWrapper from "@/components/ExampleWrapper";
import { useIsMobile } from "@/lib/useIsMobile";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronsUpDown, Search, User } from "lucide-react";
import { useEffect, useState } from "react";

const ExpandableButtons = () => {
  const isMobile = useIsMobile();

  const [isSelectorOpen, setSelectorOpen] = useState(false);
  const [isSelectorExpanded, setIsSelectorExpanded] = useState(false);
  const [isInputExpanded, setIsInputExpanded] = useState(false);
  const [isButtonExpanded, setIsButtonExpanded] = useState(false);

  const clickAwayListener = () => {
    setSelectorOpen(false);
    setIsSelectorExpanded(false);
    setIsInputExpanded(false);
    setIsButtonExpanded(false);
  };

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  useEffect(() => {
    if (isSelectorExpanded || isInputExpanded || isButtonExpanded) {
      setIsOverlayOpen(true);
    } else {
      setIsOverlayOpen(false);
    }
  }, [isSelectorExpanded, isInputExpanded, isButtonExpanded]);



  return (
    <>
      <ExampleWrapper styles="h-[200px] lg:min-h-[100px]">
        <div className="m-auto flex flex-row gap-1 relative z-50">
          <motion.div
            initial={{
              width: 80,
            }}
            animate={{
              width: isInputExpanded ? 200 : 80,
            }}
          >
            <Input
              className="text-[16px]"
              isClearable
              list="ice-cream-flavors"
              startContent={
                <div>
                  <Search className="block" size={18} />
                </div>
              }
              onClick={() => {
                setSelectorOpen(false);
                setIsSelectorExpanded(false);
                setIsButtonExpanded(false);
                setIsInputExpanded(true);
              }}
            />

            {!isMobile ? (
              <datalist id="ice-cream-flavors">
                <option value="Chocolate"></option>
                <option value="Coconut"></option>
                <option value="Mint"></option>
                <option value="Strawberry"></option>
                <option value="Vanilla"></option>
              </datalist>
            ) : null}
          </motion.div>

          <motion.div
            initial={{
              width: 80,
            }}
            animate={{
              width: isSelectorExpanded ? 200 : 80,
            }}
            onAnimationComplete={(e: any) => {
              if (e.width == 200 && isSelectorExpanded) {
                setSelectorOpen(true);
              }
            }}
          >
            <Select
              placeholder="Select an animal"
              className="max-w-xs"
              radius="sm"
              disableSelectorIconRotation
              selectorIcon={<ChevronsUpDown size={20} />}
              isOpen={isSelectorOpen}
              onClick={() => {
                setIsInputExpanded(false);
                setIsButtonExpanded(false);
                setIsSelectorExpanded(true);
              }}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
              ))}
            </Select>
          </motion.div>

          <motion.div
            initial={{
              width: 51,
            }}
            animate={{
              width: isButtonExpanded ? 122 : 51,
            }}
          >
            <Button
              className=" w-full text-left justify-start min-w-12 font-medium gap-1"
              onPress={() => {
                setSelectorOpen(false);
                setIsSelectorExpanded(false);
                setIsInputExpanded(false);
                setIsButtonExpanded(true);
              }}
            >
              <div className=" m-auto ml-0">
                <User size={20} />
              </div>
              <div
                className=" ml-0"
                style={{
                  display: isButtonExpanded ? "flex" : "none",
                }}
              >
                Register
              </div>
            </Button>
          </motion.div>
        </div>
      </ExampleWrapper>

      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-40 bg-transparent"
            onClick={clickAwayListener}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ExpandableButtons;

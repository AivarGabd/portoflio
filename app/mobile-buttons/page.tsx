"use client";

const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

import ExampleWrapper from "@/components/ExampleWrapper";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { ChevronsUpDown, Filter, Search, User } from "lucide-react";
import { useEffect, useState } from "react";

const Page = () => {
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
      <ExampleWrapper>
        <div className="m-auto flex flex-row gap-1 relative z-50 ">
          <motion.div
            custom={0}
            initial={{
              width: 80,
            }}
            animate={{
              width: isInputExpanded ? 200 : 80,
            }}
          >
            <Input
              isClearable
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
          </motion.div>

          <motion.div
            custom={1}
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
            custom={2}
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
                setIsButtonExpanded(true)
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
            className="fixed inset-0 z-40"
            onClick={clickAwayListener}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Page;

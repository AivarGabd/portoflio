"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExampleWrapper from "@/components/ExampleWrapper";
import { delay, getRandomInt } from "@/lib/utils";

export type itemType = {
  id: string;
  img: string;
  title: string;
  description: string;
  text: string;
};

const array: itemType[] = [
  {
    id: "oddysey",
    img: "/space.png",
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    text: "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
  },
  {
    id: "rabbits",
    img: "/rabbit.png",
    title: "Angry Rabbits",
    description: "They are coming for you.",
    text: "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
  },
  {
    id: "town",
    img: "/ghost.webp",
    title: "Ghost town",
    description: "Scarry ghosts.",
    text: "In this game, players explore a deserted town, uncovering its eerie past and the mysteries behind its sudden abandonment. The gameplay combines puzzle-solving, exploration, and narrative elements and something else.",
  },
  {
    id: "pirates",
    img: "/pirate.png",
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    text: "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals. Some filler text to make it longer. Maybe even longer, because it looks better.",
  }

  /**
   * 
   * ,
  {
    id: "pirates",
    img: "/pirate.png",
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    text: "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals. Some filler text to make it longer. Maybe even longer, because it looks better.",
  }
   * 
   * ,
  {
    id: "mountains",
    img: "/boy.webp",
    title: "Lost in the mountains",
    description: "Be careful.",
    text: "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost",
  },
   */
];

const Item = ({
  data,
  itemSelectEvent,
}: {
  data: itemType;
  itemSelectEvent: (newItem: itemType) => void;
}) => {
  return (
    <motion.div
      className="group flex w-[340px] lg:w-[400px] cursor-pointer items-center gap-4 px-2"
      onClick={() => itemSelectEvent(data)}
      layoutId={data.id}
      id={data.id}
    >
      <motion.img
        height="50"
        width="50"
        src={data.img}
        layoutId={`image-${data.id}`}
        style={{
          borderRadius: 14,
        }}
      />
      <motion.div
        className="flex grow items-center justify-between border-b border-neutral-400 group-last:border-none"
        layoutId={`block-${data.id}`}
      >
        <motion.div
          className="flex flex-col gap-0.5 py-3"
          layoutId={`link-${data.id}`}
        >
          <motion.h2
            className="text-xs font-medium"
            layoutId={`title-${data.id}`}
          >
            {data.title}
          </motion.h2>
          <motion.p
            className="text-xs text-[#B5B3AD] font-medium"
            layoutId={`description-${data.id}`}
          >
            {data.description}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const DesktopDialogWindow = ({
  selectedItem,
  clickAwayListener,
}: {
  selectedItem: itemType | null;
  clickAwayListener: () => void;
}) => (
  <AnimatePresence>
    {selectedItem && (
      <motion.div
        layoutId={selectedItem?.id}
        className="w-[92%] lg:w-[480px] h-[170px] m-auto absolute inset-0 z-80"
      >
        <div
          className=" w-full p-4 flex flex-col gap-2 rounded-md"
          style={{ backgroundColor: "#111110" }}
        >
          <div className="gap-4 flex justify-center items-center pointer-events-none">
            <motion.img
              height="56"
              width="56"
              src={selectedItem.img}
              layoutId={`image-${selectedItem.id}`}
              style={{
                borderRadius: 14,
              }}
            />
            <motion.div
              className="flex grow items-center justify-between"
              layoutId={`block-${selectedItem.id}`}
            >
              <motion.div
                className="flex flex-col gap-0.5 py-3"
                layoutId={`link-${selectedItem.id}`}
              >
                <motion.h2
                  className="text-sm font-medium"
                  layoutId={`title-${selectedItem.id}`}
                >
                  {selectedItem.title}
                </motion.h2>
                <motion.p
                  className="text-sm text-[#B5B3AD] font-medium"
                  layoutId={`description-${selectedItem.id}`}
                >
                  {selectedItem.description}
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="text-[14px] text-[#B5B3AD]">
            {selectedItem.text}
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const List = () => {
  const [selectedItem, setSelectedItem] = useState<itemType | null>(null);
  const itemSelectEvent = (newItem: itemType) => {
    setSelectedItem(newItem);
  };

  const clickAwayListener = () => {
    setSelectedItem(null);
  };




  return (
    <ExampleWrapper styles="p-0 h-[450px]">
      <div className="w-full px-4 py-2">
        <div className="flex w-[350px] lg:w-full px-2 py-6 relative h-[423px] items-start overflow-hidden">
          <div className="relative flex w-full flex-col items-center lg:px-2">
            {array.map((item) => (
              <Item
                key={item.title}
                data={item}
                itemSelectEvent={itemSelectEvent}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 bg-transparent"
            onClick={clickAwayListener}
          />
        )}
      </AnimatePresence>

      <DesktopDialogWindow
        selectedItem={selectedItem}
        clickAwayListener={clickAwayListener}
      />
    </ExampleWrapper>
  );
};

export default List;

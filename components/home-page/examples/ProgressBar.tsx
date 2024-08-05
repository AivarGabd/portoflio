"use client";

import ExampleWrapper from "@/components/ExampleWrapper";
import { getRandomInt } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const blocks = ["40px", "20px", "30px", "30px", "20px", "40px", "20px", "50px"];

const CustomProgressBar = () => {
  const linksScrollbar = useRef<HTMLDivElement>(null);
  const linksScrollbarBg = useRef<HTMLDivElement>(null);
  const linksBlock = useRef<HTMLDivElement>(null);

  const [activeBlock, setActiveBlock] = useState<null | Element>(null);

  const runDemoAnimation = () => {
    setActiveBlock(linksBlock.current!.children[getRandomInt(blocks.length)]);
  };

  useEffect(() => {
    if (!linksBlock.current) return;
    runDemoAnimation();
    setInterval(() => {
      runDemoAnimation();
    }, 2000);
  }, []);

  useEffect(() => {
    if (!activeBlock) return;

    const target = activeBlock;
    const newHeight = target.getBoundingClientRect().height;
    const test =
      target.getBoundingClientRect().top -
      linksBlock.current!.getBoundingClientRect().top;

    linksScrollbar.current!.style.top = test + "px";
    linksScrollbar.current!.style.height = newHeight + "px";
  }, [activeBlock]);

  return (
    <ExampleWrapper styles="flex max-w-[250px]">
      <div className="flex flex-col gap-1 relative w-[200px]" ref={linksBlock}>
        {blocks.map((x, index) => (
          <div
            key={x}
            id={`${index}-${x}`}
            className={`w-full rounded-md ${
              activeBlock && activeBlock.id == `${index}-${x}`
                ? " bg-neutral-800"
                : " bg-neutral-900"
            }`}
            style={{
              height: x,
            }}
          >
            {" "}
          </div>
        ))}
      </div>

      <div className="h-[250px] w-[10px] flex ml-[10px] mr-0 relative">
        <div className="h-full w-1 bg-[#575453] mx-auto rounded-md"></div>
        <div
          ref={linksScrollbarBg}
          className="absolute right-0 left-0 w-1 bg-white mx-auto rounded-md transition-all"
        ></div>

        <div
          ref={linksScrollbar}
          className="absolute right-0 left-0 w-2 h-[30px] bg-white mx-auto rounded-md transition-all"
          style={{
            top: 0,
          }}
        ></div>
      </div>
    </ExampleWrapper>
  );
};

export default CustomProgressBar;

"use client";
import CustomDrawer from "@/components/home-page/examples/Drawer";
import ExpandableButtons from "@/components/home-page/examples/ExpandableButtons";
import List from "@/components/home-page/examples/List";
import Tabs from "@/components/home-page/examples/Tabs";
import ThemeButton from "@/components/home-page/examples/ThemeButton";
import CustomProgressBar from "./examples/ProgressBar";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Info } from "lucide-react";
import Projects from "./Projects";
import { useIsMobile } from "@/lib/useIsMobile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type UIExampleType = {
  name: string;
  text: string | null;
  component: JSX.Element;
};

const UIExamples: UIExampleType[] = [
  {
    name: "Интерактивный список",
    text: "С анимацией открытия как в IOS",
    component: <List />,
  },
  {
    name: "Табы",
    text: "С анимацией как в vercel.com/dashboard",
    component: <Tabs />,
  },

  {
    name: "Компактные интерактивные элементы",
    text: "Расширяющиеся кликабельные элементы для мобильных устройств",
    component: <ExpandableButtons />,
  },
  {
    name: "Шторка снизу",
    text: "Перетаскиваемая нижняя шторка для мобильных устройств",
    component: <CustomDrawer />,
  },
  {
    name: "Кнопка для смены светлой/темной тем",
    text: "Почти как у joshwcomeau.com",
    component: <ThemeButton />,
  },
  {
    name: "Прогресс бар с фокусировкой",
    text: null,
    component: <CustomProgressBar />,
  },
];

const UIContentWraper = (item: UIExampleType) => (
  <div className="bg-[#151514] border border-neutral-800  rounded-md flex flex-col gap-2 h-fit mx-1 w-fit">
   
    <div className="w-full border-b border-neutral-800 ">{item.component}</div>
    <div className="px-3 pb-1">
      <div className="text-base no-underline">{item.name}</div>
      <div className=" text-light-grey text-sm">
        {item.text ? item.text : <>&#8203;</>}
      </div>
    </div>
  </div>
);

const Content = () => {
  const isMobile = useIsMobile();

  const [activeBlock, setActiveBlock] = useState<"ui" | "projects">("projects");

  const activeStyles = "border-b-2 border-white";
  const nonActiveStyles = "border-b-2 border-transparent";
  return (
    <>
      <div className="lg:container flex flex-row gap-5 text-xl font-medium mt-[100px]">
        <div
          className={`h-full px-1.5 ${
            activeBlock == "ui" ? activeStyles : nonActiveStyles
          }`}
        >
          <button className="pb-1" onClick={() => setActiveBlock("ui")}>
            UI
          </button>
        </div>
        <div
          className={`h-full px-1.5 ${
            activeBlock == "projects" ? activeStyles : nonActiveStyles
          }`}
        >
          <button className="pb-1" onClick={() => setActiveBlock("projects")}>
            Последние проекты
          </button>
        </div>
      </div>
      <div className="w-full bg-black mx-0 pt-4">
        <div className="mt-4">
          {activeBlock == "ui" ? (
            <div className="lg:px-4 flex flex-wrap gap-0.5 gap-y-2 pb-[200px] lg:max-w-[1800px] mx-auto">
              {isMobile ? (
                <Accordion type="single" collapsible className="w-full bg-neutral-900 rounded-md">
                  {UIExamples.map((item, index) => (
                    <AccordionItem
                      value={`item-${index}`}
                      key={`item-${index}`}
                      className="hover:bg-focus rounded-md px-1 border-none no-underline"
                    >
                      <AccordionTrigger className="font-normal">
                        <div className="flex flex-col gap-0 text-left">
                          <div className="text-base no-underline">
                            {item.name}
                          </div>
                          <div className=" text-light-grey text-sm">
                            {item.text}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="w-full flex">
                        <div className="m-auto">{item.component}</div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <>
                  {UIExamples.map((x) => (
                    <UIContentWraper {...x} />
                  ))}
                </>
              )}
            </div>
          ) : (
            <Projects />
          )}
        </div>
      </div>
    </>
  );
};

export default Content;

"use client";
import CustomDrawer from "@/components/home-page/examples/Drawer";
import ExpandableButtons from "@/components/home-page/examples/ExpandableButtons";
import List from "@/components/home-page/examples/List";
import Tabs from "@/components/home-page/examples/Tabs";
import ThemeButton from "@/components/home-page/examples/ThemeButton";
import CustomProgressBar from "./examples/ProgressBar";
import { useState } from "react";
import { Drawer } from "vaul";
import { Button } from "@nextui-org/react";
import { Info } from "lucide-react";
import Projects from "./Projects";

const Content = () => {
  const [activeBlock, setActiveBlock] = useState<"ui" | "projects">("ui");

  const activeStyles = "border-b-2 border-white";
  const nonActiveStyles = "border-b-2 border-transparent";
  return (
    <>
      <div className="container flex flex-row gap-5 text-xl font-medium mt-[100px]">
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

      <div className="w-full border-t border-[#27272A] bg-black mx-0">
        <div className="lg:container mt-4">
          {activeBlock == "ui" ? (
            <div className=" flex flex-wrap gap-1">
              <div className="bg-neutral-900 rounded-xl py-1 px-2 flex flex-col gap-2 h-fit w-full mx-1">
                <div className="px-2 pt-1">
                  <div className="text-base no-underline">
                    Интерактивный список
                  </div>
                  <div className=" text-light-grey text-sm">
                    С анимацией открытия как в IOS
                  </div>
                </div>
               <div className="m-auto">
               <List />
               </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-neutral-900 rounded-xl py-1 px-2 flex flex-col gap-2 h-fit">
                  <div className="px-2 pt-1">
                    <div className="text-base no-underline">Табы</div>
                    <div className="text-light-grey text-sm">
                      С анимацией как в vercel.com/dashboard
                    </div>
                  </div>
                  <Tabs />
                </div>
                <div className="bg-neutral-900 rounded-xl py-1 px-2 flex flex-col gap-2 h-fit">
                  <div className="px-2 pt-1">
                    <div className="text-base no-underline">
                      Компактные интерактивные элементы
                    </div>
                    <div className="text-light-grey text-sm">
                      Расширяющиеся кликабельные элементы для мобильных
                      устройств
                    </div>
                  </div>
                  <ExpandableButtons />
                </div>
              </div>
              <div className="bg-neutral-900 rounded-xl py-1 px-2 flex flex-col gap-2 h-fit">
                <div className="px-2 pt-1">
                  <div className="text-base no-underline">Шторка снизу</div>
                  <div className="text-light-grey text-sm">
                    Перетаскиваемая нижняя шторка для мобильных устройств
                  </div>
                </div>
                <div className="mx-auto">
                  <CustomDrawer />
                </div>
              </div>
              <div className="bg-neutral-900 rounded-xl py-1 px-2 flex flex-col gap-2 h-fit">
                <div className="px-2 pt-1">
                  <div className="text-base no-underline">
                    Кнопка для смены светлой/темной тем
                  </div>
                  <div className="text-light-grey text-sm">
                    Почти как у joshwcomeau.com
                  </div>
                </div>
                <div className="mx-auto">
                  <ThemeButton />
                </div>
              </div>
              <div className="bg-neutral-900 rounded-xl py-1 px-2 flex flex-col gap-2 h-fit">
                <div className="px-2 pt-1">
                  <div className="text-base no-underline">
                    Прогресс-бар с фокусировкой
                  </div>
                </div>
                <CustomProgressBar />
              </div>
            </div>
          ) : (
            <>
            <Projects/>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Content;

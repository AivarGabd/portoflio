import { ExternalLink, MoveUpRight } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import List from "@/components/home-page/examples/List";
import Tabs from "@/components/home-page/examples/Tabs";
import ExpandableButtons from "@/components/home-page/examples/ExpandableButtons";
import ThemeButton from "@/components/home-page/examples/ThemeButton";
import CustomDrawer from "@/components/home-page/examples/Drawer";

const UIExamples = [
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
    name: "Шторка снизу",
    text: "Перетаскиваемая нижняя шторка для мобильных устройств",
    component: <CustomDrawer />,
  },
  {
    name: "Компактные интерактивные элементы",
    text: "Расширяющиеся кликабельные элементы для мобильных устройств",
    component: <ExpandableButtons />,
  },
  {
    name: "Кнопка для смены светлой/темной тем",
    text: "Почти как у joshwcomeau.com",
    component: <ThemeButton />,
  },
];

const Skill = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <span className="text-white">{children}</span>;

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[100px] lg:mt-10 pb-40">
        <div className="flex flex-col gap-2">
          <div className="w-full flex">
            <div className="w-fit">
              <div className="font-medium">Айвар Габдрахманов</div>
              <div className="text-light-grey">fullstack web dev</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-[200px]">
          <h2 className="text-lg font-medium">UI</h2>
          <Accordion type="single" collapsible className="w-full ">
            {UIExamples.map((item, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={`item-${index}`}
                className="hover:bg-focus rounded-md px-1 border-none"
              >
                <AccordionTrigger className="hover:no-underline font-normal">
                  <div className="flex flex-col gap-0 text-left">
                    <div className="text-base no-underline">{item.name}</div>
                    <div className=" text-light-grey text-sm">{item.text}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="w-full flex">
                  <div className="m-auto">{item.component}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className=" flex flex-col gap-3">
          <h2 className="text-lg font-medium">Последние проекты</h2>
          <Link
            href={"https://ideaparallels.vercel.app/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="hover:bg-focus rounded-md px-1 py-3 relative group">
              <div>
                ideaparallels{" "}
                <ExternalLink
                  size={16}
                  className=" inline mt-[-6px] lg:invisible "
                />{" "}
              </div>
              <div className="text-light-grey text-sm">
                Лендинг для 5 версии продукта, своего стартапа(пока на паузе)
              </div>
              <ExternalLink
                size={20}
                className="absolute top-[-10px] right-[-10px] opacity-0 lg:group-hover:opacity-100 transition-all "
              />
            </div>
          </Link>

          <Link
            href={"https://malwand.vercel.app/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="hover:bg-focus rounded-md px-1 py-3 relative group">
              <div>
                malwand{" "}
                <ExternalLink
                  size={16}
                  className=" inline mt-[-6px] lg:invisible"
                />{" "}
              </div>
              <div className="text-light-grey text-sm">
                Личный open-source проект используя MyAnimeList API для
                продуктовых скиллов
              </div>
              <ExternalLink
                size={20}
                className="absolute top-[-10px] right-[-10px] opacity-0 lg:group-hover:opacity-100 transition-all "
              />
            </div>
          </Link>
        </div>
        <div className="">
          <div className="flex flex-row gap-3 text-light-grey text-sm">
            <div>aivargabd@gmail.com</div>
            <div>tg: @aivargab</div>
          </div>
        </div>
      </div>
    </>
  );
}

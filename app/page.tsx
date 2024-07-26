import DBBagesBlock from "@/components/home-page/DBBagesBlock";
import CustomDrawer from "@/components/home-page/examples/Drawer";
import ExpandableButtons from "@/components/home-page/examples/ExpandableButtons";
import List from "@/components/home-page/examples/List";
import Tabs from "@/components/home-page/examples/Tabs";
import ThemeButton from "@/components/home-page/examples/ThemeButton";
import StateManagersBadgesBlock from "@/components/home-page/StateManagersBadgesBlock";
import UIBadgesBlock from "@/components/home-page/UIBadgesBlock";
import { Avatar, Chip } from "@nextui-org/react";
import { ExternalLink, MoveUpRight } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[100px] mt-20">
        <div className=" flex flex-col gap-2">
          <div className="w-full flex">
            <div className="w-fit">
              <div className="font-medium">Айвар Габдрахманов</div>
              <div className="text-light-grey">Full-stack web dev</div>
            </div>
          </div>

          <div className="flex flex-row gap-0.5 lg:gap-1 flex-wrap">
            <Chip
              variant="flat"
              avatar={<Avatar name="nextjs" src="/home-page/nextjs.png" />}
            >
              nextjs
            </Chip>
            <UIBadgesBlock />
            <StateManagersBadgesBlock />
            <DBBagesBlock />
          </div>
        </div>

        {/* <div className="flex flex-col gap-1.5">
          <div>
            <Link
              href="https://ideaparallels.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline decoration-[#737373] hover:decoration-light-grey decoration-[1.5px] underline-offset-2 transition-all cursor-pointer"
            >
              ideaparallels
              <MoveUpRight size={14} className="inline text-light-grey" />
            </Link>{" "}
            - проект ради которого я дропнулся с университета и развивал
            последние 3,5 года. После написания кучи бесполезного функционала и итераций
            пока остался лендинг.
          </div>
          <div>
            <Link
              href="https://malwand.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline decoration-[#737373] hover:decoration-light-grey decoration-[1.5px] underline-offset-2 transition-all cursor-pointer"
            >
              malwand
              <MoveUpRight size={14} className="inline text-light-grey" />
            </Link>{" "}
            - небольшой проект для отдыха построенный вокруг MyAnimeList API.
          </div>
        </div> */}

        <div className="flex flex-col gap-1">
          <div>Опыт разработки и построении web React приложений с нуля</div>
          <div>Участие в проработке архитектуры</div>
          <div>Опыт в коммерческой разработке</div>
          <div>Опыт работе в команде с разными часовыми поясами</div>
          <div>
            Понимание принципов построения качественных приложений (архитектура,
            стабильность, производительность, UI/UX)
          </div>
          <div>Опыт работы с облаками AWS, Azure, Heroku, Yandex Cloud</div>

          <div className=" text-light-grey mt-[20px]">
            <Link
              href="https://storage.yandexcloud.net/ideaparallels/worldskills.JPG"
              rel="noopener noreferrer"
              target="_blank"
              className="underline decoration-[#737373] hover:decoration-light-grey decoration-[1.5px] underline-offset-2 transition-all cursor-pointer"
            >
              Программирование и приложений является главными увлечением с 19
              лет
              <MoveUpRight size={14} className="inline" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3">
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
                  className=" inline mt-[-6px] lg:invisible"
                />{" "}
              </div>
              <div className="text-light-grey text-sm">
                Платформа для углубления в образовательный контент, без
                алгоритмов и AI
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
                Табличный вид для персонального листа в MyAnimeList используя их
                API
              </div>
              <ExternalLink
                size={20}
                className="absolute top-[-10px] right-[-10px] opacity-0 lg:group-hover:opacity-100 transition-all "
              />
            </div>
          </Link>
        </div>
      </div>

      <div>
        <div className="mr-0 ml-auto inline-flex flex-row gap-2 text-light-grey text-right mt-[100px] text-sm">
          {/** <Link
            href="https://storage.yandexcloud.net/ideaparallels/worldskills.JPG"
            rel="noopener noreferrer"
            target="_blank"
            className="underline decoration-[#737373] hover:decoration-light-grey decoration-[1.5px] underline-offset-2 transition-all cursor-pointer"
          >
            Собираю приложения с 19 лет
            <MoveUpRight size={14} className="inline" />
          </Link> */}
          <div>aivargabd@gmail.com</div>
        </div>
      </div>
    </>
  );
}

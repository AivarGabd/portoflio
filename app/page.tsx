import DBBagesBlock from "@/components/home-page/DBBagesBlock";
import StateManagersBadgesBlock from "@/components/home-page/StateManagersBadgesBlock";
import UIBadgesBlock from "@/components/home-page/UIBadgesBlock";
import { Avatar, Chip } from "@nextui-org/react";
import { Github } from "lucide-react";
import Link from "next/link";

const UIExamples = [
  {
    name: "Список",
    text: "С анимацией открытия как в IOS",
    link: "/list-item",
  },
  {
    name: "Табы",
    text: "С анимациями как в vercel.com/dashboard",
    link: "/vercel-tabs",
  },
  {
    name: "Шторка снизу",
    text: "Перетаскиваемая нижняя шторка для мобильный устройств",
    link: "/custom-drawer",
  },
  {
    name: "Компактные интерактивные элементы",
    text: "Расширяюшиеся кликабольные элементы для мобильный устройств",
    link: "/mobile-buttons",
  },
  {
    name: "Кнопка для смены светлой/темной тем",
    text: "",
    link: "/theme-button",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[100px]">
        <div>
          <div className="font-medium">Айвар Габдрахманов</div>
          <div className="text-light-grey">Full-stack web dev</div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div>
            Я превращаю идеи в современные и комфортные продукты которые полюбят
            пользователи
          </div>
          <div>Одержим тем, как продукт выглядит и как он ощущается</div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-medium">UI</h2>
          <div className=" flex flex-col gap-3">
            {UIExamples.map((item) => (
              <Link href={item.link} key={item.link}>
                <div className="hover:bg-focus rounded-md px-1 py-3">
                  <div>{item.name}</div>
                  <div className=" text-light-grey text-sm">{item.text}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className=" flex flex-col gap-3">
            <h2 className="text-lg font-medium">Проекты</h2>
           <Link href={'https://ideaparallels.vercel.app/'}>
           <div className="hover:bg-focus rounded-md px-1 py-3">
              <div>ideaparallels</div>
              <div className="text-light-grey text-sm">
                Разбираться в контенте без ai и алгоритмов
              </div>
            </div>
           </Link>

            <Link href={"https://malwand.vercel.app/"}>
              <div className="hover:bg-focus rounded-md px-1 py-3">
                <div>malwand</div>
                <div className="text-light-grey text-sm">
                  Табличный вид для персонального листа в MyAnimeList
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-[200px]"></div>

      <div className="max-w-[644px] fixed bottom-0 bg-neutral-900 p-2 flex flex-col gap-1 border-t-1 border-neutral-800 left-0 right-0 lg:left-auto lg:right-auto">
        <div className="flex flex-row gap-0.5 lg:gap-1 flex-wrap">
          <Chip
            variant="flat"
            size="sm"
            avatar={<Avatar name="nextjs" src="/home-page/nextjs.png" />}
          >
            nextjs
          </Chip>
          <UIBadgesBlock />
          <StateManagersBadgesBlock />
          <DBBagesBlock />
        </div>

        <div className=" flex flex-row gap-2 text-xs text-light-grey font-medium">
          <div>aivargabd@gmail.com</div>
          <div>с 19 лет в программировании</div>
        </div>
      </div>
    </>
  );
}

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

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[100px] mt-10 pb-40">
        <div className=" flex flex-col gap-2">
          <div className="w-full flex">
            <div className="w-fit">
              <div className="font-medium">Айвар Габдрахманов</div>
              <div className="text-light-grey">web dev</div>
            </div>
          </div>

          {/* <div className="flex flex-row gap-0.5 lg:gap-1 flex-wrap">
            <Chip
              variant="flat"
              avatar={<Avatar name="nextjs" src="/home-page/nextjs.png" />}
            >
              nextjs
            </Chip>
            <UIBadgesBlock />
            <StateManagersBadgesBlock />
            <DBBagesBlock />
          </div> */}
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-light-grey mt-[20px] flex flex-col gap-1">
            <Link
              href="https://storage.yandexcloud.net/ideaparallels/worldskills.JPG"
              rel="noopener noreferrer"
              target="_blank"
              className="underline group decoration-[#737373] hover:decoration-light-grey decoration-[1.5px] underline-offset-2 transition-all cursor-pointer"
            >
              Программирование и приложений является главными увлечением с 19
              лет
              <MoveUpRight
                size={16}
                className="inline  group-hover:stroke-white transition-all"
              />
            </Link>
          </div>
          <div>Web-разработкой занимаюсь с зимы 2021 года.</div>

          <div>
            На front-end я умею:
            <ul className="list-disc ml-6 flex flex-col gap-2">
              <li>
                Верстать (HTML, CSS, Tailwindcss, Sass, SCSS, Less,
                Styled-components и т.д. Знаком с методикой mobile-first и
                адаптивной версткой).
              </li>
              <li>
                Писать на нативном JavaScript/TypeScript + DOM или использовать
                его вместе с React.
              </li>
              <li>
                Опыт работы со следуйщими стейт менеджерами - MobX, Redux,
                Zustand.
              </li>
              <li>
                Подбирать необходимые под конкретные задачи UI библиотеки.
                Подключать, оптимизировать и стилизовать сайт под светлую или
                темную темы.
              </li>
              <li>Опыт оптимизации под pagespeed (LCP, FCP) и lighthouse</li>
              <li>Опыт оптимизации работы SSR.</li>
              <li>Оживлять сайт анимациями при помощи Framer-motion.</li>
              <li>Работать с макетами в Adobe Photoshop, Figma.</li>
              <li>Визулизировать данные при помощи d3js.</li>
              <li>
                Работать с таким сборщиком модулей, как Webpack, применяя
                Loader-ы, Plugin-ы и собирая конфигурации для разных окружений.
              </li>
            </ul>
          </div>

          <div>
            Еще я умею:
            <ul className="list-disc ml-6 flex flex-col gap-2">
              <li>Работать с Git.</li>
              <li>
                Работать с Linux системами и серверами, настраивать DNS,
                подключать домены с SSL сертификатами. Ставить на них Git, чтобы
                подкачивать от туда файлы и запускать сервер с публичным IP.
              </li>
              <li>
                Конфигурировать SMTP сервер под свой домен и заниматься
                рассылкой стилизованных email через nodemailer.
              </li>
              <li>
                Опыт работы с OAuth включая подключение их логин через
                провайдера(Google, Github, etc.).
              </li>
              <li>
                Подключение API любой сложности и глубины, платежные, такие как
                ЮКасса или стандартные вроде Open AI.
              </li>
              <li>
                Отправкой обычных или blob файлов на облачные хранилища.(Yandex
                Cloud, AWS Backet, Azure, etc).
              </li>
              <li>
                Писать на JavaScript/TypeScript (NodeJS), используя фреймворки
                Express, NextJS.
              </li>
              <li>
                Работать, как с реляционными БД Azure Cosmos DB, MySQL, так и
                нереляционной MongoDB, Firebase.
              </li>
              <li>Работать с WebSockets через Socket IO.</li>
              <li>
                Читать документацию, вести переписку и говорить не только на
                русском, но и на английском языке.
              </li>
              <li>
                Поднимать хостинг на pay-as-you go решениях, вроде AWS и Vercel.
              </li>
            </ul>
          </div>

          <div className="flex flex-row gap-3 text-light-grey text-sm">
            <div>aivargabd@gmail.com</div>
            <div>tg: @aivargab</div>
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
    </>
  );
}

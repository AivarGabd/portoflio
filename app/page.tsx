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
      <div className="flex flex-col gap-[100px] mt-10 pb-40">
        <div className="flex flex-col gap-2">
          <div className="w-full flex">
            <div className="w-fit">
              <div className="font-medium">Айвар Габдрахманов</div>
              <div className="text-light-grey">web dev</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div>Web-разработкой занимаюсь с 2020 года.</div>

          <div className="group">
            На front-end я умею:
            <ul className="list-disc ml-6 flex flex-col gap-2 text-[#cecece] group-hover:text-white transition-all">
              <li>
                Верстать (
                <Skill>
                  HTML, CSS, Tailwindcss, Sass, SCSS, Less, Styled-components и
                  т.д
                </Skill>
                . Знаком с методикой{" "}
                <Skill>mobile-first и адаптивной версткой</Skill>).
              </li>
              <li>
                Писать на нативном <Skill>JavaScript/TypeScript + DOM</Skill>{" "}
                или использовать его вместе с <Skill>React</Skill>.
              </li>
              <li>
                Опыт работы со следуйщими стейт менеджерами -{" "}
                <Skill>MobX, Redux, Zustand.</Skill>
              </li>
              <li>
                Подбирать необходимые под конкретные задачи{" "}
                <Skill>UI библиотеки</Skill>. Подключать, оптимизировать и
                стилизовать сайт под <Skill>светлую или темную темы.</Skill>
              </li>
              <li>
                Опыт оптимизации под{" "}
                <Skill>pagespeed (LCP, FCP) и lighthouse</Skill>
              </li>
              <li>
                Опыт оптимизации работы <Skill>SSR</Skill>.
              </li>
              <li>
                Оживлять сайт <Skill>анимациями при помощи Framer-motion</Skill>
                .
              </li>
              <li>
                Работать с макетами в <Skill>Adobe Photoshop, Figma</Skill>.
              </li>
              <li>
                Визулизировать данные при помощи <Skill>d3js</Skill>.
              </li>
              <li>
                Работать с таким сборщиком модулей, как <Skill>Webpack</Skill>,
                применяя <Skill>Loader-ы</Skill>, <Skill>Plugin-ы</Skill> и
                собирая <Skill>конфигурации для разных окружений</Skill>.
              </li>
            </ul>
          </div>

          <div className="group">
            Еще я умею:
            <ul className="list-disc ml-6 flex flex-col gap-2 text-[#cecece] group-hover:text-white transition-all">
              <li>
                Работать с <Skill>Git</Skill>.
              </li>
              <li>
                Работать с <Skill>Linux системами</Skill> и серверами,
                настраивать <Skill>DNS</Skill>, подключать домены с{" "}
                <Skill> SSL сертификатами</Skill>. Ставить на них{" "}
                <Skill>Git</Skill>, чтобы подкачивать от туда файлы и{" "}
                <Skill>запускать сервер с публичным IP</Skill>.
              </li>
              <li>
                Конфигурировать <Skill>SMTP</Skill> сервер под свой домен и
                заниматься рассылкой{" "}
                <Skill>стилизованных email через nodemailer</Skill>.
              </li>
              <li>
                Опыт работы с <Skill>OAuth</Skill> включая подключение их логин
                через <Skill>провайдера(Google, Github, etc.)</Skill>.
              </li>
              <li>
                Подключение <Skill>API любой сложности и глубины</Skill>,
                платежные, такие как ЮКасса или стандартные вроде Open AI.
              </li>
              <li>
                Отправкой обычных или blob файлов на облачные хранилища
                <Skill>(Yandex Cloud, AWS Backet, Azure, etc)</Skill>.
              </li>
              <li>
                Писать на <Skill>JavaScript/TypeScript (NodeJS)</Skill>,
                используя фреймворки <Skill>Express</Skill>,{" "}
                <Skill>NextJS</Skill>.
              </li>
              <li>
                Работать, как с <Skill>реляционными БД Azure Cosmos DB</Skill>,{" "}
                <Skill>MySQL</Skill>, так и <Skill>нереляционной MongoDB</Skill>
                , <Skill>Firebase</Skill>.
              </li>
              <li>
                Работать с <Skill>WebSockets</Skill> через{" "}
                <Skill>Socket IO</Skill>.
              </li>
              <li>
                Читать документацию, вести переписку и говорить не только на
                русском, но и <Skill>на английском языке</Skill>.
              </li>
              <li>
                Поднимать хостинг на pay-as-you go решениях, вроде{" "}
                <Skill>AWS</Skill> и <Skill>Vercel</Skill>.
              </li>
            </ul>
          </div>

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
                  className=" inline mt-[-6px] lg:invisible "
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
                API, в перспективе личный open-source
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

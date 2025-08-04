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
    name: "Interactive List",
    text: "Features opening animations inspired by iOS.",
    component: <List />,
  },
  {
    name: "Tabs",
    text: "Includes smooth animations similar to those on vercel.com/dashboard.",
    component: <Tabs />,
  },
  {
    name: "Content Block",
    text: "A draggable bottom sheet designed for mobile devices.",
    component: <CustomDrawer />,
  },
  {
    name: "Compact Interactive Items",
    text: "Expandable buttons optimized for mobile interaction.",
    component: <ExpandableButtons />,
  },
  {
    name: "Theme Switch Button",
    text: "A sleek light/dark mode toggle, inspired by joshwcomeau.com.",
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
              <div className="font-medium">Aivar Gabdrahmanov</div>
              <div className="text-light-grey">fullstack web dev</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            Программирование стало моим главным увлечением с 19 лет. Тогда я
            начал разрабатывать Android-приложения и создал дипломный проект.
            Также участвовал в олимпиаде&nbsp;
            <Link
              href="https://storage.yandexcloud.net/ideaparallels/worldskills.JPG"
              rel="noopener noreferrer"
              target="_blank"
              className="underline group decoration-[#737373] hover:decoration-light-grey decoration-[1.5px] underline-offset-2 transition-all cursor-pointer text-white"
            >
              WorldSkills
            </Link>
            . Во время учёбы работал над реальным приложением для компании в
            рамках производственной практики.
          </div>
          <div>
            Со второй половины 2020 года полностью переключился на
            веб-разработку. Начинал как самоучка fullstack-разработчик: писал
            собственные проекты, настраивал серверы и деплой. В 2021 году принял
            решение оставить университет и полностью сосредоточиться на
            коммерческой разработке.
          </div>
          <div>
            Через тестовое задание и по рекомендации попал в стартап с
            российскими корнями, который позже переехал в Кремниевую долину.
            Участвовал в трансформации продукта с этапа от 1 к 100. Переписывал
            легаси-фронтенд с PHP и jQuery на современный стек Next.js и React,
            активно работал с Material UI. Команда была ориентирована на
            продуктовый результат.
          </div>
          <div>
            В начале 2022 года вернулся к одному из своих старых проектов и
            привлёк к нему ментора — продукт-менеджера, бывшего десятого
            сотрудника Miro. Мы вместе запускали MVP, проводили итерации и
            искали product-market fit. Проект IdeaParallels чуть не попал в Y
            Combinator, но основной задачей было построить фундаментальный
            подход к созданию digital-продуктов.
          </div>
          <div>
            Параллельно с этим занимался заказной разработкой: верстал
            SPA-приложения, лендинги, интернет-магазины и вел полную техническую
            часть.
          </div>

          <div>
            С октября 2024 года работаю part-time в продуктовой команде под
            руководством фаундера, который ранее запускал множество успешных
            продуктов в России и был Head of Launch в IQOS. В команде занимаюсь
            full-stack разработкой, DevOps-задачами, CI/CD и внедрением практик
            корпоративной разработки.
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-medium">Опыт работы:</h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <div>
                Edlock (part-time Fullstack Developer, с октября 2024) Мобильное
                EdTech-приложение с ежедневным приростом пользователей (240+
                уникальных в день). Моя роль: поддержка backend-инфраструктуры,
                DevOps, помощь команде iOS.
              </div>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Упростил релизы: взаимодействовал с нетехническим фаундером,
                  тестировал новые фичи, настроил стабильную CI/CD
                </li>
                <li>
                  Развернул продукт на новом домене: DNS, Cloudflare, Docker,
                  Azure Load Balancer
                </li>
                <li>
                  Расширил географию приложения: увеличил количество
                  поддерживаемых стран с 3 до 17, реализовав динамический
                  перевод через публичное API с асинхронной очередью и
                  throttle/debounce
                </li>
                <li>
                  Ввел документацию и типизацию API (Swagger + TypeScript),
                  помог DevOps-инженеру и iOS-разработчикам
                </li>
                <li>
                  Разработал расширение для Google Chrome: сохраняет текущую
                  HTML-страницу в векторный PDF без потери качества и загружает
                  на устройство пользователя
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              Ideaparallels — fullstack платформа для коллективной работы с контентом
              Проект в духе Miro/Figma, но для редактирования и исследования текстов, медиа и аналитики в реальном времени.
              <ul className="list-disc list-inside pl-4 mt-2">
                <li>Разработал MVP с нуля, включая real-time синхронизацию, редакторы и личный кабинет</li>
                <li>Frontend: Next.js (SSR, Server Actions), Tailwind CSS, HeroUI (React Aria wrapper), Framer Motion</li>
                <li>Backend: Supabase (PostgreSQL с real-time подписками), Zustand для кэширования и оптимизации запросов</li>
                <li>Добавил возможность редактировать контент в стиле Notion (Editor.js), загружать файлы и парсить YouTube-видео</li>
                <li>Реализовал авторизацию через email+пароль, Google, Google One Tap</li>
                <li>Провел UX-аудит, устранил избыточные перерендеры и оптимизировал работу с Supabase</li>
                <li>Архитектура платформы предполагает масштабируемость: выбрана SQL-БД с возможностью частичной денормализации под NoSQL-стратегии</li>
              </ul>
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
          <h2 className="text-lg font-medium">Latest personal projects</h2>
          <Link
            href={"https://ideaparallels-test.vercel.app"}
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
                Collective research platform
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
                Personal open-source side project powered by myanimelist api
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
            <div>Telegram: @aivargab</div>
          </div>
        </div>
      </div>
    </>
  );
}

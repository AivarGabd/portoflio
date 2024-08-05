import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Info, MoveUpRight } from "lucide-react";
import { useEffect, useState } from "react";
//import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

const blockMainStyles = "flex flex-col gap-6";
const blockMainContentStyles =
  "flex flex-col gap-4 [&>div]:flex [&>div]:flex-col [&>div]:gap-1";
const eachBlockStyles = "flex flex-col gap-1";
const blockTextStyles = "m-auto";

type projectItem = {
  title: string;
  bio: string | null;
  content: JSX.Element;
};

const arr: projectItem[] = [
  {
    title: "Интернет магазин детских игрушек",
    bio: null,
    content: (
      <>
        <div className={blockMainStyles}>
          <div className="flex flex-col gap-2">
            <div>
              <div className="text-2xl font-semibold">
                Интернет магазин детских игрушек
              </div>
              <div>Срок разработки - 2 недели</div>
            </div>
          </div>

          <div className={blockMainContentStyles}>
            <div className={eachBlockStyles}>
              <div className="bg-white rounded-md flex h-[475.391px] w-full">
                <video
                  className="rounded-lg m-auto"
                  src="/home-page/projects-demo/dazygoods/gorki.mp4"
                  controls={false}
                  autoPlay
                  muted
                  loop
                  playsInline
                  width={300}
                />
              </div>
              <div className={blockTextStyles}>
                Карточка товара соответствующая требованиям заказчика, одним из
                которых была кнопка - 'Задать вопрос' для отправки вопроса на
                почту менеджера используя nodemailer и gsmtp сервер Gmail
              </div>
            </div>

            <div className={eachBlockStyles}>
              <div className="w-[800px] h-[511.469px] bg-white  mx-auto">
                <video
                  className="rounded-lg m-auto"
                  src="/home-page/projects-demo/dazygoods/email.mp4"
                  controls={false}
                  autoPlay
                  muted
                  loop
                  playsInline
                  width={800}
                />
              </div>
              <div className={blockTextStyles}>
                Проверка введенного пользователем почты
              </div>
            </div>

            <div className={eachBlockStyles}>
              <div className="w-[800px] h-[459.562px] bg-white  mx-auto">
                <video
                  className="m-auto"
                  width={800}
                  src="/home-page/projects-demo/dazygoods/gorki2.mp4"
                  controls={false}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className={blockTextStyles}>
                Подсчет примерной стоимости доставки, автокомплит с
                государственным справочником
              </div>
            </div>

            <div className={eachBlockStyles}>
              <div className="w-[1336px] h-[540.891px] bg-white mx-auto">
                <video
                  src="/home-page/projects-demo/dazygoods/gorki3.mp4"
                  controls={false}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className={blockTextStyles}>
                react-dropzone для загрузки сразу несколько фотографий на Yandex
                Cloud и react-beautiful-dnd для расстановки очереди картинок в
                консоли админа для карусели товара
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "malwand",
    bio: "Табличный вид для персонального листа в MyAnimeList используя их API",
    content: (
      <>
        <div className={`flex flex-col gap-8`}>
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-semibold">
              Табличный вид для персонального листа в MyAnimeList используя их
              API
            </div>
            <div>
              <a
                href="https://malwand.vercel.app/"
                target="_blank"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                https://malwand.vercel.app/
                <MoveUpRight size={14} className="inline" />
              </a>
            </div>
          </div>
          <div className={blockMainContentStyles}>
            <div>
              <div className="w-[800px] mx-auto h-[269.781px] bg-neutral-600">
                <img
                  src="/home-page/projects-demo/malwand/result.png"
                  className="mx-auto"
                  width={800}
                  alt=""
                />
              </div>
              <div className="mx-auto">
                Результат: получилось завоевать внимание и запустить процесс
                итераций
              </div>
            </div>
            <div>
              <div className="h-[497.766px] mx-auto w-[800px] bg-neutral-600">
                <video
                  className="rounded-lg m-auto"
                  src="/home-page/projects-demo/malwand/forpc.mp4"
                  controls={false}
                  autoPlay
                  muted
                  loop
                  playsInline
                  width={800}
                />
              </div>
              <div className="mx-auto">
                Табличный просмотр и меню редактирования контента на пк
              </div>
            </div>
            <div>
              <div className="h-[647.203px] mx-auto w-[400px] bg-neutral-600">
                <video
                  className="rounded-lg m-auto"
                  src="/home-page/projects-demo/malwand/formobile.mp4"
                  controls={false}
                  autoPlay
                  muted
                  loop
                  playsInline
                  width={400}
                />
              </div>
              <div className="m-auto">На мобильных устройствах</div>
            </div>
            <div>
              <div className="w-[800px] h-[528.266px] mx-auto bg-neutral-600">
                <video
                  className="rounded-lg m-auto"
                  src="/home-page/projects-demo/malwand/funpc.mp4"
                  controls={false}
                  autoPlay
                  muted
                  loop
                  playsInline
                  width={800}
                />
              </div>
              <div className="mx-auto">
                Сортировка, фильтрация и поиск в таблице на пк
              </div>
            </div>
            <div>
              <div className="w-[600px] h-[396.203px] mx-auto bg-neutral-600">
                <video
                  className="rounded-lg m-auto"
                  src="/home-page/projects-demo/malwand/funmobile.mp4"
                  controls={false}
                  autoPlay
                  muted
                  loop
                  playsInline
                  width={600}
                />
              </div>
              <div className="mx-auto">
                Сортировка, фильтрация и поиск в таблице на мобильных
                устройствах
              </div>
            </div>
            <div>
             <div className="w-[800px] h-[586.734px] mx-auto bg-neutral-600">
             <video
                className="rounded-lg m-auto"
                src="/home-page/projects-demo/malwand/themes.mp4"
                controls={false}
                autoPlay
                muted
                loop
                playsInline
                width={800}
              />
             </div>
              <div className="mx-auto">Cветлая/темная тема</div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "ideaparallels",
    bio: "Лендинг для MVP на западный рынок",
    content: (
      <div className={blockMainStyles}>
        <div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-semibold">
                Лендинг MVP с большим количеством текста
              </div>
              <a
                href="https://ideaparallels.vercel.app/"
                target="_blank"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                https://ideaparallels.vercel.app/
                <MoveUpRight size={14} className="inline" />
              </a>
            </div>
          </div>
        </div>

        <div className={blockMainContentStyles}>
          <div>
            <div className="w-[800px] h-[586.734px] mx-auto bg-neutral-600 rounded-lg">
              <video
                className="rounded-lg m-auto"
                src="/home-page/projects-demo/ideaparallels/pc.mp4"
                controls={false}
                autoPlay
                muted
                loop
                playsInline
                width={800}
              />
            </div>
            <div className="mx-auto">Блок большого контента на пк</div>
          </div>
          <div>
            <div className="w-[400px] h-[633.203px] mx-auto bg-neutral-600 rounded-lg">
              <video
                className="rounded-lg m-auto"
                src="/home-page/projects-demo/ideaparallels/mobile.mp4"
                controls={false}
                autoPlay
                muted
                loop
                playsInline
                width={400}
              />
            </div>
            <div className="mx-auto">На мобильных устройствах</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Лендинг - прайс-лист для детейлинг салона",
    bio: "",
    content: (
      <div className={blockMainStyles}>
        <div>
          <div className="text-2xl font-semibold">
            Лендинг - прайс-лист, который будет вставляться в шапку instagram
            профиля
          </div>
        </div>

        <div className={`w-[300px] h-[629.703px] bg-neutral-600 mx-auto`}>
          <video
            className="rounded-lg m-auto"
            src="/home-page/projects-demo/auto/main.mp4"
            controls={false}
            autoPlay
            muted
            loop
            playsInline
            width={300}
          />
        </div>
      </div>
    ),
  },
];
import Drawer from "@mui/material/Drawer";

const Projects = () => {
  const [open, setOpen] = useState(false);

  const [activeProject, setActiveProject] = useState<null | projectItem>(null);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const projectSelect = (item: projectItem) => () => {
    setActiveProject(item);
    setOpen(true);
  };

  return (
    <div className="container min-h-[30vh] max-w-[900px] flex flex-col gap-5 pb-[200px]">
      {arr.map((item, index) => (
        <div
          onClick={projectSelect(item)}
          className="bg-neutral-900 flex flex-col gap-2 py-1.5 px-2 h-fit cursor-pointer w-[600px] overflow-hidden rounded-md"
          key={index}
        >
          <div className="px-2 pt-1 flex flex-col gap-1">
            <div className="text-xl">{item.title}</div>

            {item.bio ? (
              <div
                className="text-light-grey text-sm"
                dangerouslySetInnerHTML={{ __html: item.bio }}
              />
            ) : (
              <div>&#8203;</div>
            )}
          </div>
        </div>
      ))}

      <Drawer open={open} anchor="bottom" onClose={toggleDrawer(false)}>
        <div className="bg-neutral-800 text-white h-[80vh] pt-10 overflow-auto">
          <div className="container pb-[100px]">
            {activeProject ? <>{activeProject.content}</> : <>Loading...</>}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Projects;

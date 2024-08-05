import DBBagesBlock from "@/components/home-page/DBBagesBlock";
import StateManagersBadgesBlock from "@/components/home-page/StateManagersBadgesBlock";
import UIBadgesBlock from "@/components/home-page/UIBadgesBlock";
import { Avatar, Chip } from "@nextui-org/react";
import { ExternalLink, MoveUpRight } from "lucide-react";
import Link from "next/link";

import Content from "@/components/home-page/Content";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[100px] mt-20 lg:container">
        <div className=" flex flex-col gap-2 max-w-[644px]">
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

        <div className="flex flex-col gap-1">
          <div>Опыт разработки и построении web React приложений с нуля</div>
          <div>Участие в проработке архитектуры</div>
          <div>Опыт работе в команде с разными часовыми поясами</div>
          <div>
            Понимание принципов построения качественных приложений (архитектура,
            стабильность, производительность, UI/UX)
          </div>
          <div>Опыт работы с облаками AWS, Azure, Heroku, Yandex Cloud</div>
          <div>Опыт работы с WebSocket(Socket IO) и  REST API</div>

          <div className="text-light-grey mt-[20px] flex flex-col gap-1">
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
            <div className="flex flex-row gap-3 text-light-grey text-sm">
              <div>aivargabd@gmail.com</div>
              <div>tg: @aivargab</div>
            </div>
          </div>
        </div>
      </div>

      <Content />
    </>
  );
}

"use client";

import { MoveUpRight } from "lucide-react";

const BottomLink = () => (
  <div
    className="underline decoration-[#737373] hover:decoration-light-grey decoration-[1.5px] underline-offset-2 transition-all cursor-pointer"
    onClick={() => {
      //@ts-ignore
      window
        .open(
          "https://storage.yandexcloud.net/ideaparallels/worldskills.JPG",
          "_blank"
        )
        .focus();
    }}
  >
    Собираю приложения с 19 лет
    <MoveUpRight size={14} className="inline" />
  </div>
);

export default BottomLink;

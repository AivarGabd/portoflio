import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";

const fullWidth = 610;
const fullHeight = 800;

const arr = [
  {
    title: "Интернет магазин детских игрушек",
    bio: "Mongodb и облако для хранения фотографий находились сервисах Yandex Cloud <br /> Срок разработки - 2 недели",
    href:null
  },
  {
    title: "malwand",
    bio: "Табличный вид для персонального листа в MyAnimeList используя их API",
  },
  {
    title: "ideaparallels",
    bio: " Платформа для углубления в образовательный контент, без алгоритмов и AI",
  },
];

const Projects = () => {
  return (
    <div className="min-h-[30vh] max-w-[900px] flex flex-col gap-5 pb-[200px]">
      {arr.map((item, index) => (
        <div
          className="bg-neutral-900 flex flex-col gap-2 py-1 px-2 h-fit cursor-pointer w-fit overflow-hidden rounded-md"
          key={index}
        >
          <div className="px-2 pt-1 flex flex-col gap-1">
            <div className="text-xl">{item.title}</div>
            <div
              className="text-light-grey text-sm"
              dangerouslySetInnerHTML={{ __html: item.bio }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

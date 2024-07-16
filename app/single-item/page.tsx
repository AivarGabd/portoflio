"use client";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";


const Page = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-[20vh]">
      <div className="bg-black w-full lg:rounded-xl border border-[#191918] px-4 py-6 relative flex h-[250px] ">
        {/* <Button className="font-semibold m-auto">Feedback</Button>

        {open && (
          <motion.div className="absolute bg-[#D4D4D8] inset-0 m-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium debitis inventore laudantium recusandae dolorem quasi
            suscipit iste reiciendis, vel esse ipsum, nemo explicabo obcaecati
            quo quisquam ratione consequuntur magni reprehenderit!
          </motion.div>
        )} */}

        <motion.div
          className="m-auto bg-[#D4D4D8] p-2 rounded-xl"
          initial={{
            width: 106,
            height: 44,
          }}
          animate={{
            width: open ? 400 : 106,
            height: open ? 200 : 44,
          }}
        >
          <motion.button
            layout="position"
            onClick={() => setOpen((prev) => !prev)}
            className=" bg-black px-2 py-0.5 rounded-lg mt-0"
          >
            Feedback
          </motion.button>

        
        </motion.div>
      </div>
    </div>
  );
};

export default Page;

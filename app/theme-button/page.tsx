"use client";

import ExampleWrapper from "@/components/ExampleWrapper";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

const sunPaths = [
  "M12 3v1",
  "m18.364 5.636-.707.707",
  "M20 12h1",
  "m17.657 17.657.707.707",
  "M12 20v1",
  "m6.343 17.657-.707.707",
  "M3 12h1",
  "m5.636 5.636.707.707",
];

const Page = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  return (
    <ExampleWrapper>
      <div className="m-auto">
        <Button
          size="lg"
          variant="flat"
          radius="sm"
          isIconOnly
          onClick={() => {
            if (theme == "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        >
          {theme == "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-moon scale-125"
            >
              <motion.path
                initial={{ scale: 0.5, opacity: 0.2, rotate: 100 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
                d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
              />
            </svg>
          ) : (
            <svg
            
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-sun-medium scale-125"
            >
              <circle cx="12" cy="12" r="4" />
              {sunPaths.map((path, index) => (
                <motion.path
                  key={index}
                  initial={{ scale: 0.5, opacity: 0.2 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, delay: (index + 1) * 0.1 }}
                  d={path}
                />
              ))}
            </svg>
          )}
        </Button>
      </div>
    </ExampleWrapper>
  );
};

export default Page;

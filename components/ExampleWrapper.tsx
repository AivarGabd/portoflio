"use client";

import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { ChevronLeft } from "lucide-react";

const ExampleWrapper = ({
  children,
  styles,
}: Readonly<{
  children: React.ReactNode;
  styles?: string;
}>) => (
  <>
    <a href="/">
      <Button variant="flat" isIconOnly>
        <ChevronLeft />
      </Button>
    </a>
    <div className="mt-[20vh]">
      <div
        className={cn(
          `bg-black w-full lg:rounded-xl border border-[#191918] px-4 py-6 relative flex min-h-[250px] ${styles}`
        )}
      >
        {children}
      </div>
    </div>
  </>
);

export default ExampleWrapper;

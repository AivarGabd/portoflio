"use client";

import ExampleWrapper from "@/components/ExampleWrapper";
import { delay } from "@/lib/utils";
import { Button, Spinner } from "@nextui-org/react";
import { ArrowUpFromLine } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Drawer } from "vaul";

const CustomDrawer = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [isContentLoading, setIsContentLoading] = useState(true);



  return (
    <ExampleWrapper styles="p-0">
      <div
        className="flex m-auto overflow-clip relative h-full w-full lg:max-w-[230px] min-h-[300px]"
        ref={setContainer}
      >
        <div className="m-auto">
          <Drawer.Root
            onOpenChange={async (e) => {
              await delay(500);
              setIsContentLoading(!e);
            }}
          >
            <Drawer.Trigger asChild>
              <Button isIconOnly>
                <ArrowUpFromLine />
              </Button>
            </Drawer.Trigger>
            <Drawer.Portal container={container}>
              <Drawer.Overlay />
              <Drawer.Content
                className={`flex flex-col bottom-0 left-0 right-0 rounded-t-[10px] bg-gray-100 dark:bg-neutral-900 pt-1 px-2 h-[500px] lg:h-[160px] outline-none z-[9999] fixed lg:absolute`}
                style={{
                  paddingBottom: "env(safe-area-inset-bottom)",
                }}
              >
                <Drawer.Handle className="bg-gray-200 mt-2" />
                {isContentLoading ? (
                  <Spinner className="m-auto" color="default" size="lg" />
                ) : (
                  <div className="m-auto text-xl font-medium">📞 Hello?</div>
                )}
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </div>
    </ExampleWrapper>
  );
};
export default CustomDrawer;

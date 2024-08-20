"use client";

import { cn } from "@/lib/utils";

const ExampleWrapper = ({
  children,
  styles,
}: Readonly<{
  children: React.ReactNode;
  styles?: string;
}>) => (
  <>
    <div
      className={cn(
        ` bg-black rounded-md px-4 py-6 relative flex lg:h-[300px] w-[380px] lg:w-[500px] ${styles}`
      )}
    >
      {children}
    </div>
  </>
);

export default ExampleWrapper;

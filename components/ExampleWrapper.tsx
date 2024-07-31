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
        ` bg-black rounded-md border border-[#191918] px-4 py-6 relative flex min-h-[250px] w-[380px] lg:w-[500px] ${styles}`
      )}
    >
      {children}
    </div>
  </>
);

export default ExampleWrapper;

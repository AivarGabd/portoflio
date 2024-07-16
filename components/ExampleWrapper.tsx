"use client";

import { cn } from "@/lib/utils";

const ExampleWrapper = ({
  children,
  styles,
}: Readonly<{
  children: React.ReactNode;
  styles?: string;
}>) => (
  <div className="mt-[20vh]">
    <div
      className={cn(
        `bg-black w-full lg:rounded-xl border border-[#191918] px-4 py-6 relative flex min-h-[250px] ${styles}`
      )}
    >
      {children}
    </div>
  </div>
);

export default ExampleWrapper;

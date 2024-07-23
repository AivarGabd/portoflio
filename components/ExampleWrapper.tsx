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
        ` bg-black w-full rounded-xl border border-[#191918] px-4 py-6 relative flex min-h-[250px] min-w-[380px] lg:min-w-[500px] ${styles}`
      )}
    >
      {children}
    </div>
  </>
);

export default ExampleWrapper;

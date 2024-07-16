'use client'

const ExampleWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="mt-[20vh]">
    <div className="bg-black w-full lg:rounded-xl border border-[#191918] px-4 py-6 relative flex min-h-[250px] ">
      {children}
    </div>
  </div>
);


export default ExampleWrapper
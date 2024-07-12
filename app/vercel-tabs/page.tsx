"use client";

import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];

function Page() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  let [focusedTab, setFocusedTab] = useState<string|null>(tabs[0].id);

  return (
    <div className="mt-[20vh]">
      <div className="bg-black w-full lg:rounded-xl border border-[#191918] px-4 py-6 relative flex h-[250px] ">
        <div className="flex space-x-1 h-fit m-auto" onMouseLeave={()=>setFocusedTab(null)}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onMouseOver={() => setFocusedTab(tab.id)}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                focusedTab === tab.id || activeTab === tab.id
                  ? "text-white"
                  : "hover:text-white/60 text-[#807E80]"
              } relative rounded-full px-3 py-2 text-sm font-medium  transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {focusedTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-[#1F1F1F]"
                  style={{ borderRadius: 4 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {activeTab === tab.id && (
                <motion.div
                  layoutId="bottom"
                  className="absolute inset-0 z-20 bg-white h-0.5 bottom-0 top-auto"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <div className="relative z-50">{tab.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;

import React from "react";

interface Props {
  tabs: string[];
  activeTab: number;
  onChange: (index: number) => void;
}

export const TabSelector = React.memo(({ tabs, activeTab, onChange }: Props) => {
  return (
    <div role="tablist" aria-label="Tabs" className="flex gap-2 mb-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          role="tab"
          aria-selected={activeTab === index}
          aria-label={`Tab ${index + 1}`}
          className={`px-4 py-2 rounded ${
            activeTab === index ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => onChange(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
});
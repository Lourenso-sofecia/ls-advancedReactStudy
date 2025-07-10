import React from "react";

export const TabsContainer = React.memo(({ children }: { children: React.ReactNode }) => (
  <section role="tabpanel" className="p-4 rounded bg-gray-100 dark:bg-gray-800 shadow">
    {children}
  </section>
));
import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Skeleton } from "../../../components";
import { TabSelector } from "../../../components/tabs/TabSelector";
import { TabsContainer } from "../../../components/tabs/TabsContainer";
import { fadeSlideUp } from "../../../animations/motionVariants";

const TabOne = lazy(() => import("../../../components/tabs/TabOne"));
const TabTwo = lazy(() => import("../../../components/tabs/TabTwo"));
const TabThree = lazy(() => import("../../../components/tabs/TabThree"));

const tabs = ["Tab 1", "Tab 2", "Tab 3"];

export function TabsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  const renderTab = useCallback(() => {
    switch (activeTab) {
      case 0:
        return <TabOne />;
      case 1:
        return <TabTwo />;
      case 2:
        return <TabThree />;
      default:
        return null;
    }
  }, [activeTab]);

  useEffect(() => {
    document.title = `Tabs - LS Advanced Study`;
  }, []);

  return (
    <motion.section variants={fadeSlideUp} className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white sm:p-4">
      <Link
        to="/study-schedule/week-4-performance-lazy-loading"
        className="mb-4 inline-block text-primary hover:underline"
      >
        &larr; Voltar
      </Link>
      <h1
        className="sm:text-3xl text-2xl font-bold mb-4"
        aria-label="App com tabs otimizadas"
      >
        Tabs Otimizadas com React
      </h1>
      <TabSelector
        tabs={tabs}
        activeTab={activeTab}
        onChange={handleTabChange}
      />
      <Suspense fallback={<Skeleton className="h-24" />}>
        <TabsContainer>{renderTab()}</TabsContainer>
      </Suspense>
    </motion.section>
  );
}

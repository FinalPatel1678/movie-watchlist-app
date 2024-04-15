import WatchlistView from "@components/WatchlistView";
import MainLayout from "@layouts/MainLayout";
import React from "react";

const WatchlistPage: React.FC = () => {
  return (
    <MainLayout>
      <WatchlistView />
    </MainLayout>
  );
};

export default WatchlistPage;

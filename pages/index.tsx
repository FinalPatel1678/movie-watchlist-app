import MovieSection from "@components/MovieSection";
import MainLayout from "@layouts/MainLayout";

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <MovieSection />
    </MainLayout>
  );
};

export default HomePage;

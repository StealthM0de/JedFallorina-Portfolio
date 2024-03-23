import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Home } from '../../components/Home/Home';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Jed Alston M. Fallorina</title>
      </Helmet>

      {/* Home Component */}
      <Home />
    </HelmetProvider>
  );
};

export default HomePage;

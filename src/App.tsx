import styles from "./App.module.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Business from "./components/main/business/Business";
import DataWithAi from "./components/main/dataAi/DataWithAi";
import Development from "./components/main/development/Development";
import Discount from "./components/main/discount/Discount";
import Support from "./components/main/support/Support";
import Supported from "./components/main/supported/Supported";
import Technologies from "./components/main/technologies/Technologies";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <DataWithAi />
      <Discount />
      <Technologies />
      <Development />
      <Support />
      <Business />
      <Supported />
      <Footer />
    </div>
  );
}

export default App;

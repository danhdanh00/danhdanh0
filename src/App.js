
import './App.css';
import FooterBottomArea from './component/footer/FooterBottomArea';
import FooterTopArea from './component/footer/FooterTopArea';
import HeaderArea from './component/header/HeaderArea';
import SiteBrandingArea from './component/header/SiteBrandingArea';
import ContentArea from './component/main/ContentArea';
import Navigation from './component/main/Navigation';
import ProductWidgetArea from './component/main/ProductWidgetArea';
import PromoArea from './component/main/PromoArea';
import SliderArea from './component/main/SliderArea';


function App() {
  return (
    <div className="project">
      <HeaderArea/>
      <SiteBrandingArea/>
      <Navigation/>
      <SliderArea/>
      <PromoArea/>
      <ContentArea/>
      <ProductWidgetArea/>
      <FooterTopArea/>
      <FooterBottomArea/>
      
      
    </div>
  );
}

export default App;

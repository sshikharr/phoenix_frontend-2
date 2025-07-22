import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentPage from "./Pages/PaymentPage.jsx";

// Import Components
const Home = lazy(() => import("./components/Home"));
const TrackOrder = lazy(() => import("./Pages/TrackOrder"));
const TrackOrderMobile = lazy(() => import("./Pages/TrackOrderMobile.jsx"));
const FAQs = lazy(() => import("./Pages/FAQs.jsx"));
const Contact = lazy(() => import("./Pages/ContactUs.jsx"));
const SignUp = lazy(() => import("./Auth/SignUp.jsx"));
const Login = lazy(() => import("./Auth/Login.jsx"));
const ProductDetail = lazy(() => import("./Pages/ProductDetail"));
// Collection
const GamingProducts = lazy(() => import("./Pages/Collection/GamingProducts"));
const BasicProducts = lazy(() =>
  import("./Pages/Collection/BasicProducts.jsx")
);
const LuxuryProducts = lazy(() =>
  import("./Pages/Collection/LuxuryProducts.jsx")
);
const WfhProducts = lazy(() => import("./Pages/Collection/WfhProducts.jsx"));
const BossProducts = lazy(() => import("./Pages/Collection/BossProducts.jsx"));
const ExecutiveProducts = lazy(() =>
  import("./Pages/Collection/ExecutiveProducts.jsx")
);
// Add Product
const AddProduct = lazy(() => import("./AddProduct"));
const AddCategory = lazy(() => import("./AddCategory.jsx"));
// Support Needs
const NeckSupport = lazy(() =>
  import("./Pages/ShopBy/Support Need/NeckSupport")
);
const ActiveSupport = lazy(() =>
  import("./Pages/ShopBy/Support Need/ActiveSupport")
);
const Posture = lazy(() => import("./Pages/ShopBy/Support Need/Posture"));
const LumbarSupport = lazy(() =>
  import("./Pages/ShopBy/Support Need/LumbarSupport")
);
// Price
const Under5K = lazy(() => import("./Pages/ShopBy/Price/Under5K"));
const Under15K = lazy(() => import("./Pages/ShopBy/Price/Under15K"));
const Above15K = lazy(() => import("./Pages/ShopBy/Price/Above15K"));
// Features
const ArmRest = lazy(() => import("./Pages/ShopBy/Features/ArmRest.jsx"));
const HeadRest = lazy(() => import("./Pages/ShopBy/Features/HeadRest.jsx"));
const LumbarPillow = lazy(() =>
  import("./Pages/ShopBy/Features/LumbarPillow.jsx")
);
const MetalBase = lazy(() => import("./Pages/ShopBy/Features/MetalBase.jsx"));
// Best Sellers
const ErgonomicChairs = lazy(() =>
  import("./Pages/ShopBy/Best Sellers/ErgonomicChairs.jsx")
);
const ErgonomicChairsPro = lazy(() =>
  import("./Pages/ShopBy/Best Sellers/ErgonomicChairsPro.jsx")
);
const VerveChairs = lazy(() =>
  import("./Pages/ShopBy/Best Sellers/VerveChairs.jsx")
);
const TaskChairs = lazy(() =>
  import("./Pages/ShopBy/Best Sellers/TaskChairs.jsx")
);
// New Arrivals
const AireChairs = lazy(() =>
  import("./Pages/ShopBy/New Arrivals/AireChairs.jsx")
);

function App() {
  return (
   
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/track-order-mobile" element={<TrackOrderMobile />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/*Collections */}
          <Route path="/gaming-chairs" element={<GamingProducts />} />
          <Route path="/basic-chairs" element={<BasicProducts />} />
          <Route path="/luxury-chairs" element={<LuxuryProducts />} />
          <Route path="/wfh-chairs" element={<WfhProducts />} />
          <Route path="/boss-chairs" element={<BossProducts />} />
          <Route path="/executive-chairs" element={<ExecutiveProducts />} />
          {/* Support Need */}
          <Route path="/posture" element={<Posture />} />
          <Route path="/lumbar-support" element={<LumbarSupport />} />
          <Route path="/neck-support" element={<NeckSupport />} />
          <Route path="/active-support" element={<ActiveSupport />} />
          {/* Price */}
          <Route path="/under5k" element={<Under5K />} />
          <Route path="/under15k" element={<Under15K />} />
          <Route path="/above15k" element={<Above15K />} />
          {/* Features */}
          <Route path="/arm-rest" element={<ArmRest />} />
          <Route path="/head-rest" element={<HeadRest />} />
          <Route path="/lumbar-pillow" element={<LumbarPillow />} />
          <Route path="/metal-base" element={<MetalBase />} />
          {/* Best Sellers */}
          <Route path="/ergonomic-chairs" element={<ErgonomicChairs />} />
          <Route path="/ergonomic-chairs-pro" element={<ErgonomicChairsPro />} />
          <Route path="/verve-chairs" element={<VerveChairs />} />
          <Route path="/task-chairs" element={<TaskChairs />} />
          {/* New Arrivals */}
          <Route path="/aire-chairs" element={<AireChairs />} />
          {/*Payment Page */}
          <Route path="/payment" element={<PaymentPage/>} />
        </Routes>
      </Suspense>
   
  );
}

export default App;

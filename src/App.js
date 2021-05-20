import './App.css';
import Cart from './components/Cart';
import Login from './components/Login';
import Product from './components/Product';
import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content';
import LoginEmailPassword from './components/LoginEmailPassword';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function App() {
  const bannerImages = [
    {
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
    }
  ]
  const contentImage = [
    {
      id: 1,
      title: "Get fit at home",
      link: "Explore now",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
    },
    {
        id: 3,
        link: "See more",
        title : "AmazonBasics",
        image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
    }
  ]


  const contentImageBelow = [
    {
      id: 1,
      title: "Get fit at home",
      link: "Explore now",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
    },
    {
        id: 2,
        link: "Shop now",
        title : "Computers and Accessories",
        image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
    },
    {
        id: 3,
        link: "See more",
        title : "AmazonBasics",
        image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
    },
    {
      id: 4,
      link: "See more",
      title : "AmazonBasics",
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
  }
  ]

  
  const basketProduct = [
    {
      id: 1,
      title: "TV",
      link: "Explore now",
      cost: 100,
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
    },
    {
        id: 2,
        link: "Shop now",
      cost: 1005,
      title : "Armchair",
        image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
    },
    {
        id: 3,
      cost: 1050,
      link: "See more",
        title : "Computer",
        image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
    },
    {
      id: 4,
      cost: 1000,
      link: "See more",
      title : "Modems",
      image : "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
  }
  ]
  const user  = true;
  
  return (
     <Router>
        <div className="app">
          <Switch>
             <Route path="/login" components={LoginEmailPassword}></Route>
            <Route path= "/cart">
                 <Header/>
                 <Cart/>
            </Route>
            <Route path="/product">
              <Header/>
              <Product allBasketItems={basketProduct}/>
            </Route>
            <Route path="/">
              <Header/> 
              <Banner all={bannerImages}/>
              <Content data={contentImage} dataBelow={contentImageBelow}/> 
            </Route>
            </Switch>
        </div>
     </Router>
  );
}
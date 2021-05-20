import React from "react";
import UpperProduct from "./UpperProduct";
import SignInSecurely from "./SignInSecurely";
import CategoryProduct from './CategoryProduct';
import "../styles/Content.css";

const Content = ({ data, dataBelow }) => {
  const categoryChoices = [
    {
      id: 1,
      title: "Computers & Accessories",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer240x._SY170_CB468850970_.jpg"
    },
    {
      id: 2,
      title: "Video Games",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_240X._SY170_CB438749318_.jpg"
    },
    {
      id: 3,
      title: "Baby",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby240X._SY170_CB468850909_.jpg"
    },
    {
      id: 4,
      title: "Toys & Games",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys240X._SY170_CB468851693_.jpg"
    }
  ]
  const SignInSecurelyData = [
    {
      id: 4,
      title: "Sign in for the best experience",
      image:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg",
    },
  ];
  return (
    <div className="content">
      <div className="product__wrapper">
        <CategoryProduct link="Shop now" categoryData={categoryChoices} categoryTitle="Shop by Category"/>
        {data.map((everyProduct) => {
          return (
            <UpperProduct
              key={everyProduct.id}
              title={everyProduct.title}
              image={everyProduct.image}
              link={everyProduct.link}
            />
          );
        })}
        <SignInSecurely dataSign={SignInSecurelyData} />
      </div>
      <div className="product__wrapper">
        {dataBelow.map((everyProduct) => {
          return (
            <UpperProduct
              key={everyProduct.id}
              title={everyProduct.title}
              image={everyProduct.image}
              link={everyProduct.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;

import React from "react";
import "./products.css";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import productDetail from "./products.json";
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../../redux/actions/actions';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.cart.items);

  const handleAddToCart = (item) => {
    toast.success("Added to Cart",{
      position: "bottom-right"
    });
    
    dispatch(addToCart(item));
  }

  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">Electronics</div>
        <div className="productTopBannerItemsSubMenu">
          Mobiles & Accessories
        </div>
        <div className="productTopBannerItemsSubMenu">
          Laptops & Accessories
        </div>
        <div className="productTopBannerItemsSubMenu">
          TV & Home Entertainment
        </div>
        <div className="productTopBannerItemsSubMenu">Audio</div>
        <div className="productTopBannerItemsSubMenu">Cameras</div>
        <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
        <div className="productTopBannerItemsSubMenu">Smart Technology</div>
        <div className="productTopBannerItemsSubMenu">Musical Instruments</div>
        <div className="productTopBannerItemsSubMenu">Office & Stationery</div>
      </div>

      <div className="productsPageMain">
        <div className="productsPageMainLeftCategory">
          <div className="productsPageMainLeftCategoryTitle">Category</div>
          <div className="productsPageMainLeftCategoryContent">
            <div className="productsPageMainLeftCategoryTitleContent">
              Electronics
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Macbooks
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Customer Reviews
            </div>

            <div className="ratingLeftBox">
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#E28D00" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#E28D00" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#E28D00" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#E28D00" }} />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#E28D00" }}
              />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#E28D00" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#E28D00" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#E28D00" }} />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#E28D00" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#E28D00" }}
              />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#E28D00" }} />
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#E28D00" }} />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#E28D00" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#E28D00" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#E28D00" }}
              />
              <div className="andUp">& Up</div>
            </div>

            <div className="ratingLeftBox">
              <StarOutlinedIcon sx={{ fontSize: "20px", color: "#E28D00" }} />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#E28D00" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#E28D00" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#E28D00" }}
              />
              <StarOutlineOutlinedIcon
                sx={{ fontSize: "20px", color: "#E28D00" }}
              />
              <div className="andUp">& Up</div>
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Item Condition
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">New</div>
            <div className="productsPageMainLeftCategoryTitleContent">
              Renewed
            </div>

            <div className="productsPageMainLeftCategoryContentSub">Price</div>
            <div className="productsPageMainLeftCategoryTitleContent">
              Under ₹1,000
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              ₹1,000 - ₹5,000
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              ₹5,000 - ₹10,000
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              ₹10,000 - ₹20,000
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              Over ₹20,000
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              New Arrivals
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              Last 30 days
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              Last 90 days
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Discounts
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              10% Off or more
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              20% Off or more
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              30% Off or more
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              40% Off or more
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              50% Off or more
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              60% Off or more
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              70% Off or more
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Brand
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              Apple
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              Samsung
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              Redmi
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              OnePlus
            </div>
            <div className="productsPageMainLeftCategoryTitleContent">
              Lenovo
            </div>

          </div>
        </div>

        <div className="productsPageMainRight">
          <div className="productsPageMainRightTopBanner">
            1-9 of over 70,000 results for{" "}
            <span className="productsPageMainRightTopBannerSpan">
              Electronics
            </span>
          </div>

          <div className="itemsImageProductPage">
            {productDetail.product.map((item, index) => {
              return (
                <div className="itemsImageProductPageOne" key={item.id}>
                  <div className="imgBlockitemsImageProductPageOne">
                    <img
                      src={
                        item.imageUrl
                      }
                      className="productImageProduct"
                    />
                  </div>

                  <div className="productNameProduct">
                    <div>
                      {
                        item.name
                      }
                    </div>

                    <div className="productNameProductRating">
                      <StarOutlinedIcon
                        sx={{ fontSize: "20px", color: "#E28D00" }}
                      />
                      <StarOutlinedIcon
                        sx={{ fontSize: "20px", color: "#E28D00" }}
                      />
                      <StarOutlinedIcon
                        sx={{ fontSize: "20px", color: "#E28D00" }}
                      />
                      <StarOutlinedIcon
                        sx={{ fontSize: "20px", color: "#E28D00" }}
                      />
                      <StarOutlineOutlinedIcon
                        sx={{ fontSize: "20px", color: "#E28D00" }}
                      />
                    </div>

                    <div className="priceProductDetailPage">
                      <div className="currencyText">₹</div>
                      <div className="rateHomeDetail">
                        <div className="rateHomeDetailsPrice">{item.price}</div>
                        <div className="addtobasketBtn" onClick={()=>{handleAddToCart(item)}}>Add To Cart</div>
                      </div>
                    </div>

                    <div className="offProductPage">
                      Upto 10% off on selected cards
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;

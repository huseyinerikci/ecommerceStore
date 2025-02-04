import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from "../error/Error";
import {
  filterByColor,
  filterBySize,
  filteredGender,
  filteredProducts,
  sortByPrice,
} from "../../features/slice/productsSlice";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const dispatch = useDispatch();

  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between py-8">
            <div className="flex items-center">
              {genderButtons.map((item, i) => {
                return (
                  <div key={i}>
                    <Button
                      onClick={() => dispatch(filteredGender(item))}
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                    >
                      {item}
                    </Button>
                  </div>
                );
              })}
              <Button
                onClick={() => dispatch(sortByPrice())}
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
              >
                High Price
              </Button>
              {/* Color */}
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select a color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, i) => {
                    return (
                      <MenuItem
                        onClick={() => dispatch(filterByColor(item))}
                        style={{ color: item }}
                        key={i}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              {/* Size */}
              <Menu>
                <MenuHandler>
                  <Button
                    disabled={type === "Bags" || type === "Shoes"}
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select a size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {sizeButtons.map((item, i) => {
                    return (
                      <MenuItem
                        key={i}
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
            <div className="pr-14">
              <Button
                onClick={() => dispatch(filteredProducts(type))}
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </div>
        {error ? (
          <Error />
        ) : (
          <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
            {products
              .filter((product) => product.type === type)
              .map((product, i) => {
                return (
                  <div key={i}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;

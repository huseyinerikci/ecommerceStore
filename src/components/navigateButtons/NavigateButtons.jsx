import { Button } from "@material-tailwind/react";
import React from "react";
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
import { filteredProducts } from "../../features/slice/productsSlice";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const dispatch = useDispatch();
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, i) => {
          return (
            <div key={i} className="mr-4">
              <Link to={"/filteredProducts/" + button}>
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="hover:bg-green-300 duration-300 ease-in-out"
                  onClick={() => dispatch(filteredProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
        <h3 className="text-red-600 text-center text-lg font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
};

export default NavigateButtons;

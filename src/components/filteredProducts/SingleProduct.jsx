import { Button, Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/slice/cartSlice";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const { id } = useParams();
  const dispatch = useDispatch();

  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);
  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, i) => {
          return (
            <div key={i} className="flex justify-center items-center py-10">
              <div className="pl-44 grow-[2]">
                <img
                  src={item.img}
                  alt={item.img}
                  className="h-[850px] rounded-lg"
                />
              </div>
              <div className="grow-[3]">
                <div className="max-w-lg">
                  <h5 className="text-2xl font-bold tracking-normal leading-none pb-4">
                    {item.name}
                  </h5>
                  <p className="text-orange-500 text-xl font-bold tracking-normal leading-none pb-4">
                    15% OFF
                  </p>
                  <p className="text-gray-600 text-xl font-bold tracking-normal leading-none pb-4">
                    {item.text}
                  </p>
                  <div className="pb-4">
                    {/* SİZE */}
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.size.map((item, i) => {
                            return (
                              <option key={i} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      // Not Size
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          {/* dark:text-white */}
                          Pick a size
                        </label>
                        <select
                          id="size"
                          name="size"
                          disabled={true}
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item?.size?.map((item, i) => {
                            return (
                              <option key={i} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    )}
                  </div>
                  {/* Color */}
                  <div className="pb-4">
                    <label
                      htmlFor="color"
                      className="block  mb-2 text-sm font-medium text-gray-900"
                    >
                      Pick a color
                    </label>
                    <select
                      id="color"
                      name="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {item.color.map((color, i) => {
                        return (
                          <option key={i} value={color}>
                            {color}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <Tooltip content="Add to Cart" placement="bottom">
                    <Button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            name: item.name,
                            img: item.img,
                            text: item.text,
                            size: size,
                            color: color,
                            price: item.price,
                            amount: 1,
                            totalPrice: item.price,
                            // totalprice?price
                          })
                        )
                      }
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                    >
                      Add to Cart
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;

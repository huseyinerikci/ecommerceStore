import React, { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/slice/cartSlice";

const Cart = ({ openModal, setOpen }) => {
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="">
      {cart.length > 0 ? (
        <Fragment>
          <Dialog
            className="border-0 outline-0  h-[95vh] overflow-y-auto"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-center items-start "
            >
              {cart.map((item, i) => {
                return (
                  <div key={i}>
                    <div className="grid grid-cols-2 py-4">
                      <div>
                        <img
                          className="h-[125px] rounded-md"
                          src={item.img}
                          alt={item.img}
                        />
                        <div className="flex flex-col items-start">
                          <h4 className="text-black text-base font-bold tracking-normal leading-none pt-2">
                            {item.name}
                          </h4>
                        </div>
                        <div className="max-w-xs">
                          <p className="text-black text-xs tracking-normal leading-none pt-2">
                            {item.text}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-black text-sm tracking-normal leading-none pt-2">
                          Selected size:{" "}
                          <span className="ml-2">{item.size}</span>
                        </p>
                        <p className="text-black text-sm tracking-normal leading-none pt-2">
                          Selected color:{" "}
                          <span
                            className="ml-2 rounded-full px-2"
                            style={{ background: item.color }}
                          ></span>
                        </p>
                        <p className="text-black text-sm tracking-normal leading-none pt-2">
                          Amount: <span className="ml-2">{item.amount}</span>
                        </p>
                        <p className="text-black text-sm tracking-normal leading-none pt-2">
                          Single Item Price:{" "}
                          <span className="ml-2">{item.price}$</span>
                        </p>
                        <p className="text-black text-sm tracking-normal leading-none pt-2">
                          Total Item Prices:{" "}
                          <span className="ml-2">{item.totalPrice}$</span>
                        </p>
                        <div className="pt-4">
                          <Tooltip
                            content="Remove from the cart"
                            placement="bottom"
                          >
                            <Button
                              onClick={() => dispatch(removeFromCart(item))}
                              size="sm"
                              color="red"
                              ripple={true}
                              variant="filled"
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex justify-start items-center">
              <p className="text-black text-base tracking-normal leading-none pt-2">
                Total Price of All Products:{" "}
                <span className="font-bold ">{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              <div>
                <h1 className="text-black text-3xl font-bold tracking-normal leading-none py-4">
                  Your bag is empty
                </h1>
                <p className="text-black text-base tracking-normal leading-none">
                  Add some products
                </p>
              </div>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;

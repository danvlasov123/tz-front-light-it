import { axiosInstance } from "services/httpInstance";
import { Dispatch } from "@reduxjs/toolkit";
import { setProductsReducer } from "store/slices/productSlice";
import { IProduct } from "interfaces/IProduct";
import { IComment } from "interfaces/IComment";

export const getProductsActions = () => async (dispatch: Dispatch) => {
  try {
    const response = await axiosInstance.get<IProduct[]>("/products");

    if (response.status === 200) {
      dispatch(setProductsReducer(response.data));
    }
  } catch (e) {
    return console.log(e);
  }
};

export const getProductById = async (id: string) => {
  return await axiosInstance
    .get<IProduct>(`/products/${id}`)
    .then((res) => res.data);
};

export const getCommentById = async (product_id: string) => {
  return await axiosInstance
    .get<IComment[]>(`/comments/${product_id}`)
    .then((res) => res.data);
};

export const postCreateComment = async (data: IComment) => {
  return await axiosInstance.post<IComment>("/create-comment", data);
};

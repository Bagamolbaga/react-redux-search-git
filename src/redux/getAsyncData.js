import API from "../axios.api";
import {
  setData,
  setTotalPage,
  setCurrentPage,
  setLoadingTrue,
  setLoadingFalse
} from "./actions";

export const getData = (query) => {
  return async (dispatch) => {
    dispatch(setLoadingTrue());
    
    let res = await API.get(`/search/repositories?q=${query}&per_page=10`);
    let resDestr = res.data.items;
    let obj = resDestr.map((item) => {
      return {
        fullName: item.full_name,
        author: item.owner.login,
        stars: item.stargazers_count,
        link: item.html_url
      };
    });

    dispatch(setData(obj));
    dispatch(setTotalPage(res.data.total_count));
    dispatch(setLoadingFalse());
  };
};

export const getDataOnBtn = (query, page) => {
  return async (dispatch) => {
    dispatch(setLoadingTrue());

    let res = await API.get(
      `/search/repositories?q=${query}&per_page=10&page=${page}`
    );
    let resDestr = res.data.items;
    let obj = resDestr.map((item) => {
      return {
        fullName: item.full_name,
        author: item.owner.login,
        stars: item.stargazers_count,
        link: item.html_url
      };
    });

    dispatch(setData(obj));
    dispatch(setCurrentPage(page));
    dispatch(setLoadingFalse());
  };
};

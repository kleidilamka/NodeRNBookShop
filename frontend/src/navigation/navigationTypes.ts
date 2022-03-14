import { Product } from "../models";

export type RootStackParamsList = {
  ProductStore: undefined;
  ProductDetails: { item: Product };
  Cart: undefined;
  Bookmarks: undefined;
  Address: { totalPrice: number };
  ChangePassword: undefined;
  Support: undefined;
  Search: undefined;
  Profile: undefined;
};

export type AuthStackParamsList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
};

export type BottomTabsParamsList = {
  MainNavigator: undefined;
  SearchScreen: undefined;
  Bookmarks: undefined;
};

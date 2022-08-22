import { configureStore } from "@reduxjs/toolkit";
import data from "./features/fetchData";

export default configureStore({
	reducer: {
		data,
	},
});

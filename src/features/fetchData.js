import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	datas: [],
	error: "",
};

export const fetchDatas = createAsyncThunk(
	"datas/fetchDatas",
	async (differentNews) => {
		const response = await axios.get(
			`https://inshorts.deta.dev/news?${differentNews}`
		);
		return response.data;
	}
);

const productSlice = createSlice({
	name: "data",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchDatas.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchDatas.fulfilled, (state, action) => {
			state.loading = false;
			state.datas = action.payload;
			state.error = "";
		});
		builder.addCase(fetchDatas.rejected, (state, action) => {
			state.loading = false;
			state.datas = [];
			state.error = action.error.message;
		});
	},
});
export default productSlice.reducer;

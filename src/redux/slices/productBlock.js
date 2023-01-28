import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await fetch('https://63b1da190d51f5b2972024ac.mockapi.io/products');
  const data = await response.json();
  console.log(data, 'data');
  return data;
});

export const fetchCurrentPageById = createAsyncThunk(
  'product/fetchCurrentPageById',
  async (idCurrentPage) => {
    const response = await fetch(
      `https://63b1da190d51f5b2972024ac.mockapi.io/products/${idCurrentPage}`,
    );
    const data = await response.json();
    console.log(data, 'idCurrentPage');
    return data;
  },
);

const initialState = {
  items: [],
  showItems: [],
  infoByPage: [],
  value: [0,1],
  status: null,
  error: null,
};

export const productBlock = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductParam: (state, action) => {
      const collection = state.items.find((obj) => obj.id === action.payload.id);

      if (collection) {
        console.log('копия');
      } else {
        state.items.push({ ...action.payload });
      }

      // state.items.push(action.payload)
      // console.log(state.items,"items - -");
    },
    // setFindProduct :(state,action)=>{
    //   console.log("yfxf");
    //   console.log(action.payload,"action.payload");
    //   console.log(state.items,"items");
    //   const itemOnId = state.items.find(item=>item.id === Number(action.payload))
    //   console.log(state.items,"items");
    //   if (itemOnId) {
    //     console.log(itemOnId,"ItemOnId");
    //   }
    // }
    setTest: (state, action) => {
      state.items.push(action.payload);
      console.log(state.items, 'dsadasdas');
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'succeful';
      state.items = action.payload;

      state.showItems = action.payload.slice(0, 4);
    },
    [fetchProducts.rejected]: (state, action) => {},

    // [fetchCurrentPageById.pending]: (state) => {
    //   state.status = 'loading';
    // },
    // [fetchCurrentPageById.fulfilled]: (state, action) => {
    //   state.status = 'succeful';
    //   state.infoByPage = action.payload;
  
    // },
    // [fetchCurrentPageById.rejected]: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { setProductParam, setFindProduct, setTest } = productBlock.actions;

export default productBlock.reducer;

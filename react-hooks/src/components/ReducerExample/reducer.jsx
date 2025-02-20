const reducer = (state, action) => {
   switch (action.type) {
      case 'CLEAR':
         return { count: 0 };
      case 'INCREMENT':
         return { count: state.count + 1};
      case 'DECREMENT':
         return { count: state.count -1 };
      case "DOUBLE":
         return { count: state.count * 2 };
      default:
         return { count: state.count }
   }
};

export default reducer;
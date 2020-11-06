const initialState = [{}];

export default (state = initialState, action) => {
  //console.log(action);

  switch (action.type) {
    case 'SET_BRANDWISE_REVIEWS':
      return action.brandswiseReview;

    default:
      return state;
  }
};

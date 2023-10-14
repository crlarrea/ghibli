const HeroReducer = (state = [], action) => {
  switch (action.type) {
    case "updateHero":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
export { HeroReducer };

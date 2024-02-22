// calculatorreducer.js
const initialState = {
  answer: 'joban',
  leftoperand: 0,
  rightoperand: 0,
  operator: '=',
};
console.log('first', initialState?.answer);
const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEFTOPERAND':
      // Implement logic to handle input updates
      return {
        ...state,
        leftoperand:state.leftoperand*10+ Number(action.payload),
      };
    case 'CLEAR_LEFT':
      // Implement logic to handle input updates
      return {
        ...state,
        leftoperand:Math.floor(state.leftoperand/10),
      };
    case 'CLEAR_RIGHT':
      // Implement logic to handle input updates
      return {
        ...state,
        rightoperand:Math.floor(state.rightoperand/10),
      };
    case 'SET_RIGHTOPERAND':
      // Implement logic to handle input updates
      return {
        ...state,
        rightoperand:state.rightoperand*10+ Number(action.payload),
      };
    case 'SETOPERATOR':
      // Implement logic to handle input updates
      return {
        ...state,
        operator: action.payload,
      };
    case 'CALCULATE':
      // Implement logic to handle input updates
      return {
        ...state,
        answer: () => {
          if (state.operator == '*') {
            state.operator = '';
            return state.leftoperand * state.rightoperand;
          } else if (state.operator == '+') {
            state.operator = '';
            return state.leftoperand + state.rightoperand;
          } else if (state.operator == '-') {
            state.operator = '';
            return state.leftoperand - state.rightoperand;
          } else if (state.operator == '/') {
            state.operator = '';
            return state.leftoperand / state.rightoperand;
          }
        },
        leftoperand: 0,
        rightoperand: 0,
      };
    case 'CLEAR_INPUT':
      // Implement logic to handle input clearing
      return {
        ...state,
        answer: '0',
        leftoperand: 0,
        rightoperand: 0,
        operator: '',
      };

    //     case 'DELETE_LAST_INPUT':
    //       // Implement logic to handle deleting last input
    //       return {
    //         ...state,
    //         data: state.data.length > 1 ? state.data.slice(0, -1) : '0',
    //       };

    //     case 'CALCULATE_RESULT':
    //       // Implement logic to calculate result using your existing calculate function
    //       const result = calculate(state.data);
    //       return {
    //         ...state,
    //         data: result.toString(),
    //         operatorCount: 0,
    //       };

    default:
      return state;
  }
};

export default calculatorReducer;



const Calculator = (action, value, state, setState) => {
   switch (action) {
      case "operator":
         const lastItemForOperator = state[state.length - 1];
         if (!["+", "-", "*", "/"].includes(lastItemForOperator)) {
            setState(prev => [...prev, value]);
         }
         break;
      case "number":
         setState(prev => [...prev, value]);
         break;
      case "clear":
         setState([]);
         break;
      case "backspace":
         if (state.length > 0) {
            const arr = state;
            const newArr = arr.slice(0, -1);
            setState(newArr);
         }
         break;
      case "equal":
         const result = eval(state.join(''));
         setState([result]);
         break;
   }
}

export default Calculator;
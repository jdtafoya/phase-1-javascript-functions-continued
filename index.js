// code your solution here
function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`;
}

function mondayWork (activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

const wrapp = function wrapAdjective() {

}

function wrapAdjective(highlight) {
    return function (adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    };
  }
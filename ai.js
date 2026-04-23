const AI = {

adjust(state, success){
if(success){
state.difficulty += 0.2;
}else{
state.difficulty -= 0.3;
}

state.difficulty = Math.max(1, Math.min(10, state.difficulty));
},

generateNumbers(diff){
return {
a: Math.floor(Math.random()*diff*5)+1,
b: Math.floor(Math.random()*diff*5)+1
};
}

};
const QUIZ = {

current:{},

generate(state, lesson){

let {a,b} = AI.generateNumbers(state.difficulty);

if(lesson==="add"){
this.current.q = `${a} + ${b}`;
this.current.r = a+b;
}

if(lesson==="pythagore"){
this.current.q = "3² + 4² = ?";
this.current.r = 25;
}

return this.current;
},

check(state, answer){
let success = answer == this.current.r;

if(success) state.xp++;
AI.adjust(state, success);

return {
success,
correct:this.current.r
};
}

};
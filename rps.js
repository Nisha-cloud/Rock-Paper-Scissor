const argv = require('yargs').argv
module.exports = function(){

    if(argv._[0]){
    console.log('You took :', argv._[0])
    let user_choice;

    switch(argv._[0]){
        case 'Rock':
            user_choice = 0;
            break;
        case 'rock':
            user_choice = 0;
            
            break;
        case 'Paper':
            user_choice = 1;
            
            break;
        case 'paper':
            user_choice = 1;
            break;
        case 'Scissor':
            user_choice = 2;
            break;
        case 'scissor':
            user_choice = 2;
            break;
        default:
            console.log('Pick a valid choice')


    }

    //0 = rock
    //1 = paper
    //2 = scissor
    let computer_choice = Math.floor(Math.random() * 3)
    switch(computer_choice){
        case 0:
            console.log('Computer chose: Rock');
            break;
        case 1:
            console.log('Computer chose: Paper');
            break;
        case 2:
            console.log('Computer chose: Scissor');
            break;      
    }
// console.log('user_choice:', user_choice);
// console.log('computer_choice:', computer_choice);

if(user_choice == computer_choice){
console.log('The game is tie');
    }
    else if(user_choice > computer_choice && user_choice == 2 && computer_choice ==0){
    console.log('Computer beats user');

    }
    else if( user_choice == 0 && computer_choice ==2){
        console.log('User beats computer');
    
        }
        else if(user_choice > computer_choice){
            console.log('User beats computer');
        }

        
    else{
        console.log('Computer beats user');

    }
}
    else{
        console.log('Pick a valid choice');
    }
}
(); 
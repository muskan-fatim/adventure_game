#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
while(condition){

let adventure = await inquirer.prompt([{
   name: "start",
   type: "input",
   message: "its time to start game  to play enter start ",
   
}
])
if(adventure.start==="start"){
   let moraco = await inquirer.prompt([{
      name: "cave",
      type: "list",
      message: "chosse  where are the treasure box ",
      choices:["jungle cave","dark cave","blue sea", "mountain"]
}])
   if(moraco.cave=== "jungle cave"){
      console.log( chalk.blue(" wow you find the treasure box"))
      let final = await inquirer.prompt([{
         name: "c",
         message: "guees the pin of treasure box for win this game Hint: its a  two digit  ",
         type: "input"
      }])
      if(final.c== 76){
       console.log(chalk.green(" congrats you open the treasure box its time to select the the right transport to move this tresaure box"))
       let transport =  await inquirer.prompt([{
         name : "trans",
         type : "list",
         message:"select the transport for move on your treasure box",
      
         choices: ["Aeroplan", "ship", "car","jeep","bike"]
       }])
       if(transport.trans==="Aeroplan"){
            console.log(chalk.red("you select a wrong transport Aeroplan is not right transport because there is lot of people whoes report the police"))
       }
         if(transport.trans ==="ship"){
            console.log(chalk.red(" you select a wrong transport Its a jungle there is no water for run a ship"))
         }
         if(transport.trans==="car"){
            console.log(chalk.red("you select a wrong transport car is not good transport  because there is jungle may be possible you tier is puchar"))
         }
         if(transport.trans==="bike"){
            console.log(chalk.red("you select a wrong transport tresasure box is not fix on bike"))
         }
         if(transport.trans==="jeep"){
               console.log(chalk.blueBright("jeep is best for jungle and it easily carry a heavy material"))
               console.log(chalk.yellow(" congratulation you win this game"))
       }
      }

      else{
         console.log(chalk.red("you enter the wrong pin"))
      }
   }
   else{
      console.log(chalk.red("you chosse the wrong place"))
   }
   let again = await inquirer.prompt([{
      name: "gain",
      type: "confirm",
      message: "Try again"
      }])
   condition = again.gain;

}}









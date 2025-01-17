import React, { useState } from "react";


export default function About(){
    

  let icon = <svg style = {{width:"15px", height:"15px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"/></svg>

  return (        

  <>
  <h1 className="text-decoration-underline text-info"> ABOUT</h1>

<div className="text-start">

    <p> 
        {icon} Versions of the Lorem ipsum text have been used in typesetting at least 
      </p>

      <p> 
        {icon} Typesetting at least since the 1960s, when it was popularized by advertisements 
      </p>

      <p> 
        {icon} Text have been used in typesetting at least since the 1960s, when it was popularized 
      </p> 
      <p>
      {icon} Power Rangers is an American franchise centered around a team of superheroes, known as the Power Rangers, who use special powers to fight evil forces. The series was first introduced in 1993 with the television show "Mighty Morphin Power Rangers," which was created by Haim Saban and Shuki Levy. It combined elements of action, adventure, and fantasy, making it a hit with children and young adults alike.
      </p>

      <p>
      {icon} The premise of Power Rangers revolves around a group of teenagers who are selected by a mentor, typically a wise and powerful figure, to become the Rangers. Each Ranger is given a unique color, and they are able to morph into powerful superheroes using advanced technology and martial arts skills. The team often battles villains, ranging from alien invaders to evil sorcerers, who pose threats to Earth.
      </p>

      <p>
      {icon} The original "Mighty Morphin Power Rangers" series introduced iconic characters such as Jason, Kimberly, Zack, Trini, and Billy, who served as the original team. Over the years, the franchise expanded into numerous seasons, each with different teams and storylines. Despite these changes, the core idea of teamwork, bravery, and fighting evil remained constant.
      </p>

      <p>
      {icon} One of the most recognizable aspects of Power Rangers is their powerful Zords. These giant robots are piloted by the Rangers and are used to combat even larger, monstrous villains. The Zords can combine to form a Megazord, which is essential in defeating the most powerful enemies. This combination of action-packed battles and teamwork became a hallmark of the series.
      </p>

      <p>
      {icon} Throughout its long-running history, Power Rangers has inspired various movies, video games, comic books, and merchandise. It has garnered a large, dedicated fanbase, and its influence can still be seen in modern pop culture. The franchise has not only entertained but also taught valuable lessons about friendship, responsibility, and the power of working together to overcome challenges.
      </p>

</div>
  
  
  
  </>
    



  )


}
import React from 'react';
//import data_skill from '../../data/index';

function Buttons(props){
  function handleActive(e){
    const el = e.target;
    // console.log(`Tien! Il se passe quelquechose\n valeur de la data-percent: ${el.dataset.percent}`)
    /*
    @Objectif récupérer tous les élément sibling.
    */
    const buttons = document.querySelectorAll(`.${props.defaultClass}`);
    /*
    @Objectif parsed elements siblings pour vérifier si.
    */
    if(!(el.classList.contains(props.classSelected))){
      buttons.forEach(button => {
        let _this = button.classList;
        if(_this.contains(props.classSelected)){
          _this.remove(props.classSelected)
        }
      })
      el.classList.add(props.classSelected)

      //filtrer les options
      if(props.opt === "percent"){
        props.changeSkill(Number(el.dataset.percent))
      }
      else if (props.opt !== "percent") {
        console.log('ok nous somme dedans')
        const nodeCard = document.querySelectorAll('.card');
        nodeCard.forEach($node => {
          if($node.dataset.cat !== el.id && el.id !== "tout"){
            console.log("A "+el.id)
            $node.classList.add('hide');
          }else{
            console.log("B "+el.id)
            $node.classList.remove('hide');
          }
        })
      }
    }
  }


  const buttons = props.dataButton.map((button, key) =>
    <button
      id={ typeof button === 'string' ? button.toLowerCase() : null }
      onClick={handleActive}
      key={key}
      type='button'
      className={
        (key === props.magicnumber && typeof button !== 'string') ? `${props.defaultClass} ${props.classSelected}` : ((typeof button === 'string' && key === 0 ) ? `${props.defaultClass} ${props.classSelected}` : props.defaultClass)
      }
      data-percent={button.percent}>
      { typeof button === 'string' ? button : button.name }
    </button>
  )
  return (
    <div className={props.containerButton}>
      {buttons}
    </div>
  );
}

/**
 *  Generate a random key to highlight a shuffle skill.
 **/

// function randomKey(max){
//   let number= Math.floor(Math.random() * max)
//   return number;
// }
//
// Buttons.defaultProps = {
//   magicnumber: randomKey(data_skill.length)
// }

export default Buttons;

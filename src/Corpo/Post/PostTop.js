import React from "react";

export default function PostTop(props) {
 
  const handleDoubleClick = (event) => {
  
    if (!props.heart && event.detail === 2) {
      props.setHeart(true); 
    } else if (props.heart && event.detail === 2) {
      props.setHeart(false); 
    }
  };

  return (
    <div>
      <div className="topo">
        <div className="usuario">
          <img src={props.nickImg} alt="Imagem do usuário" />
          {props.nick}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img
          src={props.img}
          alt="Imagem do post"
          onDoubleClick={handleDoubleClick} 
        />
        
        <div className="coracao">
          <ion-icon
            name={props.heart ? "heart" : "heart-outline"} 
            style={{ position: "absolute", top: "10px", left: "10px", fontSize: "30px", color: props.heart ? "red" : "black" }}
          />
        </div>
      </div>
    </div>
  );
}



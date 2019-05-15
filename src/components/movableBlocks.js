import React,{ Component } from "react";




class MovableBlock extends Component{
    constructor(props){
        super(props)
    this.state = {
        blocks: [
                 {name: "bassTone", status: "waiting", bgcolor: "yellow"},
                 {name: "synthTone", status: "waiting", bgcolor: "green"},
                 {name: "drumTone", status: "waiting", bgcolor: "red"},
        ]
    }
}


 dragStart(id, e){
    /*  console.log("id", id, e) */
     e.dataTransfer.setData("id", id) 
}
 dragEnd(){
}
 dragOver(e){
     e.preventDefault()
     console.log("dragOVer ")
}
 dragEnter(){
}
 dragLeave(){
}
 dragDrop(status, e){
     e.preventDefault();
     let id = e.dataTransfer.getData("id");
     console.log("id", id)
     let blocks = this.state.blocks
     .filter((b)=> {
         if(b.name == id){
             b.status = status  
         }
         return b;
     })
     this.setState({
          ...this.state,
          blocks
     }
     )
}


componentDidMount(){

 /*        const box = document.querySelectorAll(".box");
        const fill = document.querySelector(".dragable");
    
            fill.addEventListener("dragstart", this.dragStart.bind(this));
            fill.addEventListener("dragend", this.dragEnd.bind(this));
    
        for(const element of box){
            element.addEventListener("dragover", this.dragOver.bind(this));
            element.addEventListener("dragenter", this.dragEnter.bind(this));
            element.addEventListener("dragleave", this.dragLeave.bind(this));
            element.addEventListener("drop", this.dragDrop.bind(this));
        }   */  
    
    }    

render(){

    

    var mBlocks = {
        waiting: [],
        playing: [] 
    }

    this.state.blocks.forEach((b)=> {
        mBlocks[b.status].push(
            <div key={b.name}
            className="dragable"
            onDragStart={this.dragStart.bind(this, b.name)}
            draggable
            style={{backgroundColor: b.bgcolor}}>{b.name}</div>
        )
    })

    console.log("mblocks", mBlocks)

    return(
        <div>
          <div className="box">
           <span className="soundsHeader">SOUNDS</span>
           {mBlocks.waiting}
          </div>
          <div className="box"
          onDragOver={this.dragOver.bind(this)}
          onDrop={this.dragDrop.bind(this, "playing" )}>
          <span className="playingHeader">PLAYING</span>
          {mBlocks.playing}
          </div>
       </div>
       

    )

}
}


export default  MovableBlock
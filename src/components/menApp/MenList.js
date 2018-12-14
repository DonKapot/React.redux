import React from 'react';
import { FaUserEdit,FaUserMinus } from 'react-icons/fa';

const MenList = ({delMan,changeMan,men}) => {

let inputEdit = null;

let unBlockInput = (e) => {
  if(e.target.readOnly && inputEdit===null){
    inputEdit = e.target;
    inputEdit.readOnly=false;
    inputEdit.value=inputEdit.placeholder;
    inputEdit.parentElement.querySelector(".divactive").className="active";
  }
}
let blockInput = (e) => {
  if(inputEdit.value) {
    inputEdit.readOnly=true;
    inputEdit.placeholder=inputEdit.value;
    inputEdit.parentElement.querySelector(".active").className="divactive";
    inputEdit = null;
  }
}
  const allMen =  men.map(m=>{
                  if(m.age>=20)
                    return (
                      <li key={m.id} className="collection-item #e0f7fa cyan lighten-5 z-depth-1 hoverable" style={{margin: "10px 0"}}>
                          <div>
                            <input readOnly={true} placeholder={m.name} type="text" className="name" id={"name"+m.id} onDoubleClick={unBlockInput}/>
                            <input readOnly={true} placeholder={m.age} type="number" className="age" id={"age"+m.id} onDoubleClick={unBlockInput}/>
                            <button onClick={()=>delMan(m.id,inputEdit)} type="button"><FaUserMinus/></button>
                            <button onClick={(e)=>{changeMan(m.id,inputEdit.className,inputEdit.value); blockInput(e)}} className="divactive" type="button"><FaUserEdit/></button>
                          </div>
                      </li>
                    )
                  else return null;
              });
    return (
      <div className="men-list row">
        <h2>Men List:</h2>
        <ul className="col s10 m10 l10 xl10 collection">{allMen}</ul>
      </div>
    );
}
export default MenList;

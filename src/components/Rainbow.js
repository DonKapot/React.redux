import React from 'react'

const Rainbow = (WrapComponent) => {
    const colors = ['red', 'pink', 'green', 'orange', 'blue', 'gray'];
    const randomColor = colors[Math.floor(Math.random()*5)];
    const className = `${randomColor}-text`;
    return(props)=>{
        return(
            <div className={className}>
                <WrapComponent  {...props}/>
            </div>
        );
    }
}
export default Rainbow;
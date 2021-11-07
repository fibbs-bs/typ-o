import './Key.css'

const Key = ({text1,text2, code, x, y}) => {
    console.log(code);
    switch(code){
        case "Backspace":return(
            <svg x={x} y={y} >
            <rect className="KeyBackspace" x="0" y="0" rx="5" id={code}></rect>
            <text className="KeyText" x="15" y="25">{text1}</text>
            </svg>
            )
        case "CapsLock":return(
            <svg x={x} y={y} >
            <rect className="KeyCapsLock" x="0" y="0" rx="5" id={code}></rect>
            <text className="KeyText" x="15" y="25">{text1}</text>
            </svg>
            )
        case "Tab":return(
            <svg x={x} y={y} >
            <rect className="KeyTab" x="0" y="0" rx="5" id={code}></rect>
            <text className="KeyText" x="15" y="25">{text1}</text>
            </svg>
            )
        case "Enter":return(
            <svg x={x} y={y} >
            <rect className="KeyEnter" x="0" y="0" rx="5" id={code}></rect>
            <text className="KeyText" x="15" y="25">{text1}</text>
            </svg>
            )
        case "Space":return(
            <svg x={x} y={y} >
            <rect className="KeySpace" x="0" y="0" rx="5" id={code}></rect>
            <text className="KeyText" x="15" y="25">{text1}</text>
            </svg>
            )
        case "ControlLeft":return(
            <svg x={x} y={y} >
            <rect className="KeyCtrlL" x="0" y="0" rx="5" id={code}></rect>
            <text className="KeyText" x="15" y="25">{text1}</text>
            </svg>
            )
        case "AltLeft":return(
            <svg x={x} y={y} >
            <rect className="KeyAltL" x="0" y="0" rx="5" id={code}></rect>
            <text className="KeyText" x="15" y="25">{text1}</text>
            </svg>
            ) 

        case "AltRight":return(
            <svg x={x} y={y} >
            <rect className="KeyAltR" x="0" y="0" rx="5" id={code}></rect>
            <text className="KeyText" x="15" y="25">{text1}</text>
            </svg>
            )
        case "ControlRight":return(
            <svg x={x} y={y} >
            <rect className="KeyCtrlR" x="0" y="0" rx="5" id={code}></rect>
            <text className="KeyText" x="15" y="25">{text1}</text>
            </svg>
            )
        case "ShiftRight":return(
            <svg x={x} y={y} >
            <rect className="KeyShiftRight" x="0" y="0" rx="5" id={code}></rect>
            <text className="KeyText" x="35" y="25">{text1}</text>
            </svg>
            )
        case "ShiftLeft":return(
            <svg x={x} y={y} >
            <rect className="KeyShiftLeft" x="0" y="0" rx="5" id={code}></rect>
            <text className="KeyText" x="15" y="25">{text1}</text>
            </svg>
            )
        default:
            
            if(!text2){
                return (
                    <svg x={x} y={y} >
                        <rect className="Key" x="0" y="0" rx="5" id={code}></rect>
                        <text className="KeyText" x="15" y="25">{text1}</text>
                    </svg>
                )
            }else{
                return (
                    <svg x={x} y={y} >
                        <rect className="Key" x="0" y="0" rx="5" id={code}></rect>
                        <text className="KeyText" x="15" y="17">{text1}</text>
                        <text className="KeyText" x="15" y="33">{text2}</text>
                    </svg>
                )
            }

    }
    
   
}

export default Key

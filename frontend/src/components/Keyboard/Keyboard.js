import Key from "./Key"

const Keyboard = () => {

    document.onkeydown = (e) => {
        var keynum;
        keynum = e.code;
        const element = document.getElementById(keynum);
        //console.log(keynum);
        if(element){
          element.style.fillOpacity = 0.4;
        }
      }
    document.onkeyup = (e) => {
    var keynum;
    keynum = e.code;
    const element = document.getElementById(keynum);
    if(element){
        element.style.fillOpacity = 1;
    }
    }
    

    return (
        <svg viewBox="-240 -290 1100 500">
            <Key text1="Q" code="KeyQ" x="65" y= "42"  />
            <Key text1="W" code="KeyW" x="110" y= "42"/>
            <Key text1="E" code="KeyE" x="155" y= "42"/>
            <Key text1="R" code="KeyR" x="200" y= "42"  />
            <Key text1="T" code="KeyT" x="245" y= "42"/>
            <Key text1="Y" code="KeyY" x="290" y= "42"/>
            <Key text1="U" code="KeyU" x="335" y= "42"  />
            <Key text1="I" code="KeyI" x="380" y= "42"/>
            <Key text1="O" code="KeyO" x="425" y= "42"/>
            <Key text1="P" code="KeyP" x="470" y= "42"  />
            <Key text1="[" text2="{" code="BracketLeft" x="515" y= "42"/>
            <Key text1="]" text2="}" code="BracketRight" x="560" y= "42"/>
            <Key text1="\" text2="|" code="Backslash" x="605" y= "42"/>
            <Key text1="A" code="KeyA" x="75" y= "87"  />
            <Key text1="S" code="KeyS" x="120" y= "87"/>
            <Key text1="D" code="KeyD" x="165" y= "87"/>
            <Key text1="F" code="KeyF" x="210" y= "87"  />
            <Key text1="G" code="KeyG" x="255" y= "87"/>
            <Key text1="H" code="KeyH" x="300" y= "87"/>
            <Key text1="J" code="KeyJ" x="345" y= "87"  />
            <Key text1="K" code="KeyK" x="390" y= "87"/>
            <Key text1="L" code="KeyL" x="435" y= "87"/>
            <Key text1=";" text2=":" code="Semicolon" x="480" y= "87"  />
            <Key text1="'" text2='"' code="Quote" x="525" y= "87"/>
            <Key text1="ENTER" code="Enter" x="570" y= "87"/>
            <Key text1="Z" code="KeyZ" x="85" y= "132"  />
            <Key text1="X" code="KeyX" x="130" y= "132"/>
            <Key text1="C" code="KeyC" x="175" y= "132"/>
            <Key text1="V" code="KeyV" x="220" y= "132"  />
            <Key text1="B" code="KeyB" x="265" y= "132"/>
            <Key text1="N" code="KeyN" x="310" y= "132"/>
            <Key text1="M" code="KeyM" x="355" y= "132"  />
            <Key text1="," text2='<' code="Comma" x="400" y= "132"/>
            <Key text1="." text2='>' code="Period" x="445" y= "132"/>
            <Key text1="/" text2='?' code="Slash" x="490" y= "132"/>
            <Key text1="SHIFT" code="ShiftRight" x="535" y= "132"/>
        </svg>
    )
}

export default Keyboard

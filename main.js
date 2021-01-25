//const secretmessage = "ATTACKATSEVEN"

//console.log(secretmessage.charCodeAt(2))

//for (let i = 0; i < secretMessage.length; i++) {
   
   // console.log(secretMessage[i], charCode, charCode + 1)

    // res=res + String.fromCharCode()

   // let newCharCode = secretmessage[i].charCodeAt(0)
//}




//Refaktorisera = städa, omorganisera kod UTAN att ändra fonktionalitet
function caesarEncrypt(msg, shift) {
    
    // 1.Översätta varje tecken til ett nummer
    const charCodes = []
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))
    }
    
    
    // 2.Shifta det numret
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + shift
    }
    
    // 3.Översätta tillbaka från charCode till string
    let result = ""
    
const secretMessage = "RETREATTOMORROW"
}

function ceasarDecrypt(cryptedMsg, shift) {
    
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] - shift
    }

}

const decryptedMessage = ceasarDecrypt(cryptedMsg, 5) 
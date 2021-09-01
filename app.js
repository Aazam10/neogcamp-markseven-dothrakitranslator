var btnTranslate=document.querySelector("#btn-Translate");
var inputText=document.querySelector("#input-text");
var outputText=document.querySelector("#output-text");

// serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
serverUrl="https://api.funtranslations.com/translate/dothraki.json";

function generateUrl(text){
    return serverUrl + "?"+ "text=" + text;
}
function errorHandler(error){
    alert("Something went wrong with server please try again later");
}

btnTranslate.addEventListener("click",()=>{
    var url=generateUrl(inputText.value);
    fetch(url).then(response=>response.json())
    .then(json=>{
       outputText.innerText=json.contents.translated;
    }).catch(errorHandler);

    
})
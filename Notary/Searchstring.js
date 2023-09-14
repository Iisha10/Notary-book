//Load a book
function loadBook(filename, displayName){
    let currentBook="";
    let url= "books/" +filename;

    //reset our UI
    document.getElementById("filename").innerHTML=displayName;
    document.getElementById("searchstat").innerHTML="";
    document.getElementById("keyword").value="";

    //create a server a request to load our book
    var xhr= new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

// if readystate==0 it means unsend
// if readystate==1 it means doc is open
// if readystate==2 it means server got the info about the request
// if readystate==3 it means loading the file back
// if readystate==4 it means done
//readystate tells us about what is going with this particular request

    xhr.onreadystatechange= function() {
        if(xhr.readyState==4 && xhr.status==200)
        {
            currentBook=xhr.responseText;//this line stores the response text of XHR REQUEST IN the currentbook variable
            document.getElementById("fileContent").innerHTML= currentBook;

            var elmnt= document.getElementById("fileContent");
            elmnt.scrollTop=0;
            
        }
    };
}
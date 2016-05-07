// this is the code which will be injected into a given page...

(function() {
    
    var id, ans, orderlist, letter, letterinputs;
    var index, listindex;
    var match = document.getElementById('matching');
    var choice = document.getElementById('mult_choice');
    var trueorfalse = document.getElementById('tf');
    var inputs = document.getElementsByTagName('input');

    console.log("injected");

//  MATCHING
if(match.checked == true)
{

    orderlist = document.getElementById("matching1");
    letter = orderlist.getElementsByTagName('li');
    letterinputs = orderlist.getElementsByTagName('input');
    
    console.log("matching");
    
    for (listindex = 0; listindex < letter.length; ++listindex) {

        ans = letter[listindex].getAttribute('id');
        id = ans.charAt(8);
        //console.log(id);

        letterinputs[listindex].value = id;
        
        /* --WIP--
        if (ans.length == 9)
        {
            id = ans.charAt(9);
            letterinputs[list].value += id;
        }*/
        
    }

}

//  MULTIBLE CHOICE/TRUE FALSE
if(choice.checked == true || trueorfalse.checked == true)
{
    console.log("choice or tf");

    for (index = 0; index < inputs.length; ++index){
            // deal with inputs[index] element

            if(inputs[index].type == "radio" && inputs[index].value == "1")
            {
                inputs[index].checked = true;
            }
        }
    } 

})();
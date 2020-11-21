var tempvariable1;
var tempvariable2;
var operator;
var equal=0;

/*--------------------Function to view value in the display panel--------------------------*/
function concatenateNumber(value)
{      
/*-----Second variable will only be intialize when operator is been defined by the user-----*/ 
 if(operator!= undefined && operator!= "")
        {  
                    document.getElementById("panel").value += value; 
                    tempvariable2=document.getElementById("panel").value;
        }
        else
/*-----First variable will be initalize when operator is not defined by the user or user enering value for first time in panel---*/
            { 
                document.getElementById("panel").value += value; 
                tempvariable1=document.getElementById("panel").value;
            }
}


function operation(value)
{   document.getElementById("panel").value="";
/*----function will only work when 2nd variable is assigned--------*/
if(operator!="" && operator!= undefined)
{ switch(operator)
    {   case '+':tempvariable1=parseInt(tempvariable1)+parseInt(tempvariable2);
        break;

        case '-':tempvariable1=parseInt(tempvariable1)-parseInt(tempvariable2);
        break;

        case '/':tempvariable1=parseInt(tempvariable1)/parseInt(tempvariable2);
        break;

        case '*':tempvariable1=parseInt(tempvariable1)*parseInt(tempvariable2);
        break;
    }
    tempvariable2="";
    operator=value;
}  /*------this Condition stores the operator what user want to +,-,/,*-----*/
else {
    operator=value;
}
}

function displayResult()
{   /*-------This Condition will only work when user has clicked the equal sign-----*/
switch(operator)
{
    case '+': tempvariable1=parseInt(tempvariable1)+parseInt(tempvariable2);
    break;

    case '-': tempvariable1=parseInt(tempvariable1)-parseInt(tempvariable2);
    break;

    case '/':tempvariable1=parseInt(tempvariable1)/parseInt(tempvariable2);
    break;

    case '*':tempvariable1=parseInt(tempvariable1)*parseInt(tempvariable2);
    break;
}
document.getElementById("panel").value=tempvariable1;
tempvariable2="";
operator="";
}
function cleanDisplay()
{   /*-----This function will work when user want to clean the panel display-----*/
document.getElementById("panel").value="";
tempvariable1="";
tempvariable2="";
operator="";
}
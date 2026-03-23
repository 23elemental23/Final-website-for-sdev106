


//document.body.classList.toggle("hideA");
//document.getElementById("imgB").toggle("hideB");
//document.getElementById("hideD").toggle("hideD");

//document.getElementById("imgD").classList.remove("hideD")

var curint = 0;
var maxslides = 5;
function last()
{
    console.log("last button pressed");
    curint -= 1;
    move()
};
function next()
{
    console.log("next button pressed");
    curint += 1;
    move()
};
var hides = ["hideA", "hideB", "hideC", "hideD", "hideE", "hideF"]; //a list of class names
var ids= ["imgA", "imgB", "imgC", "imgD", "imgE", "imgF"];


function move()
{
    //document.body.classList.toggle("hideC");
    if(curint > maxslides)
    {
        curint = 0;
    };
    if (curint < 0)
    {
        curint = maxslides;
    };
    console.log("button pressed" + String(curint));
    for (hide in hides)
    {
        if (hides[hide] != hides[curint])
        {
            //is there a way to toggle a particular class off
            document.getElementById(ids[hide]).classList.add(hides[hide]);
        }
        else
        {   
            document.getElementById(ids[hide]).classList.remove(hides[hide]);
            //is there a way to toggle a particular class on
        }
    };
    
};

move();
//document.body.classList.toggle("hideC");





//about me page:
function showform()
{
    document.getElementById("forms").classList.toggle("hide");
};
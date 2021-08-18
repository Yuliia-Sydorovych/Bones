function more(img_for_change)
{
    img_for_change.setAttribute("width", "500");
    img_for_change.setAttribute("height", "600");
}

function less(img_for_change)
{
    img_for_change.setAttribute("width", "450");
    img_for_change.setAttribute("height", "550");
}

function more2(img_for_change)
{
    img_for_change.setAttribute("width", "320");
    img_for_change.setAttribute("height", "600");
}

function less2(img_for_change)
{
    img_for_change.setAttribute("width", "280");
    img_for_change.setAttribute("height", "550");
}

let count = 0;
let count_click = 0;
let count_click2 = 0;
let my_element = document.getElementById("score");


function click_girl()
{
    count_click++;

    if(count_click > 3)
    {
        alert("Не махлюй!!!\n\nОновіть сторінку:)");
    }
    else
    {

        var x = parseInt(Math.random() * 6 + 1);
        
        var x1 = document.getElementsByClassName("one");
        var x2 = document.getElementsByClassName("two");
        var x3 = document.getElementsByClassName("three");
        var x4 = document.getElementsByClassName("four");
        var x5 = document.getElementsByClassName("five");
        var x6 = document.getElementsByClassName("six");

        switch(x)
        {
            case 1:
                count += 1;

                x1[0].style.display = 'block';
                x2[0].style.display = 'none';
                x3[0].style.display = 'none';
                x4[0].style.display = 'none';
                x5[0].style.display = 'none';
                x6[0].style.display = 'none';

                break;
            case 2:
                count += 2;
                x1[0].style.display = 'none';
                x2[0].style.display = 'block';
                x3[0].style.display = 'none';
                x4[0].style.display = 'none';
                x5[0].style.display = 'none';
                x6[0].style.display = 'none';

                    
                break;
            case 3:
                
                count += 3;
                x3[0].style.display = 'block';
                x2[0].style.display = 'none';
                x1[0].style.display = 'none';
                x4[0].style.display = 'none';
                x5[0].style.display = 'none';
                x6[0].style.display = 'none';
                    
                break;
            case 4:
                    
                count += 4;
                x4[0].style.display = 'block';
                x2[0].style.display = 'none';
                x3[0].style.display = 'none';
                x1[0].style.display = 'none';
                x5[0].style.display = 'none';
                x6[0].style.display = 'none';
                    
                break;
            case 5:
                
                count += 5;
                x5[0].style.display = 'block';
                x2[0].style.display = 'none';
                x3[0].style.display = 'none';
                x4[0].style.display = 'none';
                x1[0].style.display = 'none';
                x6[0].style.display = 'none';
                    
                break;
            case 6:
                
                count += 6;
                x6[0].style.display = 'block';
                x2[0].style.display = 'none';
                x3[0].style.display = 'none';
                x4[0].style.display = 'none';
                x5[0].style.display = 'none';
                x1[0].style.display = 'none';
                    
                break;

            default:
                break;
        }

        my_element.innerHTML = count;
    }
}

function click_girl2()
{
    count_click2++;

    if(count_click2 > 3)
    {

    }
    else
    {
        var y = parseInt(Math.random() * 6 + 1);
        
        var x1 = document.getElementsByClassName("one");
        var x2 = document.getElementsByClassName("two");
        var x3 = document.getElementsByClassName("three");
        var x4 = document.getElementsByClassName("four");
        var x5 = document.getElementsByClassName("five");
        var x6 = document.getElementsByClassName("six");

        switch(y)
        {
            case 1:
                count += 1;

                x1[1].style.display = 'block';
                x2[1].style.display = 'none';
                x3[1].style.display = 'none';
                x4[1].style.display = 'none';
                x5[1].style.display = 'none';
                x6[1].style.display = 'none';

                break;
            case 2:
                count += 2;
                x1[1].style.display = 'none';
                x2[1].style.display = 'block';
                x3[1].style.display = 'none';
                x4[1].style.display = 'none';
                x5[1].style.display = 'none';
                x6[1].style.display = 'none';

                    
                break;
            case 3:
                
                count += 3;
                x3[1].style.display = 'block';
                x2[1].style.display = 'none';
                x1[1].style.display = 'none';
                x4[1].style.display = 'none';
                x5[1].style.display = 'none';
                x6[1].style.display = 'none';
                    
                break;
            case 4:
                    
                count += 4;
                x4[1].style.display = 'block';
                x2[1].style.display = 'none';
                x3[1].style.display = 'none';
                x1[1].style.display = 'none';
                x5[1].style.display = 'none';
                x6[1].style.display = 'none';
                    
                break;
            case 5:
                
                count += 5;
                x5[1].style.display = 'block';
                x2[1].style.display = 'none';
                x3[1].style.display = 'none';
                x4[1].style.display = 'none';
                x1[1].style.display = 'none';
                x6[1].style.display = 'none';
                    
                break;
            case 6:
                
                count += 6;
                x6[1].style.display = 'block';
                x2[1].style.display = 'none';
                x3[1].style.display = 'none';
                x4[1].style.display = 'none';
                x5[1].style.display = 'none';
                x1[1].style.display = 'none';
                    
                break;

            default:
                break;
        }

        my_element.innerHTML = count;
    }
}


let count2 = 0;
let count_click01 = 0;
let count_click02 = 0;
let my_element2 = document.getElementById("score2");

function click_boy()
{
    count_click01++;

    if(count_click01 > 3)
    {
        alert("Не махлюй!!!\n\nОновіть сторінку:)");
    }
    else
    {

        var j = parseInt(Math.random() * 6 + 1);
        
        var x1 = document.getElementsByClassName("one");
        var x2 = document.getElementsByClassName("two");
        var x3 = document.getElementsByClassName("three");
        var x4 = document.getElementsByClassName("four");
        var x5 = document.getElementsByClassName("five");
        var x6 = document.getElementsByClassName("six");

        switch(j)
        {
            case 1:
                count2 += 1;

                x1[2].style.display = 'block';
                x2[2].style.display = 'none';
                x3[2].style.display = 'none';
                x4[2].style.display = 'none';
                x5[2].style.display = 'none';
                x6[2].style.display = 'none';

                break;
            case 2:
                count2 += 2;

                x1[2].style.display = 'none';
                x2[2].style.display = 'block';
                x3[2].style.display = 'none';
                x4[2].style.display = 'none';
                x5[2].style.display = 'none';
                x6[2].style.display = 'none';

                    
                break;
            case 3:
                
                count2 += 3;

                x3[2].style.display = 'block';
                x2[2].style.display = 'none';
                x1[2].style.display = 'none';
                x4[2].style.display = 'none';
                x5[2].style.display = 'none';
                x6[2].style.display = 'none';
                    
                break;
            case 4:
                    
                count2 += 4;

                x4[2].style.display = 'block';
                x2[2].style.display = 'none';
                x3[2].style.display = 'none';
                x1[2].style.display = 'none';
                x5[2].style.display = 'none';
                x6[2].style.display = 'none';
                    
                break;
            case 5:
                
                count2 += 5;

                x5[2].style.display = 'block';
                x2[2].style.display = 'none';
                x3[2].style.display = 'none';
                x4[2].style.display = 'none';
                x1[2].style.display = 'none';
                x6[2].style.display = 'none';
                    
                break;
            case 6:
                
                count2 += 6;

                x6[2].style.display = 'block';
                x2[2].style.display = 'none';
                x3[2].style.display = 'none';
                x4[2].style.display = 'none';
                x5[2].style.display = 'none';
                x1[2].style.display = 'none';
                    
                break;

            default:
                break;
        }

        my_element2.innerHTML = count2;
    }
}

function click_boy2()
{
    count_click02++;

    if(count_click02 > 3)
    {
        
    }
    else
    {
        var z = parseInt(Math.random() * 6 + 1);
        
        var x1 = document.getElementsByClassName("one");
        var x2 = document.getElementsByClassName("two");
        var x3 = document.getElementsByClassName("three");
        var x4 = document.getElementsByClassName("four");
        var x5 = document.getElementsByClassName("five");
        var x6 = document.getElementsByClassName("six");

        switch(z)
        {
            case 1:

                count2 += 1;

                x1[3].style.display = 'block';
                x2[3].style.display = 'none';
                x3[3].style.display = 'none';
                x4[3].style.display = 'none';
                x5[3].style.display = 'none';
                x6[3].style.display = 'none';

                break;
            case 2:
                count2 += 2;

                x1[3].style.display = 'none';
                x2[3].style.display = 'block';
                x3[3].style.display = 'none';
                x4[3].style.display = 'none';
                x5[3].style.display = 'none';
                x6[3].style.display = 'none';

                    
                break;
            case 3:
                
                count2 += 3;

                x3[3].style.display = 'block';
                x2[3].style.display = 'none';
                x1[3].style.display = 'none';
                x4[3].style.display = 'none';
                x5[3].style.display = 'none';
                x6[3].style.display = 'none';
                    
                break;
            case 4:
                    
                count2 += 4;

                x4[3].style.display = 'block';
                x2[3].style.display = 'none';
                x3[3].style.display = 'none';
                x1[3].style.display = 'none';
                x5[3].style.display = 'none';
                x6[3].style.display = 'none';
                    
                break;
            case 5:
                
                count2 += 5;

                x5[3].style.display = 'block';
                x2[3].style.display = 'none';
                x3[3].style.display = 'none';
                x4[3].style.display = 'none';
                x1[3].style.display = 'none';
                x6[3].style.display = 'none';
                    
                break;
            case 6:
                
                count2 += 6;

                x6[3].style.display = 'block';
                x2[3].style.display = 'none';
                x3[3].style.display = 'none';
                x4[3].style.display = 'none';
                x5[3].style.display = 'none';
                x1[3].style.display = 'none';
                    
                break;

            default:
                break;
        }

        my_element2.innerHTML = count2;
    }
}

var tre = document.getElementById("treasure_img");

function count_winner()
{
    if(count_click == 3 && count_click01 == 3)
    {
        if(count > count2)
        {
            tre.style.left = "-200px";
            
        }
        else
            if(count < count2)
            {
                tre.style.left = "200px";
                
            }
            else
                alert("Нічия:)");

    }
}
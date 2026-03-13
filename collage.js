//table border 1

let image =[
    [ "monkey1","monkey2","monkey3"],
    [ "monkey4","monkey5","monkey6"],
    [ "monkey7","monkey8","monkey9"],  
]

let collage = document.getElementById('collage');
let html = "<table border=1>";
//one loop to go through the rows, and another loop to go through the items inside each row
for (let i = 0; i < image.length; i++)
    
 {//nested loop

//table row

    html+="<tr>";
  for (let j = 0; j < image[i].length; j++) {
    html+=`<td> <img src="${image[i][j]}.png"></td>`;
   
  }
  html+="<tr>";
}
html+="</table>";

collage.innerHTML = html;

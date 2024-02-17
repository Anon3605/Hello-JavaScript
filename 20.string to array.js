var strings="Harper Rios Israel Vang Madisyn Phelps Hamza Villegas Jessie Bridges Mohammed Nichols Aliyah Bond Roger Hobbs Lacey Blanchard Adler Hardin Vada Wise Frederick Reeves Lana Mahoney Kamryn Hines Poppy Barnett Stephen Hoover Virginia Olson Malachi Hunt Genevieve Cobb Raphael Whitehead Sylvie Everett Camilo McCoy Mckenzie Rodriguez Henry Hood Briana Roy Marcelo McKinney Gwendolyn Riley Amari Marsh Adelina Sullivan Evan Gates Melina Bush Tyson Holmes Bailey Miranda Rory Burns Emerson Stone Finn Orozco Renata Kim Roman Perkins Sage Sherman Adan Valencia Maddison Horne Zev Mendoza Cora Fuentes Bowen Cabrera Daleyza Goodwin Kaison Riley Kayla Gates Ermias Peralta Malayah Mitchell Jaxon Jefferson Julieta Perez Owen Matthews Lila Butler Ryder Friedman Aspyn Robertson Emiliano Frederick Sariyah Cline Cullen Carter Lucy Terry Armani Solomon Mylah Marsh Bo Kaur Holland Chang Ari Pacheco Paris Jones William Weiss Lennox Nicholson Rodrigo Freeman Norah Ballard Kenzo O’Connell Jillian Wallace Chase Watkins Lola Snow Houston O’Neal Treasure Estes Hakeem Galindo Corinne Harrell Nelson Allen Riley Waters Maximilian Humphrey Journi McDonald Calvin Yang Angelina Cameron Rayan Novak Kaiya Fields Clayton May Adriana Buchanan Enrique Zuniga Leslie Dorsey Enoch Hopkins Gabriela Paul Noel Hampton Leona Tyler Emmitt Kirk Ellis Davenport Dariel Taylor Sofia Ware Tadeo Morales Skylar Lawson Lane Carr"

console.log("To make a list from all this random names we can use this command which is split as like as this is used in python");
var arrayProcessOne=strings.split(" ");
console.log(arrayProcessOne);


console.log("manual way to split strings in an array, we can use");
var arrayProcessTwo=[];
var words="";
for(var i=0; i<strings.length; i++){
    if(strings[i]!=" "){
        words+=strings[i];
        continue;
    }
    arrayProcessTwo.push(words);
    words="";
}
arrayProcessTwo.push(words); //for the last word

console.log(arrayProcessTwo);
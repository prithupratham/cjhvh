number_of_family_member_in_array{
var update image=["https://th.bing.com/th/id/OIP.8FGe-lcDux3t5RBMxfATsgHaHa?w=206&h=206&c=7&o=5&dpr=1.25&pid=1.7","https://th.bing.com/th/id/OIP.mUzK7yLbOW1NBdVp7DWiBwHaHa?w=210&h=203&c=7&o=5&dpr=1.25&pid=1.7","https://th.bing.com/th/id/OIP.ScaGOXitPka4DFmxgzwyiwHaF_?w=261&h=211&c=7&o=5&dpr=1.25&pid=1.7"];
}

var update name=["B.N.Gagan","Jyoti jha","prithu pratham","pihu"];
var i=0
function update(){
    i++
    var number_of_family_member_in_array=5
if(i > number_of_family_member_in_array)
{
    i=0
}
var update image=images[i];
var name=names[i];
document.getElementById("family_member_image").src= update image;
document.getElementById("family_member_image").innerHTML= update name;
}
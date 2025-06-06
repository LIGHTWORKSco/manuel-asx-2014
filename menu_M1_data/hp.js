function menuclick(obj,idname) {
  var no = obj.id - 0;
  var st = document.all(idname).item(no).style.display;
  if(st == "none") {
    document.all(idname).item(no).style.display="block";
  }
  else {
    document.all(idname).item(no).style.display="none";
  }
}

function menuover(obj) {
  obj.style.cursor="pointer";
  obj.style.color="#FF0000";
  obj.style.textDecoration="underline";
}

function menuout(obj) {
  obj.style.cursor="";
  obj.style.color="";
  obj.style.textDecoration="";
}

var numbers = 1;
function add_number_rows() {
 
    numbers++;
    var objTo = document.getElementById('number_rows')
    var divtest = document.createElement("div");
	//divtest.setAttribute("class", "form-group removeclass"+room);
	//var rdiv = 'removeclass'+room;
    divtest.innerHTML = `<div class="form-group row">
    <label class="col-sm-2 nopadding" for="exampleInputInteger` + numbers + `">Number` + numbers + `</label>
    <input type="number" class="form-control col-sm-5 nopadding" id="exampleInputInteger` + numbers + `" placeholder="0" value="0" name="number` + numbers + `">
    </div>`;
    
    objTo.appendChild(divtest);
}
   /*function remove_education_fields(rid) {
	   $('.removeclass'+rid).remove();
   }*/


let showAddItem = () => {
    
    let displayState = document.getElementById("addItemForm");
    if (displayState.style.display === "flex") {
        displayState.style.display = "none";
      } else {
        displayState.style.display = "flex";
      }
    };




let itemCounter = 0;
let jcontent;

let CreateItem = (ItemName) => {

    let item = localStorage.getItem(ItemName); 
    item = item.replace(/"/g , "" ).split(",");
    
    for (var i = 0; i < item.length; i++) {
        var data = item[i].split(':');
        item[i] = data.pop();   
    }
    let itemDiv = document.createElement("DIV");
    itemDiv.className= "search_item";
    itemDiv.id = "searchItem" + itemCounter;
    document.getElementById("searchResults").appendChild(itemDiv);

    let itemTitle = document.createElement("H5");
    itemTitle.innerHTML = item[0];
    itemTitle.className= "item_title";
    document.getElementById("searchItem" + itemCounter).appendChild(itemTitle);

    let itemImg = document.createElement("IMG");
    itemImg.src = "SampleItem.jpg";
    itemImg.className= "item_picture";
    document.getElementById("searchItem" + itemCounter).appendChild(itemImg);

    let itemDetailsDiv = document.createElement("DIV");
    itemDetailsDiv.id = "itemDetails" + itemCounter;
    itemDetailsDiv.className = "item_details"
    document.getElementById("searchItem" + itemCounter).appendChild(itemDetailsDiv);

    let quantity = document.createElement("H6");
    quantity.innerHTML = "Quantity: " + item[1];
    document.getElementById("itemDetails" + itemCounter).appendChild(quantity);

    let working = document.createElement("H6");
    working.innerHTML = "Working: TBA";
    document.getElementById("itemDetails" + itemCounter).appendChild(working);

    let category = document.createElement("H6");
    category.innerHTML = "Category: " + item[2];
    document.getElementById("itemDetails" + itemCounter).appendChild(category);

    let itemLocation = document.createElement("H6");
    itemLocation.innerHTML = "Location: " + item[3];
    document.getElementById("itemDetails" + itemCounter).appendChild(itemLocation);

    let comments = document.createElement("H6");
    comments.innerHTML = "Comments: " + item[4];
    document.getElementById("itemDetails" + itemCounter).appendChild(comments);

    let submitted = document.createElement("H6");
    submitted.innerHTML = "Submitted: TBA";
    document.getElementById("itemDetails" + itemCounter).appendChild(submitted);

    let checked = document.createElement("H6");
    checked.innerHTML = "Last Checked: TBA";
    document.getElementById("itemDetails" + itemCounter).appendChild(checked);

    let editItem = document.createElement("BUTTON");
    editItem.id = "editBtn" + itemCounter;
    editItem.className = "result_buttons"
    document.getElementById("itemDetails" + itemCounter).appendChild(editItem);

    let editIcon = document.createElement("I");
    editIcon.classList = "fas fa-edit";
    document.getElementById("editBtn" + itemCounter).appendChild(editIcon);

    let deleteItem = document.createElement("BUTTON");
    deleteItem.id = "deleteBtn" + itemCounter;
    deleteItem.className = "result_buttons";
    document.getElementById("itemDetails" + itemCounter).appendChild(deleteItem);

    let deleteIcon = document.createElement("I");
    deleteIcon.classList = "fas fa-trash"
    document.getElementById("deleteBtn" + itemCounter).appendChild(deleteIcon);

    /*let isWorking = () => {
    if (this.working == true) {
        return '<i class="far fa-check-circle"></i>'
    } else if (this.working == false) {
        return '<i class="far fa-times-circle"></i>'
    } else {
        return 
    }
}
*/

    itemCounter++
    
}

let populateItems = () => {
    for (let i = 0; i < localStorage.length; i++) {
        CreateItem(localStorage.key(i));
    } 
}
populateItems();

(function() {
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select, textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}
		return JSON.stringify( obj );
	}
	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "test" );
		var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
			//Above variable "json" holds key value pairs in JSON format
			let itemName = document.getElementById("name").value;

			//add in checks for items with the same name

			localStorage.setItem(itemName,json);
			output.innerHTML = json;
		}, false);
	});
})();

//Image submit validation
//taken from https://codepen.io/dcode-software/pen/RerBgR*/

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
    realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
            /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        customTxt.innerHTML = "No file chosen, yet.";
    }
});



//Delete Item Button

let DeleteItem = () => {

};
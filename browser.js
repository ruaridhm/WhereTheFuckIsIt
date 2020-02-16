let itemCounter = 0;
let jcontent;

let CreateItem = () => {

 
    let ajaxhttp = new XMLHttpRequest();
    let url = "db.json";
    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type", "application/json");
    ajaxhttp.onreadystatechange = function () {
        if (ajaxhttp.readyState ==4 && ajaxhttp.status == 200) {
            var jcontent = JSON.parse(ajaxhttp.responseText);
            //console.log(jcontent.Items[0].title);
            console.log(jcontent);
        }   
       
    }
    ajaxhttp.send(null);
    
  
    let itemDiv = document.createElement("DIV");
    itemDiv.className= "search_item";
    itemDiv.id = "searchItem" + itemCounter;
    document.getElementById("searchResults").appendChild(itemDiv);

    let itemTitle = document.createElement("H5");
    itemTitle.innerHTML = "sailing Jacket";
    itemTitle.className= "item_title";
    document.getElementById("searchItem" + itemCounter).appendChild(itemTitle);

    let itemImg = document.createElement("IMG");
    itemImg.src = "SampleItem.jpg";
    itemImg.className= "item_picture";
    document.getElementById("searchItem" + itemCounter).appendChild(itemImg);

    let itemDetailsDiv = document.createElement("DIV");
    itemDetailsDiv.className= "item_details";
    itemDetailsDiv.id = "itemDetails" + itemCounter;
    document.getElementById("searchItem" + itemCounter).appendChild(itemDetailsDiv);

    let working = document.createElement("H6");
    working.innerHTML = "Working: ";
    document.getElementById("itemDetails" + itemCounter).appendChild(working);

    let category = document.createElement("H6");
    category.innerHTML = "Category: Sailing";
    document.getElementById("itemDetails" + itemCounter).appendChild(category);

    let itemLocation = document.createElement("H6");
    itemLocation.innerHTML = "Location: Wardrobe";
    document.getElementById("itemDetails" + itemCounter).appendChild(itemLocation);

    let comments = document.createElement("H6");
    comments.innerHTML = "Comments: New and Unused";
    document.getElementById("itemDetails" + itemCounter).appendChild(comments);

    let submitted = document.createElement("H6");
    submitted.innerHTML = "Submitted: 1/1/2020";
    document.getElementById("itemDetails" + itemCounter).appendChild(submitted);

    let checked = document.createElement("H6");
    checked.innerHTML = "Last Checked: 20/1/2020";
    document.getElementById("itemDetails" + itemCounter).appendChild(checked);

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

CreateItem();




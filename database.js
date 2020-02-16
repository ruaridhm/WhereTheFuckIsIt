/*

const item = {
    title: '',
    picture: '',
    working: '',
    category: '',
    location: '',
    comments: '',
    submitted: '',
    searched: ''  
};

const sailing_jacket = Object.create(item);

sailing_jacket.title = 'Sailing Jacket';
sailing_jacket.picture = 'sampleItem.jpg';
sailing_jacket.working = true;
sailing_jacket.category = 'Sailing';
sailing_jacket.location = 'Garden Shed';
sailing_jacket.comments = 'New and Unused';
sailing_jacket.submitted = 'date';
sailing_jacket.searched = sailing_jacket.submitted;

*/

//Constructor

function Item (title, picture, working, category, location, comments, submitted, searched) {
    this.title = title;
    this.picture = picture;
    this.working = working;
    this.category = category;
    this.location = location;
    this.comments = comments;
    this.submitted = submitted;
    this.searched = searched;

}

const item = new Item('Sailing Jacket','sampleItem.jpg',true,'Sailing', 'Garden Shed','New and Unused', '1/1/2020', '20/2/2020');


let item_serialized = JSON.stringify(item);

localStorage.setItem("Item", item_serialized);


let item_deserialized = JSON.parse(localStorage.getItem("Item"));
console.log(item_deserialized);
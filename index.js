$("form").on("submit", function (event) {
    event.preventDefault();
    //get form input value
    let doList = $('#shopping-list-entry').val();
    let checked = "check";
    let deleted = "delete";

    if (doList.length > 0) {

        $(".shopping-list").append(
            `<li><span class="shopping-item">${doList}</span><div class="shopping-item-controls">
            <button class="shopping-item-toggle"><span class="button-label"> ${checked} </span>
            </button > <button class="shopping-item-delete"><span class="button-label"> ${deleted} </span></button></div></li >`


        );

    } else {
        return;

    }
});

$("#js-shopping-list-form").on('submit', function (event) {
    //Submits to database
    event.preventDefault();
    return false;
});



//Checks list item
$("ul").on("click", ".shopping-item-toggle", function () {
    //Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.
    $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");
});


//Delete list item

$("ul").on("click", ".shopping-item-delete", function () {

    $(event.target).closest("li").remove();

});

// Select color input
let myColor;
// Select size input
let sizeHeight, sizeWidth;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(e){
  sizeHeight = $('#inputHeight').val();//retrieve number entered for grid column
  sizeWidth = $('#inputWidth').val();//retrieve number entered for grid row

  makeGrid();
  e.preventDefault();//Prevent the default action of submiting the form
})

function makeGrid() {
  //If there is any grid, the code removes the tr elements forming the grid, but not the table
  $('#pixelCanvas').find('tr').remove();

  for(let col = 0; col < sizeHeight; col++){
    //Append the tr as child element to the table element
    $('#pixelCanvas').append('<tr></tr>');

    for(let row = 0; row < sizeWidth; row++){
      //form the grid by appending the td element as last child of tr
      $('tr').last().append('<td></td>');

      //this adds the attribute class to each td element and assigns a the value of colored.
      $('td').attr('class','colored');
    }
  }
  //clicking on any td elemnt will apply the selected color to that td element
  $('td').click(function(){
    myColor = $('#colorPicker').val();//retrieve color chosen

    if ($(this).attr('style')){
      $(this).removeAttr('style');
    } else{
      $(this).css('background-color',myColor);
    }
  })
}

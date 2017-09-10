var list = ["aupera", "snapcat", "busnapper", "airbnb"];

var adjust = function() {
  var width = $(window).width();
  var index;
  for( index=0; index<list.length; index++)
  {
    if( width > 900 )
    {
      $("#thumb-"+list[index]).css("height", $("#box-"+list[index]).height() + 2);
    }
    else
    {
      $("#thumb-"+list[index]).css("width", $("#box-"+list[index]).width() + 2);
    }
  }
};

$(document).ready(adjust());
$(window).resize(adjust());

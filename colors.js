var Body = {
    setcolor:function (color){
      document.querySelector('body').style.color = color;
    },
    setbackgroundColor:function (color){
      document.querySelector('body').style.backgroundColor = color;
    }
  }
  var Links = {
    setcolor:function (color){
      $('a').css('color', color);
    }
  }
  function nightDayHandler(self)
  {
    var doc = document.querySelector('body').style;
    if(self.value === 'day')
    {
      Body.setbackgroundColor('black');
      Body.setcolor('white');
      self.value = 'night';
      Links.setcolor('powderblue');
    }
    else
    {
      Body.setbackgroundColor('white');
      Body.setcolor('black');
      self.value = 'day';
      Links.setcolor('blue');
    }
  }

 $(function() {
  $("#my-calendar").datepicker({

    dateFormat: 'yy-mm-dd',
    minDate: new Date(), // 금일 이후
    onShow: function(inst){
      var info = $(this).val(inst);
      console.log('onShow: ', info);
    },
    onSelect: function(dateText, inst) {
      // dateText:년-월-일, inst: new Date()
      console.log(dateText, ', ', inst);
    }
  });

  var d = new Date().toLocaleDateString();
  $("#my-calendar").val(d);
});
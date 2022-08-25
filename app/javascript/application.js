// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "jquery_ujs"
import "semantic-ui"
import "channels"

let scroll_bottom = function() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}


let submit_message = function(){
  $("#message_body").on('keypress',function(e) {
    if(e.key == "Enter") {
      $('button').trigger("click");
      e.target.value = "";
    }
});
}

$(document).on('turbo:load', function(){
  $('.ui.dropdown').dropdown();

  $('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  });
  scroll_bottom();
  submit_message();
})


// older rails version
// $(document).on('turbolinks:load', function(){
//   $('.ui.dropdown').dropdown();
// })


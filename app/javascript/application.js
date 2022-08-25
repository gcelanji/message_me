// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "jquery_ujs"
import "semantic-ui"

$(document).on('turbo:load', function(){
  $('.ui.dropdown').dropdown();

  $('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  });
})


// older rails version
// $(document).on('turbolinks:load', function(){
//   $('.ui.dropdown').dropdown();
// })
import "channels"

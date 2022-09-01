$(document).ready(function(){
     $('.toggle').click(function(){
          $(".nav_menu, .sidenav-overlay").addClass('show_menu');
          $("body").css("overflow","hidden");
     })
     $('.sidenav-overlay').click(function(){
          $(".nav_menu, .sidenav-overlay").removeClass('show_menu');
          $("body").css("overflow","auto");
     })
     $('.scoring_item').click(function(){
          $(".round_setting, .sidenav-overlay").addClass('show_cart');
          $(".nav_menu, .sidenav-overlay").removeClass('show_menu');
          $("body").css("overflow","hidden");
     })
     $('.sidenav-overlay, .close_card').click(function(){
          $(".round_setting, .sidenav-overlay").removeClass('show_cart');
          $("body").css("overflow","auto");
     })
});


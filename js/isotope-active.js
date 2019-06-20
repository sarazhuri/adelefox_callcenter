jQuery(document).ready(function($){
    $(".all-portfolios").isotope({
        itemSelector: '.single-portfolio',
        layoutMode: 'fitRows',
    });
    
    $('ul.filter li').click(function(){ 
        
      $("ul.filter li").removeClass("active");
      $(this).addClass("active");        

        var selector = $(this).attr('data-filter'); 
        $(".all-portfolios").isotope({ 
            filter: selector, 
            animationOptions: { 
                duration: 750, 
                easing: 'linear', 
                queue: false, 
            } 
        }); 
      return false; 
    }); 
    
});
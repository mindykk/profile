(($)=>{
  const Profile = {
    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
      this.modal();
    },
    header(){
      let upDown = '';
      let newTop = $(window).scrollTop();
      let oldTop = newTop;

      $(window).scroll(function(){
        newTop=$(window).scrollTop();
        upDown=oldTop-newTop>0?'UP':'DOWN';

        if(upDown==='UP'){
          $('#header').removeClass('hide');
          $('#header').addClass('show');
        }
        if(upDown==='DOWN'){
          $('#header').removeClass('show');
          $('#header').addClass('hide');
        }

        if($(window).scrollTop()===0){
          $('#header').removeClass('show');
        }

        oldTop=newTop; //이전 스크롤 top값 위치
      });
    },
    section1(){
      let sec1Top=$('#section1').offset().top-$(window).height();

      $(window).scroll(function(){
        if($(window).scrollTop()===0){
          $('#section1').removeClass('txtAni');
          $('#section1').removeClass('txtAni2');
        }
        if($(window).scrollTop()>sec1Top){
          $('#section1').addClass('txtAni');
          $('#section1').addClass('txtAni2');
        }
      });
    },
    section2(){
      let cnt = 0;
      
      let slideW = $('#section2 .slide-container .slide').width();

      resizeSlide();

      function resizeSlide(){
        slideW = $('#section2 .slide-container .slide').width();
        MainSlide();
      }

      $(window).resize(function(){
        resizeSlide();
      });
    
      function MainSlide(){
        $('#section2 .slide-wrap').stop().animate({left:-slideW*cnt},600,function(){
          cnt<0?cnt=2:cnt;
          cnt>2?cnt=0:cnt;
          $('#section2 .slide-wrap').stop().animate({left:-slideW*cnt},0)
        })
      }

      function NextCount(){
        cnt++;
        MainSlide();
      }

      function PrevCount(){
        cnt--;
        MainSlide();
      }

      $('.prev-btn').on({
        click:function(e){
          e.preventDefault();
          if(!$('#section2 .slide-wrap').is(':animated')){
            PrevCount();
            return;
          }
        }
      });

      $('.next-btn').on({
        click:function(e){
          e.preventDefault();
          if(!$('#section2 .slide-wrap').is(':animated')){
            NextCount();
            return;
          }
        }
      });

      let sec2Top=$('#section2').offset().top-$(window).height();

      $(window).scroll(function(){
        if($(window).scrollTop()===0){
          $('#section2').removeClass('sec2Ani');
        }
        if($(window).scrollTop()>sec2Top){
          $('#section2').addClass('sec2Ani');
        }
      });
    },
    section3(){
      let sec3Top=$('#section3').offset().top-$(window).height();

      $(window).scroll(function(){
        if($(window).scrollTop()===0){
          $('#section3').removeClass('sec3Ani');
        }
        if($(window).scrollTop()>sec3Top){
          $('#section3').addClass('sec3Ani');
        }
      });
    },
    section4(){
      let sec4Top=$('#section4').offset().top-$(window).height();

      $(window).scroll(function(){
        if($(window).scrollTop()===0){
          $('#section4').removeClass('sec4Ani');
        }
        if($(window).scrollTop()>sec4Top){
          $('#section4').addClass('sec4Ani');
        }
      });
    },
    modal(){
      $('.pic1-btn').on({
        click:function(e){
          e.preventDefault();
          $('#modal-1').fadeIn(300);
        }
      });

      $('.pic2-btn').on({
        click:function(e){
          e.preventDefault();
          $('#modal-2').fadeIn(300);
        }
      });

      $('.pic3-btn').on({
        click:function(e){
          e.preventDefault();
          $('#modal-3').fadeIn(300);
        }
      });

      $('.pic4-btn').on({
        click:function(e){
          e.preventDefault();
          $('#modal-4').fadeIn(300);
        }
      });

      $('.close-btn').on({
        click:function(e){
          e.preventDefault();
          $('#modal-1').fadeOut(0);
          $('#modal-2').fadeOut(0);
          $('#modal-3').fadeOut(0);
          $('#modal-4').fadeOut(0);
        }
      });
    }
  }
  Profile.init();
})(jQuery);
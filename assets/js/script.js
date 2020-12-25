window.onscroll = function() {
    
    //document.body.scrollTop : safari
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").style.opacity = "0.9";
        document.getElementById("navbar").classList.replace('bg-white', 'bg-dark');
        document.getElementById("navbar").classList.replace('navbar-light', 'navbar-dark');
        document.querySelector('.nav-call div:first-child').style.color = '#ffffff';
        document.querySelector('.navbar-brand img').setAttribute('src','assets/img/logo/logo-white.png');
      } else {
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("navbar").classList.replace('bg-dark', 'bg-white');
        document.getElementById("navbar").classList.replace('navbar-dark', 'navbar-light');
        document.querySelector('.nav-call div:first-child').style.color = '#5A6670';
        document.querySelector('.navbar-brand img').setAttribute('src','assets/img/logo/logo.png');
      }

};


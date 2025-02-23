// iconLangHover
$(document).ready(function () {
    const icons = {
        langEng: {
            normal: "images/SOne_index_iconeng2.jpg", 
            hover: "images/SOne_index_iconeng.jpg"   
        },
        langTh: {
            normal: "images/SOne_index_iconthai.jpg", 
            hover: "images/SOne_index_iconthai.jpg"   
        }
    };
    $(".lang img").hover(
        function () {
            let src = $(this).attr("src");
            if (src.includes("iconeng2")) {
                $(this).attr("src", icons.langEng.hover); 
            } else if (src.includes("iconth2")) {
                $(this).attr("src", icons.langTh.hover);
            }
        },
        function () {
            let src = $(this).attr("src");
            if (src.includes("iconeng")) {
                $(this).attr("src", icons.langEng.normal); 
            } else if (src.includes("iconth")) {
                $(this).attr("src", icons.langTh.normal); 
            }
        }
    );
});

// iconSocialHover
$(document).ready(function () {
    const icons = {
        facebook: {
            normal: "images/SOne_index_btfacebook.png",
            hover: "images/SOne_index_btfacebook1.png" 
        },
        twitter: {
            normal: "images/SOne_index_bttwitter.png",
            hover: "images/SOne_index_bttwitter1.png" 
        },
        youtube: {
            normal: "images/SOne_index_btyoutube.png",
            hover: "images/SOne_index_btyoutube1.png" 
        }
    };
    $(".social img").hover(
        function () {
            let src = $(this).attr("src");
            if (src.includes("facebook")) {
                $(this).attr("src", icons.facebook.hover);
            } else if (src.includes("twitter")) {
                $(this).attr("src", icons.twitter.hover);
            } else if (src.includes("youtube")) {
                $(this).attr("src", icons.youtube.hover);
            }
        },
        function () {
            let src = $(this).attr("src");
            if (src.includes("facebook")) {
                $(this).attr("src", icons.facebook.normal);
            } else if (src.includes("twitter")) {
                $(this).attr("src", icons.twitter.normal);
            } else if (src.includes("youtube")) {
                $(this).attr("src", icons.youtube.normal);
            }
        }
    );
});

// removeActiveTo
$(document).ready(function(){
    $(".navbar-nav .nav-link").on("click", function(){
        $(".navbar-nav .nav-link").removeClass("active");
        $(this).addClass("active");
    });
});

// iconLinkMenuHover
$(document).ready(function(){
    const icons = {
        menu: {
            normal: "images/SOne_index_menu01.png",
            hover: "images/SOne_index_menu02.png",
            active: "images/SOne_index_menu02.png"
        }
    };
    const activeMenu = localStorage.getItem('activeMenu');
    if (activeMenu) {
        $(".nav-link[data-name='" + activeMenu + "']")
            .addClass("active")
            .find("img")
            .attr("src", icons.menu.active);
    }
    $(".nav-link").hover(
        function(){
            if (!$(this).hasClass("active")) {
                $(this).find("img").attr("src", icons.menu.hover);
            }
        },
        function(){
            if (!$(this).hasClass("active")) {
                $(this).find("img").attr("src", icons.menu.normal);
            }
        }
    );
    $(".nav-link").click(function(e){
        e.preventDefault();
        $(".nav-link").removeClass("active").find("img").attr("src", icons.menu.normal);
        $(this).addClass("active").find("img").attr("src", icons.menu.active);
        const menuName = $(this).data("name");
        localStorage.setItem('activeMenu', menuName);
    });
});

// MenuHover-bt 
$(document).ready(function () {
    const icons = {
        tire: {
            normal: "images/SOne_index_bt-tire.jpg",
            hover: "images/SOne_index_bt-tire1.jpg"
        },
        break: {
            normal: "images/SOne_index_bt-break.jpg",
            hover: "images/SOne_index_bt-break1.jpg" 
        },
        battery: {
            normal: "images/SOne_index_bt-battery.jpg",
            hover: "images/SOne_index_bt-battery1.jpg" 
        },
        chokeup: {
            normal: "images/SOne_index_bt-chokeup.jpg",
            hover: "images/SOne_index_bt-chokeup1.jpg" 
        },
        oil: {
            normal: "images/SOne_index_bt-oil.jpg",
            hover: "images/SOne_index_bt-oil1.jpg" 
        },
        guarantee: {
            normal: "images/SOne_index_bt-guarantee.jpg",
            hover: "images/SOne_index_bt-guarantee1.jpg" 
        }
    };

    function changeImageOnHover() {
        let src = $(this).attr("src");
        if (src.includes("tire")) {
            $(this).attr("src", icons.tire.hover);
        } else if (src.includes("break")) {
            $(this).attr("src", icons.break.hover);
        } else if (src.includes("battery")) {
            $(this).attr("src", icons.battery.hover);
        } else if (src.includes("chokeup")) {
            $(this).attr("src", icons.chokeup.hover);
        } else if (src.includes("oil")) {
            $(this).attr("src", icons.oil.hover);
        } else if (src.includes("guarantee")) {
            $(this).attr("src", icons.guarantee.hover);
        }
    }

    function changeImageOnLeave() {
        let src = $(this).attr("src");
        if (src.includes("tire")) {
            $(this).attr("src", icons.tire.normal);
        } else if (src.includes("break")) {
            $(this).attr("src", icons.break.normal);
        } else if (src.includes("battery")) {
            $(this).attr("src", icons.battery.normal);
        } else if (src.includes("chokeup")) {
            $(this).attr("src", icons.chokeup.normal);
        } else if (src.includes("oil")) {
            $(this).attr("src", icons.oil.normal);
        } else if (src.includes("guarantee")) {
            $(this).attr("src", icons.guarantee.normal);
        }
    }

    $(".container.text-center img").hover(changeImageOnHover, changeImageOnLeave);
});

// BulletHover 
$(document).ready(function () {
    const icons = {
        bullet: ["images/SOne_index_bullet2.png", "images/SOne_index_bullet1.png"]
    };

    $(".info-bullet .bullet").not(".active").hover(
        function () {
            $(this).attr("src", icons.bullet[1]); // Hover: bullet1
        },
        function () {
            $(this).attr("src", icons.bullet[0]); // Leave: bullet2
        }
    );
});








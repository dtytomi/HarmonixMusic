/*!
 * Start Bootstrap - Grayscale v1.1.0 (http://startbootstrap.com/template-overviews/grayscale)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

function collapseNavbar() {
    $(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"): $(".navbar-fixed-top").removeClass("top-nav-collapse")
}

function init() {
    var e= {
        zoom:15,
        center:new google.maps.LatLng(6.642907, (3.342938)),
        disableDefaultUI:!0,
        scrollwheel:!1,
        draggable:!1,
        styles:[ {
            featureType:"water",
            elementType:"geometry",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 17
            }
            ]
        }
        ,
        {
            featureType:"landscape",
            elementType:"geometry",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 20
            }
            ]
        }
        ,
        {
            featureType:"road.highway",
            elementType:"geometry.fill",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 17
            }
            ]
        }
        ,
        {
            featureType:"road.highway",
            elementType:"geometry.stroke",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 29
            }
            ,
            {
                weight: .2
            }
            ]
        }
        ,
        {
            featureType:"road.arterial",
            elementType:"geometry",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 18
            }
            ]
        }
        ,
        {
            featureType:"road.local",
            elementType:"geometry",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 16
            }
            ]
        }
        ,
        {
            featureType:"poi",
            elementType:"geometry",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 21
            }
            ]
        }
        ,
        {
            elementType:"labels.text.stroke",
            stylers:[ {
                visibility: "on"
            }
            ,
            {
                color: "#000000"
            }
            ,
            {
                lightness: 16
            }
            ]
        }
        ,
        {
            elementType:"labels.text.fill",
            stylers:[ {
                saturation: 36
            }
            ,
            {
                color: "#000000"
            }
            ,
            {
                lightness: 40
            }
            ]
        }
        ,
        {
            elementType:"labels.icon",
            stylers:[ {
                visibility: "off"
            }
            ]
        }
        ,
        {
            featureType:"transit",
            elementType:"geometry",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 19
            }
            ]
        }
        ,
        {
            featureType:"administrative",
            elementType:"geometry.fill",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 20
            }
            ]
        }
        ,
        {
            featureType:"administrative",
            elementType:"geometry.stroke",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 17
            }
            ,
            {
                weight: 1.2
            }
            ]
        }
        ]
    }
    ,
    t=document.getElementById("map");
    map=new google.maps.Map(t, e);
    var l="img/map-marker.png",
    o=new google.maps.LatLng(6.642907, (3.342938));
    new google.maps.Marker( {
        position: o, map: map, icon: l
    }
    )
}

$(window).scroll(collapseNavbar),
$(document).ready(collapseNavbar),
$(function() {
    $("a.page-scroll").bind("click", function(e) {
        var t=$(this);
        $("html, body").stop().animate( {
            scrollTop: $(t.attr("href")).offset().top
        }
        , 1500, "easeInOutExpo"), e.preventDefault()
    }
    )
}

),
$(".navbar-collapse ul li a").click(function() {
    "dropdown-toggle active"!=$(this).attr("class")&&"dropdown-toggle"!=$(this).attr("class")&&$(".navbar-toggle:visible").click()
}

);
var map=null;
google.maps.event.addDomListener(window, "load", init),
google.maps.event.addDomListener(window, "resize", function() {
    map.setCenter(new google.maps.LatLng(6.642907, (3.342938)))
}

);
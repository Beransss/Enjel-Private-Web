$('.tombol').click(function() {
    // animate content
    $('.halaman').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.halaman').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.halaman').removeClass('fadeIn');
    }, 1100);
});


$('.tombolback').click(function() {
    // animate content
    $('.halaman').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.halaman').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.halaman').removeClass('fadeIn');
    }, 1100);

});


$('.kehome').click(function() {
    setTimeout(function() {
        $('.home').addClass('fadeIn');
    }, 1100);

});


$('.kehalaman2').click(function() {
    setTimeout(function() {
        $('.halaman2').addClass('fadeIn');
    }, 1100);

    setTimeout(JalaninTeks, 7000);
    PuterLagu();
});

var i = 0;
var txt = "kebetulan hari ini jawir ber ulang tahun, ada yang mau aku sampaikan.To be honest sebelumnya aku pernah liat enjel sekali di kantin, waktu itu cuma lihat sekilas. Setelah berminggu minggu kemudian aku kaget kok enjel ada di cemara juga, akhirnya aku nekat kenalan sama enjel deh tuu, walau di ledekin juga bodo amat wkwkkw takutnya gak pernah liat lagi. Setelah mengenal enjel dan waktu berlalu ada suatu pertanyaan yang jawir sendiripun tida tahu apa jawabannya. Setiap ketidak sengajaan kita bertemu, Setiap sapaan kecil yang kita lakukan, Dan setiap materi dan ilmu yang enjel ajarkan, akhirnya jawir menemukan jawabannya, yaitu kamu enjel. Jadi apa Enjel mau berkomitmen dengan Jawir?🙂";
var speed = 245;

function JalaninTeks() {
    if (i < txt.length) {
        document.getElementById("tekss").innerHTML += txt.charAt(i);
        i++;
        setTimeout(JalaninTeks, speed);
    }
};

function PuterLagu() {
    var lagu = document.getElementById("lagu");
    return lagu.paused ? lagu.play() : lagu.pause();
};


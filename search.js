$(function(){
    var smale =['http://upic.me/i/xk/7photo.jpg','https://pbs.twimg.com/media/CVLmTz1VEAA5Ove.jpg:large',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ67CiFoC68avrf5CYuOJdwdIVxKhZmosXZZmSt3OP1n6WakgUh',
    'https://f.ptcdn.info/143/052/000/osbcm39x0rPExrgjPNO-o.jpg','https://daily.rabbitstatic.com/wp-content/uploads/2016/06/17-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%80%E0%B8%97%E0%B9%88%E0%B9%86-%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B9%82%E0%B8%A5%E0%B8%81-%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%82%E0%B8%9E%E0%B8%AA%E0%B8%95%E0%B9%8C%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E-11.jpg',
    'https://pbs.twimg.com/profile_images/1009110031562752002/xARkgItJ.jpg','https://cdn.pixabay.com/photo/2016/04/06/01/32/fuchs-1310826_960_720.jpg'
               ,'https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_960_720.jpg','https://cdn.pixabay.com/photo/2017/01/16/19/54/ireland-1985088_960_720.jpg'
               ,'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg'];
     
    var sfemale =['https://izismile.com/img/img4/20110603/640/these_funny_animals_707_640_02.jpg','https://img.tsood.com/large/tnews_1450015501_2640.jpg',
    'https://sites.google.com/site/satwlokkwntin/_/rsrc/1469169093174/rup-satw-lok-kwn-tin/1389970262-photo-o.jpg?height=267&width=400','http://1.bp.blogspot.com/-OxsJfnrPhQk/VIw4w2UqKNI/AAAAAAAABOQ/0OExdzcClmQ/s1600/%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%812_9.jpg',
'https://cdn.pixabay.com/photo/2018/11/23/16/51/zebra-3834241_960_720.jpg','https://lh3.googleusercontent.com/N6-cwmOEI68lQsohX8ayyjYEk9Y_tVvOHxLz3OwjCF6j1kOhVFk5drG7XgvTv9oAShY',
'https://dok7xy59qfw9h.cloudfront.net/496/999/773/-19996983-201ggk8-j3a0fb525bc3995/original/avatar.jpg','https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg'
                 ,'https://cdn.pixabay.com/photo/2017/02/28/23/00/swan-2107052_960_720.jpg','https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg'];
$('#playAgain').hide();
$('#go').click(function() {
    $('#go').hide();
    $('#playAgain').show();
    var x =$('#keyword').val();
    var s =$('#sex').val();
    var rdm1 = Math.floor(Math.random() *9);
    var rdm2 = Math.floor(Math.random() *9);
    var result = 'สัตว์ที่คุณ '+x+' เคยเป็นคือ';
    if(x<=0){
alert("กรุณากรอกชื่อของคุณ!!")
    }else if(s==0){
        alert("กรุณาระบุเพศของคุณ!!")
    }

    if(s==1){
        photo1 = document.getElementById("pic");
        photo1.setAttribute('src',smale[rdm1]);
        $('#test1').text(result);
    }else if (s==2){
        photo1 = document.getElementById("pic");
        photo1.setAttribute('src',sfemale[rdm2]);
        $('#test1').text(result);
    }
});
});

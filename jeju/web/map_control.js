
      function A(){
        //부모님코스:
        //흑돼지천왕(33.3892576,126.799015) : 음식점(맛집)
        //한라산(33.3616666,126.52916660000005) : 여행지
        //우유부단(33.3476411,126.3260766) : 카페
        //협재해수욕장(33.394058, 126.239814) : 여행지
        //그해제주(33.3972343,126.2406504) : 숙소 
        document.getElementById("T").innerHTML = "가족 코스";
        var polylinePath = [ 
          new naver.maps.LatLng(33.3892576,126.799015),
          new naver.maps.LatLng(33.3616666,126.52916660000005),
          new naver.maps.LatLng(33.3476411,126.3260766),
          new naver.maps.LatLng(33.394058, 126.239814),
          new naver.maps.LatLng(33.3972343,126.2406504)
        ]
        var map = new naver.maps.Map('map',{
        zoom: 5 //맵 크기
        });
        naver.maps.Service.geocode({address: myaddress}, function(status, response) {
          if (status !== naver.maps.Service.Status.OK) {
              return alert(myaddress + '의 검색 결과가 없거나 기타 네트워크 에러');
          }
          var result = response.result;
          var myaddr = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y);
          map.setCenter(myaddr); // 검색된 좌표로 지도 이동
      });
        var polyline = new naver.maps.Polyline({
        path:polylinePath,  //선 위치 변수배열
        strokeColor: '#FF0000', //선 색
        strokeOpacity: 0.8, //선 투명도 0~1
        strokeWeight: 3, //선 두께
        map: map         //오버레이할 지도
      });
      var idx = 0;
      var arr=polylinePath.length;
      while(idx < polylinePath.length){
        arr[idx] = new naver.maps.Marker({
            position: polylinePath[idx],// 마크 표시할 배열중 원소
            map:map
        });
        idx = idx+1;
      }
      map.setCenter(polylinePath[polylinePath.length/2]); 
      }
      
      function B(){
        //데이트 추천코스:
        //앙끄레국수(33.2474435,126.5095051)
        //애월 버터모닝(33.4642648,126.4208451)
        //하멜베이커리(33.4784716,126.4740049)
        //에코랜드(33.4517789,126.6628665)
        //멜록 게스트하우스(33.523979,126.5605173)
        document.getElementById("T").innerHTML = "데이트 코스";

        var polylinePath = [ 
          new naver.maps.LatLng(33.2474435,126.5095051),
          new naver.maps.LatLng(33.4642648,126.4208451),
          new naver.maps.LatLng(33.4784716,126.4740049),
          new naver.maps.LatLng(33.4517789,126.6628665),
          new naver.maps.LatLng(33.523979,126.5605173)
        ]
        var map = new naver.maps.Map('map',{
        zoom: 5 //맵 크기
        });
        naver.maps.Service.geocode({address: myaddress}, function(status, response) {
          if (status !== naver.maps.Service.Status.OK) {
              return alert(myaddress + '의 검색 결과가 없거나 기타 네트워크 에러');
          }
          var result = response.result;
          var myaddr = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y);
          map.setCenter(myaddr); // 검색된 좌표로 지도 이동
      });
        var polyline = new naver.maps.Polyline({
        path:polylinePath,  //선 위치 변수배열
        strokeColor: '#FF0000', //선 색
        strokeOpacity: 0.8, //선 투명도 0~1
        strokeWeight: 3, //선 두께
        map: map         //오버레이할 지도
      });

      var idx = 0;
      var arr=polylinePath.length;
      while(idx < polylinePath.length){
        arr[idx] = new naver.maps.Marker({
            position: polylinePath[idx],// 마크 표시할 배열중 원소
            map:map
        });
        idx = idx+1;
      }
      map.setCenter(polylinePath[polylinePath.length/2]); 
      }
      function C(){
        //Hard코스:
        //우도 (33.5042977,126.95404800000006)
        //로컬크랩 (33.558142,126.732646)
        //성산일출봉 (33.45805600000001,126.9425)
        //섭지코지 (33.4241107,126.9244073)
        //아쿠아플래닛 (33.4327935,126.9257214)
        //봄꽃게스트하우스 (33.2209353,126.2486498)
        document.getElementById("T").innerHTML = "Hard 코스";
        var polylinePath = [ 
          new naver.maps.LatLng(33.5042977,126.95404800000006),
          new naver.maps.LatLng(33.558142,126.732646),
          new naver.maps.LatLng(33.45805600000001,126.9425),
          new naver.maps.LatLng(33.4241107,126.9244073),
          new naver.maps.LatLng(33.4327935,126.9257214),
          new naver.maps.LatLng(33.2209353,126.2486498)
        ]
        var map = new naver.maps.Map('map',{
        zoom: 5 //맵 크기
        });
        naver.maps.Service.geocode({address: myaddress}, function(status, response) {
          if (status !== naver.maps.Service.Status.OK) {
              return alert(myaddress + '의 검색 결과가 없거나 기타 네트워크 에러');
          }
          var result = response.result;
          var myaddr = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y);
          map.setCenter(myaddr); // 검색된 좌표로 지도 이동
      });
        var polyline = new naver.maps.Polyline({
        path:polylinePath,  //선 위치 변수배열
        strokeColor: '#FF0000', //선 색
        strokeOpacity: 0.8, //선 투명도 0~1
        strokeWeight: 3, //선 두께
        map: map         //오버레이할 지도
      });

      var idx = 0;
      var arr=polylinePath.length;
      while(idx < polylinePath.length){
        arr[idx] = new naver.maps.Marker({
            position: polylinePath[idx],// 마크 표시할 배열중 원소
            map:map
        });
        idx = idx+1;
      }
      map.setCenter(polylinePath[polylinePath.length/2]); 
      }
      function D(){
        //친구코스
        //제주명가두루치기 (33.2495763,126.5688365)
        //쇠소깍 (33.2511579,126.6188105)
        //알라스카인 (33.4675773,126.3164507)
        //함덕해수욕장 (33.5434231,126.6697752)
        //어떤날게스트하우스 (33.5535948,126.8051749)
        document.getElementById("T").innerHTML = "친구 코스";
        var polylinePath = [ 
          new naver.maps.LatLng(33.2495763,126.5688365),
          new naver.maps.LatLng(33.2511579,126.6188105),
          new naver.maps.LatLng(33.4675773,126.3164507),
          new naver.maps.LatLng(33.5434231,126.6697752),
          new naver.maps.LatLng(33.5535948,126.8051749)
        ]
        var map = new naver.maps.Map('map',{
        zoom: 5 //맵 크기
        });
        naver.maps.Service.geocode({address: myaddress}, function(status, response) {
          if (status !== naver.maps.Service.Status.OK) {
              return alert(myaddress + '의 검색 결과가 없거나 기타 네트워크 에러');
          }
          var result = response.result;
          var myaddr = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y);
          map.setCenter(myaddr); // 검색된 좌표로 지도 이동
      });
        var polyline = new naver.maps.Polyline({
        path:polylinePath,  //선 위치 변수배열
        strokeColor: '#FF0000', //선 색
        strokeOpacity: 0.8, //선 투명도 0~1
        strokeWeight: 3, //선 두께
        map: map         //오버레이할 지도
      });

      var idx = 0;
      var arr=polylinePath.length;
      while(idx < polylinePath.length){
        arr[idx] = new naver.maps.Marker({
            position: polylinePath[idx],// 마크 표시할 배열중 원소
            map:map
        });
        idx = idx+1;
      }
      map.setCenter(polylinePath[polylinePath.length/2]); 
      }
      
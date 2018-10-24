

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







      function RealContent(str){
        if(str=='한라산'){
          return '[ #제주 ] 한라산 국립공원 내 윗세오름매점, 진달래밭매점 어리목매점 운영 중단 공식 결정 https://t.co/wzxK3LPxxk'+
          '#한라산 #정복 #유채꽃 피는 #봄 미루자 ㅎㅎ #제주 https://t.co/1eoaq5C7rt'+
          '화창한 날씨에 웅장함 드러낸 한라산 백록담..... #세계자연유산 #제주 https://t.co/dpHdROdN1B'+
          '#2018 #2월18일 #주일 #일요일 #휴일 #제주도 #하도리 #정이네뜰 #별이 #쿠리 뭐하니 ㅋㅋ #유동커피 #정이네뜰에유동커피내리다 #해안도로 #한라산 @정이네뜰 https://t.co/3VGEpxDd1H'+
          '#한라산 #제주도 …&lt;№w→직진 D-446★&gt;… https://t.co/knzWqjr6Yr'+
          '헐 멋있어요ㅠㅠㅠㅠㅠ 한라산 꼭대기에서도 바다가 시선보다 높게 보인다니... 제주도 넘 멋있어....'+
          '오늘 한라산은 스마일~입니다.^^'+
          '#제주도 #서귀포 #한라산 #소천지 #반영 #더베이리조트 #파란하늘 #blue #0213 #jeju https://t.co/KYnQUfQYZB'+
          '산방산(山房山) - 한라산 봉우리를 단숨에 뽑아 옮겨 놓았다는 설화속의 산방산! 경치가 빼어나며 신비스러운 분위기가 서린 산 #제주 https://t.co/PYq9D3Uc9K'+
          '제주도 여행 중에 우도 로뎀가든에서 한라산볶음밥!! https://t.co/hBsf2tDFeR'+
          '여미지식물원 : 남국의 정취가 물씬 풍기는 동양 제일의 식물원.전망탑에서는 중문관광단지,천제연폭포가 한눈에 보이고,한라산, 인근 해안선 일대, 맑은날에는 국토 최남단 마라도까지 볼수있다 #제주 https://t.co/rNaBMLbULd'+
          '@Red_Meringue ㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎㅋㅎ자기 딴에는 좋은거 먹인다고 한건데 아직 사회적응 덜 되어서 진짜 한라산 가서 멧돼지 잡아오고 그런거 보고싶어욬ㅎㅋㅎㅋㅎㅋㅎㅋㅎ약간 고양이들이 은혜 갚는다고… https://t.co/71qHZ9zrXM'+
          '산방산(山房山) - 한라산 봉우리를 단숨에 뽑아 옮겨 놓았다는 설화속의 산방산! 경치가 빼어나며 신비스러운 분위기가 서린 산 #제주 https://t.co/ohZKq6iRzm'+
          '마지막때 산으로 도망가라고했는데 어디로 가야할까요? #백두산 ? #한라산 ? 그도 아니면 #히말라야산 ? https://t.co/AyxLK4DUU4'+
          '#용두암 #한라산 #겨울산행 #죽는줄 https://t.co/pzjJN4jap8'+
          '지형 히말라야와 비슷한 장구목·용진각 일대 산악인 베이스캠프 북적.. 모두들 고산 원정 성공하길... #제주 #한라산...고산 원정 꿈은 한라산에서 시작된다 https://t.co/lmZ7w2i3vf'+
          '한라산 영실코스의 설경입니다. 눈꽃이 환상적인 설국속을 걸었네요 #한라산 #영실코스 #눈꽃 #설국 #눈꽃산행 https://t.co/6Wmh8OqFcg'+
          '날이 다르게 모습을 더 드러내는 #한라산'+
          '#일출구경 할때 난 #일몰 #느끼다 #성산일출봉 에서 바라본 #한라산 #장엄하다 ㅋ #제주 https://t.co/dfJ26mZFuQ'+
          '#멋진풍경 #저멀리 #눈덮힌정상 #한라산 #제주도'+
          '#제주도 #한라산 #등산시간조정 https://t.co/xdLUzRwmbr'+
          '비바람이 잠시 멈춘 사이, 한라산을 둘러싼 구름구름. #한라산 #제주하늘 #제비달방 @요요무문 https://t.co/MUMrcvF6Gt'+
          '한라산 철쭉 보러 가자! 화창한 날씨를 보인 6월 첫날 제주 한라산 영실 등반코스 선작지왓 일대... 연분홍 산철쭉 만개 #제주 #한라산 #철쭉 #선작지왓 https://t.co/tKkfe6Hulf'+
          '지난 달 홀로 한라산 백록담 정복!!! 중턱은 비가오고 정상은 맑아요!! 나 한라산… https://t.co/MqYFt7JHWc…'+
          '@sign4948 저는 일단 우도가고 그리고 본섬으로 돌아와서 놀고싶어요 된다면 한라산도 가보고 싶어요!'
          ;
        }else if(str=='흑돼지천왕'){
          return '[제주도 흑돼지 맛집 흑돼지천왕 정말 맛있음!] 제주도 흑돼지 맛집 흑돼지천왕사진보면 바로 반할껄~ 육즙이 줄줄~제주도 흑돼지는 뭔들 다 맛있지만 그중에서도 맛집 고르는 게 쉽지가 않지요 ... https://t.co/dYHykl68kQ'+
          '제주도 여행 브이로그 #2✈️ #우도 #밤도깨비딱새우 #흑돼지 #카시오페아의주접 JEJU ISLAND VLOG | 볼미 BOLMI:오늘 밤엔 봄날 카페가 있는 동네를 야경으로 담아봅니다.'+
          '#제주도 #돈사돈 #흑돼지 #한라산올래 #김치찌개 #먹트윗 #선팔 #맞팔 https://t.co/bvoYeeAhqB'+
          '#제주 #서귀포 #중문 #해심가든 #생갈비 #흑돼지 #18000원 #한라산 #300g #기름기잔뜩 #취향저격 #가성비보통 #성게미역국 #비빔냉면 #된장찌개 @해심가든 https://t.co/7qmKfUTRlg'+
          '#제주김치찜 #제주도 #제주산흑돼지'+
          '제주여행 봉순이네 흑돼지에서 흑돼지모듬한판 (출처 : 〃Lovely .. | https://t.co/TT9ZKqB6JJ 블로그) '+
          '#봉순이네흑돼지, #제주도,… https://t.co/QTsls6Tc2W'+
          '맛난 흑돼지도 먹고 ㅎ'+
          '제주 흑돼지 맛집'+
          '제주도에서 흑돼지가 맛있기로 유명한 애월 맛집!'+
          '#제주 #제주도 #애월 #제주맛집 #제주도맛집 #애월맛집 #제주흑돼지맛집 #제주애월흑돼지 #애월흑돼지맛집 #제주더돈 #애월더돈 #하얀성더돈 #애월해안도로… https://t.co/6vA9n8thAa'+
          '제주도에서 뭘 먹어야 할까 전복밥이랑 흑돼지는 먹을 건데 꼭 먹고 와라 하는 그런 거 있을까 가족끼리 갈만한 곳,,,,'+
          '@biseol_ 흑돼지 그거 무지 맛있는데...ㅠㅠ 대형 갈치 조림도 유명하더군요. 미우새 김건모 제주도 여행, 어서와 한국은 처음이지?에도 언급될 정도니...'+
          '제주 모해 통갈치 화덕구이집! 진짜 레알 존맛! 우리는 저녁에 왔지만 점심때 먹기좋은곳!!!! 갈치도 안비리고 흑돼지 숯불구이도 맛있고 직원분들도 짱짱 밝고 친절!! 다시오고싶다!!!!!!!! https://t.co/zKtUHmYjgW'+
          '헐ㅠㅜ 제주도에서 흑돼지머그러 왔는데 빛이나 나와여ㅠㅜㅠ 짱행복'+
          '와 이시간에 정말정말 먹고싶은거생겼다미친 심지어 여기선 먹을수도 없는것 제주흑돼지...........진짜 제주도 가서 먹었던 제주흑돼지먹고싶다........맬젓 콕찍어서 파재래기랑 먹으면 캬(진정해'+
          '제주도에서 수영하고 삼겹살(아마도 흑돼지 말하는 거게찌?) 바베큐도 하구 텐트치고 1박도 하고싶은 해쨘'+
          '@gold_bar_ 오호 시장가서 해산물이랑 여러가지 구경하고 먹을것도 먹었겠네 제주도는 흑돼지가 유명한데 흑돼지 꼭 먹어봐'+
          '#제주햄 #제주돈육수출센터 #제주흑돼지 #소시지 #소세지 #진짜맛남 #합성첨가물안들어감 #아질산안들어가요 #내아이한테도먹여요… https://t.co/V94SiR33Pk'+
          '음...야마라인은 평창캐스터 사쿠라이 쇼가 안내하는 강원도 여행 머 이런 거..? 가서 레일바이크도 둘이 타곸ㅋㅋㅋ 카제라인은 음... 제주도가자 제주도 가서  서핑도 하고 감귤도 따고 흑돼지도 먹고 그래라'+
          '인생 껍데기 발견 #제주 #흑돼지 #껍데기 @제주포도원흑돼지 - jejupodowon https://t.co/nd14pdHVtL'+
          '제주 흑돼지. 식도락 여행인 것인가. 흡 https://t.co/8V6Yp2HT7F'+
          '@_Hwabin_ 저도.. 흑돼지에.. 한라산..'+
          '@yang62 저두 오늘 고기를 냠냠했지만ㅋ 몽실이님 고기 비주얼을 보니 다시 군침이 도네여ㅋㅋ 흑돼지에 한라산이라니ㅋㅋ 크으ㅋㅋ 부럽습니다ㅋㅋㅋ'+
          '#제주도여행 #제주여행 #제주여행코스 #제주씨푸드 #제주흑돼지 #제주도맛집추천 #제주도카페추천'
          ;
        }else if(str=='우유부단'){
          return "#성이시돌목장 #우유부단 #아이스크림 #말 #말구경 #류쭉쭉 완전 신남 #제주 #제주도 #제주여행"+
          "땅콩 아이스크림"+
          "우유부단 제주카페 쉬폰케이크"+
          "#성이시돌목장 #우유부단 #아이스크림 #말 #말구경 #류쭉쭉 완전 신남 #제주 #제주도 #제주여행 #육아 #육아스타그램 #인스타베이비 #애스타그램 #애아빠 #애아빠그램 #아들 #아들스타그램 #원숭이띠아기 #생후30개월 #생후931일 #세살아기 @성이시돌목장 https://www.instagram.com/p/Bn1K7PShuTU/?utm_source=ig_twitter_share&igshid=11q5kcxvvvozw … "+
          "제주 성이시돌목장 우유부단 [제주] 탑동 '우유부단 크림공작소' 밀크티와 슈크림을 파는 카페! 특이하게 우도땅콩 슈크림과 흑임자 슈크림을 판매하는데,"+
          "쿠키슈는 바삭하고 흑임자 크림은 진하고 고소하다 인기가 많은 편 슈크림 3,200원 제주 제주시 관덕로8길 7-5 덥고 힘들어서 차안에서 먹었당ㅋ"+
          "걍 평범한 우유아스크림 같았는데 먹을수록 고소해 아이스크림 컵4500 제주하면  유채꽃! 우유부단보다는 빠스퇴르 ! [푸드투데이] 푸드투데이 편집국의 '쓰리고' 먹go 마시go 즐기go! - 우유 영양 그대로 제주 '우유부단' 오늘은 다시 일상으로 골아가야 하는 날."+
          " #제주 #제주여행 #여행#힐링 #힐링여행 #일상 #일상스타그램 #일상스타그램#우유부단 #우유 #성이시돌목장 #병우유 #우리…"+
          " https://www.instagram.com/p/Bb-l1gpHFMV/ 제주목장카페 우유부단. 우유아이스크림이랑 우도땅콩밀크티, 맛있었다 정말루..ㅠ 특히 아이스크림 퍼석퍼석하지않고 되게 쫀득했음 밀크티도 좋았지만 아이스크림이 리얼 갑#1yearago "+
          "#Jeju #제주 #우유부단 #성이시돌목장 #20160809 http://ift.tt/2uFk3Hf "+
          "#제주 #제주도 #말 #카모 #볼캡 #모자 #우유부단 #캠프캡 #산책 #치톤피드 #힐링 #여행 #목장 https://www.instagram.com/p/BTLEsc0BVlV/ 제주 카페 우유부단팀이 다녀가면서 옛다! 주고 가신 우유 한 말. "+
          "덕분에 이번 주말 제과와 가게 라떼와 밀크티에는 자연방목 성이시돌 목장 우유로. 고소하고 달다. 제주 이시돌목장 우유부단 카페~ 수제아이스크림 정말 맛있어요^^ #제주우유카페 #우유부단 #성이시돌목장"
          ;
        }else if(str=='그해제주'){
          return '아침 #그해제주 #그海제주 #그해제주카페 #그海제주카페 #협재 @그해제주 https://t.co/AGHW7XoxMF'+
          '아침 #그해제주 #그海제주 #그해제주카페 #그海제주카페 #제주 #협재 #협재바다 #오션뷰 #민박 #독채민박 #1인실 #2인실 #제주숙소 #협재숙소 #조용한숙소 #책 @그해제주 https://t.co/ja1wa1ElE4'+
          '오후4시쯤 #그해제주 #그海제주 #그해제주카페 #그海제주카페 #제주 #제주도 #협재 #협재바다 #협재해변 #오션뷰 #민박 #독채민박 #1인실 #2인실 #제주숙소 #협재숙소 #조용한숙소 #책 @그해제주 https://t.co/2Je4PyDRoV'+
          '#그해제주카페 #그海제주카페 #제주 #제주도 #협재 #협재바다 #협재해변 #오션뷰 #민박 #독채민박 #1인실 #2인실 #제주숙소 #협재숙소 #조용한숙소 #책 @그해제주 https://t.co/NCJDk9oOXo'+
          '그해제주 게스트동 거실에서 아침 바다를 보면 마음이 편해진다. #그해제주 #그海제주 #그해제주카페 #그海제주카페 #제주'+
          '일몰 #그해제주 #그海제주 #그해제주카페 #제주 #제주도 #협재 #협재해변 #협재해수욕장 #오션뷰 #민박 #독채민박 #제주여행 #제주도여행 #제주숙소 #협재숙소 #조용한숙소 #책 @그해제주 https://t.co/OgYKpAoZYJ'+
          '저녁. 태풍이 지나간 협재. #태풍솔릭 #그해제주 #그海제주 #그해제주카페 #그해제주공간 #제주 #제주도 #협재 #협재해변 #협재해수욕장 #오션뷰 #민박 #독채민박 #제주여행 #제주도여행 #제주숙소… https://t.co/Yb6uHHwAqs'+
          '#협재숙소 #조용한숙소 #책 @그해제주 https://t.co/ThaNfKC2SF'+
          '한우국밥과 와인으로 일요일 저녁 맛있게 클리어 #태희키친 #그해제주 #그海제주 #그해제주카페 #그해제주공간 #제주 #제주도 #협재 #협재해변 #협재해수욕장 #오션뷰 #민박 #독채민박 #제주여행 #제주도여행… https://t.co/3V2CkYLzAv'+
          '일몰. 오늘은 정말 온 하늘이 붉게 물들었다. #그해제주 #그海제주 #그해제주카페 #그해제주공간 #제주 #제주도 #협재 #협재해변 #협재해수욕장 #오션뷰 #민박 #독채민박 #제주여행 #제주도여행 #제주숙소… https://t.co/Pw2wkKGhQX'+
          '비가 오는 산 속에서의 아침은 바다와 다른 여유와 즐거움이 있다 #정아당 #그해제주 #그海제주 #그해제주카페 #그해제주공간 #제주 #제주도 #협재 #협재해변 #협재해수욕장 #오션뷰 #민박 #독채민박… https://t.co/bs2zXLzBtl'+
          '그곶 드디어 이전 재오픈. 맛있는 커피와 치아바타 바로 주문 #그곶 #그해제주 #그海제주 #그해제주카페 #그해제주공간 #제주 #제주도 #협재 #협재해변 #협재해수욕장 #오션뷰 #민박 #독채민박 #제주여행… https://t.co/b1Ax7zxR6F'+
          '비양도 산책. 협재해변 그리고 한라산도 보여요. #비양도 #그해제주 #그海제주 #그해제주카페 #그해제주공간 #제주 #제주도'+
          '아침 물 먹으러 온 동네 냥이 #그해제주 #그海제주 #그해제주카페 #그해제주공간 #제주 #제주도 #협재'
          ;
        }else if(str=='협재해수욕장'){
          return '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'
          ;
        }else if(str=='한라산'){
          return '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'
          ;
        }else if(str=='한라산'){
          return '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'
          ;
        }else if(str=='한라산'){
          return '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'
          ;
        }else if(str=='한라산'){
          return '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'
          ;
        }else if(str=='한라산'){
          return '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'+
          '<p></p>'
          ;
        }








      }
      
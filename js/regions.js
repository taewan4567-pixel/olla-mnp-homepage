/* 관광지 안내 지역 목록
   새 지역(예: 서울)은 아래 REGIONS 목록에 { id: 'seoul', name: {...}, places: [...], route: [...] } 묶음을 하나 더 넣으면
   관광지 안내 페이지의 지역 칸과 첫 화면 미리보기에 자동으로 나타납니다.
   언어 키: ko 한국어, en 영어, zh 중국어(간체), th 태국어, vi 베트남어
   tip: 관광지 카드에 붙는 안내 캐릭터 말풍선 (pose: point 또는 care, 그림 경로는 js/main.js 의 SITE.guide) */

window.REGIONS = [
  {
    id: 'daegu',
    name: { ko: '대구', en: 'Daegu', zh: '大邱', th: 'แทกู', vi: 'Daegu' },
    places: [
      {
        name: { ko: '수성못', en: 'Suseongmot Lake', zh: '寿城池', th: 'ทะเลสาบซูซอง (Suseongmot)', vi: 'Hồ Suseong (Suseongmot)' },
        desc: {
          ko: '수성구에 있는 호수 공원입니다. 둘레 약 2km의 물가 산책로를 천천히 걸을 수 있습니다.',
          en: 'A lake park in Suseong-gu with a waterside path about 2 km around, good for a slow walk.',
          zh: '位于寿城区的湖畔公园，环湖步道约2公里，适合慢慢散步。',
          th: 'สวนสาธารณะริมทะเลสาบในเขตซูซอง มีทางเดินเลียบน้ำรอบทะเลสาบยาวประมาณ 2 กม. เหมาะสำหรับเดินเล่นช้า ๆ',
          vi: 'Công viên hồ nước ở quận Suseong, có lối đi dạo ven hồ dài khoảng 2 km, phù hợp để đi bộ chậm rãi.',
        },
        meta: {
          ko: '도시철도 3호선 수성못역',
          en: 'Metro Line 3, Suseongmot Station',
          zh: '地铁3号线 寿城池站',
          th: 'รถไฟฟ้าใต้ดินสาย 3 สถานีซูซองมต (Suseongmot)',
          vi: 'Tàu điện ngầm tuyến 3, ga Suseongmot',
        },
        tip: {
          pose: 'point',
          text: { ko: '여기 가 보세요', en: 'Try a slow walk here', zh: '推荐来这里走走', th: 'ลองมาเดินเล่นที่นี่ดูนะ', vi: 'Hãy thử ghé nơi này nhé' },
        },
      },
      {
        name: { ko: '김광석 다시그리기길', en: 'Kim Gwangseok Street', zh: '金光石街', th: 'ถนนคิมกวางซอก (Kim Gwangseok-gil)', vi: 'Phố Kim Kwang-seok (Kim Gwangseok-gil)' },
        desc: {
          ko: '중구 방천시장 옆 약 350m 골목에 가수 김광석의 삶과 노래를 담은 벽화가 이어집니다. 상시 개방, 무료입니다.',
          en: 'A 350 m alley next to Bangcheon Market in Jung-gu, lined with murals about the life and songs of singer Kim Gwang-seok. Open at all times, free.',
          zh: '位于中区防川市场旁约350米长的小巷，墙上绘满歌手金光石的人生与歌曲壁画。全天开放，免费。',
          th: 'ตรอกยาวประมาณ 350 เมตร ข้างตลาดบังชอนในเขตจุง มีภาพวาดบนกำแพงเล่าเรื่องชีวิตและบทเพลงของนักร้องคิมกวางซอกตลอดทาง เปิดตลอดเวลา ไม่มีค่าเข้าชม',
          vi: 'Con hẻm dài khoảng 350 m cạnh chợ Bangcheon ở quận Jung, với những bức tranh tường về cuộc đời và bài hát của ca sĩ Kim Kwang-seok. Mở cửa mọi lúc, miễn phí.',
        },
        meta: {
          ko: '도시철도 2호선 경대병원역',
          en: 'Metro Line 2, Kyungpook Natl. Univ. Hospital Station',
          zh: '地铁2号线 庆北大医院站',
          th: 'รถไฟฟ้าใต้ดินสาย 2 สถานีโรงพยาบาลมหาวิทยาลัยคย็องบุก (Kyungpook Natl. Univ. Hospital)',
          vi: 'Tàu điện ngầm tuyến 2, ga Bệnh viện Đại học Quốc gia Kyungpook',
        },
      },
      {
        name: { ko: '서문시장', en: 'Seomun Market', zh: '西门市场', th: 'ตลาดซอมุน (Seomun Market)', vi: 'Chợ Seomun (Seomun Market)' },
        desc: {
          ko: '대구를 대표하는 전통시장입니다. 국수와 납작만두 같은 먹거리로 잘 알려져 있습니다.',
          en: "Daegu's best-known traditional market, famous for noodles and flat dumplings (napjak mandu).",
          zh: '大邱代表性的传统市场，以面条和扁饺子等小吃闻名。',
          th: 'ตลาดดั้งเดิมที่มีชื่อที่สุดของแทกู ขึ้นชื่อเรื่องของกินอย่างกุกซู (บะหมี่) และนัปจักมันดู (เกี๊ยวแผ่นแบน)',
          vi: 'Chợ truyền thống tiêu biểu của Daegu, nổi tiếng với các món như mì guksu và bánh xếp dẹt (napjak mandu).',
        },
        meta: {
          ko: '도시철도 3호선 서문시장역',
          en: 'Metro Line 3, Seomun Market Station',
          zh: '地铁3号线 西门市场站',
          th: 'รถไฟฟ้าใต้ดินสาย 3 สถานีตลาดซอมุน (Seomun Market)',
          vi: 'Tàu điện ngầm tuyến 3, ga Chợ Seomun (Seomun Market)',
        },
      },
      {
        name: { ko: '팔공산 갓바위', en: 'Gatbawi, Palgongsan', zh: '八公山冠岩', th: 'พระพุทธรูปหินกัตบาวี ภูเขาพัลกงซัน (Gatbawi, Palgongsan)', vi: 'Tượng Phật đá Gatbawi, núi Palgong (Palgongsan)' },
        desc: {
          ko: '팔공산 관봉에 있는 석조여래좌상입니다. 돌계단 약 1,365개를 올라야 해서 회복 중에는 권하지 않습니다.',
          en: 'A stone seated Buddha on Gwanbong Peak of Palgongsan. The climb is about 1,365 stone steps, so it is not recommended while recovering.',
          zh: '位于八公山冠峰的石造如来坐像。需攀登约1,365级石阶，恢复期间不建议前往。',
          th: 'พระพุทธรูปหินปางนั่งบนยอดกวานบงของภูเขาพัลกงซัน ต้องเดินขึ้นบันไดหินประมาณ 1,365 ขั้น จึงไม่แนะนำในช่วงพักฟื้น',
          vi: 'Tượng Phật đá ngồi trên đỉnh Gwanbong của núi Palgong. Phải leo khoảng 1.365 bậc đá nên không phù hợp khi đang hồi phục.',
        },
        warn: true,
        meta: {
          ko: '산행 전에 꼭 담당 의사와 상의하세요',
          en: 'Ask your doctor before any hiking',
          zh: '登山前请务必咨询主治医生',
          th: 'ปรึกษาแพทย์ผู้รักษาก่อนเดินขึ้นเขาทุกครั้ง',
          vi: 'Hãy hỏi ý kiến bác sĩ điều trị trước khi leo núi',
        },
        tip: {
          pose: 'care',
          text: {
            ko: '무리하지 마시고 담당 의사와 먼저 상의하세요',
            en: 'Take it easy, and check with your doctor first',
            zh: '请量力而行，先咨询主治医生',
            th: 'อย่าฝืนตัวเองนะ ปรึกษาแพทย์ผู้รักษาก่อน',
            vi: 'Đừng cố sức, hãy hỏi bác sĩ điều trị trước nhé',
          },
        },
      },
    ],
    route: [
      {
        title: { ko: '인천국제공항에서 기차로', en: 'From Incheon Airport by train', zh: '从仁川国际机场乘火车', th: 'จากสนามบินอินชอนโดยรถไฟ', vi: 'Từ sân bay Incheon bằng tàu hỏa' },
        text: {
          ko: '공항철도(AREX)를 타고 서울역까지 간 뒤 KTX로 갈아타 동대구역에서 내립니다. 서울역에서 동대구역까지는 빠른 열차로 약 1시간 40분 걸립니다.',
          en: 'Take the Airport Railroad (AREX) to Seoul Station, then the KTX to Dongdaegu Station. The fastest KTX trains take about 1 hour 40 minutes from Seoul to Dongdaegu.',
          zh: '先乘机场铁路（AREX）到首尔站，再换乘KTX到东大邱站。首尔站到东大邱站，最快的列车约需1小时40分钟。',
          th: 'นั่งรถไฟสนามบิน (AREX) ไปสถานีโซล แล้วต่อรถไฟ KTX ไปลงที่สถานีทงแทกู (Dongdaegu) ขบวนที่เร็วที่สุดใช้เวลาจากสถานีโซลถึงสถานีทงแทกูประมาณ 1 ชั่วโมง 40 นาที',
          vi: 'Đi tàu sân bay (AREX) đến ga Seoul, sau đó đổi sang tàu KTX và xuống ở ga Dongdaegu. Chuyến nhanh nhất từ ga Seoul đến ga Dongdaegu mất khoảng 1 giờ 40 phút.',
        },
      },
      {
        title: { ko: '인천국제공항에서 버스로', en: 'From Incheon Airport by bus', zh: '从仁川国际机场乘大巴', th: 'จากสนามบินอินชอนโดยรถบัส', vi: 'Từ sân bay Incheon bằng xe buýt' },
        text: {
          ko: '동대구로 가는 직통 버스가 있어 갈아타지 않고 갈 수 있습니다. 타는 곳은 제1여객터미널 1층 10번, 제2여객터미널 교통센터 지하 1층 3번입니다. 시간표는 <a href="https://www.airport.kr" target="_blank" rel="noopener">인천국제공항 홈페이지</a>에서 확인하세요.',
          en: 'A direct bus runs to Dongdaegu, so you do not need to change. Board at Terminal 1, 1st floor, stop 10, or Terminal 2, Transportation Center B1, stop 3. See the timetable on the <a href="https://www.airport.kr/ap_en/index.do" target="_blank" rel="noopener">Incheon Airport website</a>.',
          zh: '有直达东大邱的大巴，无需换乘。乘车处为第1航站楼1层10号，第2航站楼交通中心地下1层3号。时刻表请查看<a href="https://www.airport.kr/ap_cnt/index.do" target="_blank" rel="noopener">仁川国际机场官网</a>。',
          th: 'มีรถบัสตรงไปทงแทกูโดยไม่ต้องต่อรถ จุดขึ้นรถอยู่ที่อาคารผู้โดยสาร 1 ชั้น 1 ป้ายหมายเลข 10 และอาคารผู้โดยสาร 2 ศูนย์คมนาคม ชั้น B1 ป้ายหมายเลข 3 ดูตารางเวลาได้ที่<a href="https://www.airport.kr/ap_en/index.do" target="_blank" rel="noopener">เว็บไซต์สนามบินอินชอน</a>',
          vi: 'Có xe buýt chạy thẳng đến Dongdaegu, không cần đổi xe. Điểm lên xe ở Nhà ga 1, tầng 1, cửa số 10 và Nhà ga 2, Trung tâm giao thông tầng B1, số 3. Xem lịch chạy trên <a href="https://www.airport.kr/ap_en/index.do" target="_blank" rel="noopener">trang web sân bay Incheon</a>.',
        },
      },
      {
        title: { ko: '대구국제공항에서', en: 'From Daegu International Airport', zh: '从大邱国际机场出发', th: 'จากสนามบินนานาชาติแทกู', vi: 'Từ sân bay quốc tế Daegu' },
        text: {
          ko: '공항까지 도시철도가 들어오지 않아 택시나 시내버스를 이용합니다. 시내버스(급행1, 401 등)를 타면 도시철도 1호선 아양교역으로 갈 수 있습니다.',
          en: 'The metro does not reach the airport, so take a taxi or a city bus. City buses (Express 1, 401 and others) go to Ayanggyo Station on Metro Line 1.',
          zh: '地铁不直通机场，请乘坐出租车或市内公交。市内公交（急行1、401路等）可到达地铁1号线峨洋桥站。',
          th: 'รถไฟฟ้าใต้ดินไม่ไปถึงสนามบิน จึงต้องใช้แท็กซี่หรือรถเมล์ รถเมล์ในเมือง (สายด่วน 1, สาย 401 และสายอื่น) ไปถึงสถานีอายังกโย (Ayanggyo) ของรถไฟฟ้าใต้ดินสาย 1',
          vi: 'Tàu điện ngầm không đến sân bay, vì vậy hãy đi taxi hoặc xe buýt nội thành. Xe buýt nội thành (Tốc hành 1, tuyến 401 và các tuyến khác) đi đến ga Ayanggyo của tàu điện ngầm tuyến 1.',
        },
      },
      {
        title: { ko: '동대구역에서 수성구까지', en: 'From Dongdaegu Station to Suseong-gu', zh: '从东大邱站到寿城区', th: 'จากสถานีทงแทกูไปเขตซูซอง', vi: 'Từ ga Dongdaegu đến quận Suseong' },
        text: {
          ko: '도시철도 1호선을 타고 명덕역에서 3호선으로 갈아탄 뒤 수성시장역에서 내립니다. 짐이 많거나 몸이 불편하면 택시가 편합니다.',
          en: 'Take Metro Line 1, change to Line 3 at Myeongdeok Station and get off at Suseong Market Station. A taxi is easier if you have luggage or feel unwell.',
          zh: '乘地铁1号线，在明德站换乘3号线，在寿城市场站下车。行李较多或身体不适时，乘出租车更方便。',
          th: 'นั่งรถไฟฟ้าใต้ดินสาย 1 เปลี่ยนเป็นสาย 3 ที่สถานีมย็องด็อก (Myeongdeok) แล้วลงที่สถานีตลาดซูซอง (Suseong Market) หากมีกระเป๋ามากหรือไม่สบาย นั่งแท็กซี่จะสะดวกกว่า',
          vi: 'Đi tàu điện ngầm tuyến 1, đổi sang tuyến 3 ở ga Myeongdeok rồi xuống ở ga Chợ Suseong (Suseong Market). Nếu mang nhiều hành lý hoặc thấy không khỏe, đi taxi sẽ tiện hơn.',
        },
      },
      {
        title: { ko: '표 예매', en: 'Train and bus tickets', zh: '购票', th: 'ตั๋วรถไฟและรถบัส', vi: 'Vé tàu và xe buýt' },
        text: {
          ko: '기차표는 <a href="https://www.letskorail.com" target="_blank" rel="noopener">코레일</a>에서 예매할 수 있습니다. 공항버스는 인천국제공항 홈페이지의 버스 검색에서 예매처를 안내합니다.',
          en: 'Train tickets can be booked on <a href="https://www.letskorail.com" target="_blank" rel="noopener">Korail</a>. The Incheon Airport website lists where to buy airport bus tickets.',
          zh: '火车票可在<a href="https://www.letskorail.com" target="_blank" rel="noopener">韩国铁路公社（Korail）</a>预订。机场大巴的购票方式可在仁川国际机场官网的大巴查询页面查看。',
          th: 'จองตั๋วรถไฟได้ที่<a href="https://www.letskorail.com" target="_blank" rel="noopener">Korail</a> ส่วนรถบัสสนามบิน ดูช่องทางซื้อตั๋วได้ที่หน้าค้นหารถบัสในเว็บไซต์สนามบินอินชอน',
          vi: 'Có thể đặt vé tàu trên trang <a href="https://www.letskorail.com" target="_blank" rel="noopener">Korail</a>. Trang web sân bay Incheon có hướng dẫn nơi mua vé xe buýt sân bay.',
        },
      },
    ],
  },
];

/* 지역 안내 문구 ({r} 자리에 지역 이름이 들어갑니다) */
window.REGION_LABELS = {
  ko: {
    places: '{r} 가 볼 만한 곳',
    placesIntro: '도시철도로 갈 수 있는 곳 위주로 골랐습니다. 운영 시간은 방문 전에 확인하세요.',
    caution: '수술이나 시술 뒤의 외출, 산행, 사우나, 음주처럼 몸에 무리가 갈 수 있는 활동은 반드시 담당 의사와 먼저 상의하세요.',
    klook: 'Klook 관광 안내 준비 중',
    route: '{r}까지 오는 길',
    routeTip: '오는 길을 정리해 두었어요',
    routeIntro: '요금과 시간표는 자주 바뀌므로 출발 전에 공식 사이트에서 다시 확인하세요.',
  },
  en: {
    places: 'Places to visit in {r}',
    placesIntro: 'Most of these can be reached by metro. Please check opening hours before you go.',
    caution: 'Please consult your doctor before strenuous activity after surgery or a procedure, including hiking, saunas and drinking alcohol.',
    klook: 'Klook tours: coming soon',
    route: 'Getting to {r}',
    routeTip: 'Here is how to get here',
    routeIntro: 'Fares and timetables change often, so please check the official websites before you travel.',
  },
  zh: {
    places: '{r}值得一去的地方',
    placesIntro: '以下地点大多可以乘地铁前往。出发前请确认开放时间。',
    caution: '手术或治疗后，外出、登山、桑拿、饮酒等可能加重身体负担的活动，请务必事先咨询主治医生。',
    klook: 'Klook 观光信息（准备中）',
    route: '如何前往{r}',
    routeTip: '为您整理了交通方式',
    routeIntro: '票价和时刻表经常变动，出发前请在官方网站再次确认。',
  },
  th: {
    places: 'สถานที่น่าไปใน{r}',
    placesIntro: 'ส่วนใหญ่เดินทางด้วยรถไฟฟ้าใต้ดินได้ โปรดตรวจสอบเวลาเปิดปิดก่อนไป',
    caution: 'หลังผ่าตัดหรือทำหัตถการ กิจกรรมที่ใช้แรงมาก เช่น การเดินขึ้นเขา การเข้าซาวน่า หรือการดื่มแอลกอฮอล์ ควรปรึกษาแพทย์ผู้รักษาก่อนทุกครั้ง',
    klook: 'ข้อมูลทัวร์ Klook (กำลังเตรียม)',
    route: 'การเดินทางไป{r}',
    routeTip: 'สรุปวิธีเดินทางไว้ให้แล้ว',
    routeIntro: 'ค่าโดยสารและตารางเวลาเปลี่ยนแปลงบ่อย โปรดตรวจสอบกับเว็บไซต์ทางการอีกครั้งก่อนออกเดินทาง',
  },
  vi: {
    places: 'Địa điểm nên ghé ở {r}',
    placesIntro: 'Phần lớn các nơi dưới đây có thể đi bằng tàu điện ngầm. Vui lòng kiểm tra giờ mở cửa trước khi đi.',
    caution: 'Sau phẫu thuật hoặc thủ thuật, hãy hỏi ý kiến bác sĩ điều trị trước khi làm các hoạt động gắng sức như leo núi, xông hơi hay uống rượu bia.',
    klook: 'Thông tin tour Klook (đang chuẩn bị)',
    route: 'Cách đến {r}',
    routeTip: 'Chúng tôi đã tóm tắt cách đi cho bạn',
    routeIntro: 'Giá vé và lịch chạy thay đổi thường xuyên, vui lòng kiểm tra lại trên trang web chính thức trước khi đi.',
  },
};

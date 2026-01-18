const map = L.map('map', { preferCanvas: true }).setView([37.4602, 126.4407], 5);
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map);

const travelData = [
    // 2/10
    { d: "02.10", t: "16:35", loc: [37.4602, 126.4407], act: "인천공항 T1 이륙 (이스타 ZE597) 🛫", icon: "fa-plane" },
    { d: "02.10", t: "19:40", loc: [16.0439, 108.2062], act: "다낭 공항 도착 및 그랩 탑승 🚕", icon: "fa-car" },
    { d: "02.10", t: "20:30", loc: [16.0600, 108.2450], act: "멜리아 빈펄 다낭 비치프론트 체크인 🏨", icon: "fa-hotel" },
    { d: "02.10", t: "21:00", loc: [16.0592, 108.2465], act: "저녁식사: 미케비치 Be Ni 2 🍲", icon: "fa-utensils" },
    { d: "02.10", t: "22:00", loc: [16.0665, 108.2325], act: "미케비치 & 선짜 야시장 산책 🌙", icon: "fa-moon" },
    // 2/11
    { d: "02.11", t: "07:30", loc: [15.9961, 107.9868], act: "바나힐 출발 (그랩 이용) 🚕", icon: "fa-car" },
    { d: "02.11", t: "09:00", loc: [15.9955, 107.9880], act: "1차 케이블카 (골든브릿지) 🚠", icon: "fa-cable-car" },
    { d: "02.11", t: "11:00", loc: [15.9965, 107.9890], act: "2차 케이블카 & 프랑스마을 루지 🎢", icon: "fa-ticket" },
    { d: "02.11", t: "13:00", loc: [15.9970, 107.9900], act: "점심식사(아라팡) & 카페 ☕", icon: "fa-utensils" },
    { d: "02.11", t: "15:00", loc: [15.9980, 107.9910], act: "판타지 파크 & 태양의언덕 전망대 🎡", icon: "fa-eye" },
    { d: "02.11", t: "19:00", loc: [16.0600, 108.2450], act: "Banh Xeo Lang 저녁 및 마사지 💆", icon: "fa-spa" },
    // 2/12
    { d: "02.12", t: "10:00", loc: [16.0667, 108.2233], act: "다낭 대성당, 한시장, 박물관 투어 🏛️", icon: "fa-person-walking" },
    { d: "02.12", t: "12:00", loc: [16.0670, 108.2220], act: "점심: I love banh mi 🥖", icon: "fa-utensils" },
    { d: "02.12", t: "13:00", loc: [16.0600, 108.2450], act: "호텔 수영 및 미케비치 물놀이 🏊", icon: "fa-swimming-pool" },
    { d: "02.12", t: "17:00", loc: [16.0550, 108.2350], act: "저녁: Quan an dim sum 🥟", icon: "fa-utensils" },
    { d: "02.12", t: "18:00", loc: [16.0500, 108.2150], act: "콘시장 & 고마트 쇼핑 및 과일 🥭", icon: "fa-cart-shopping" },
    { d: "02.12", t: "21:00", loc: [16.0450, 108.2400], act: "야식: Umi Izakaya 🍢", icon: "fa-beer-mug-empty" },
    // 2/13
    { d: "02.13", t: "09:00", loc: [16.1001, 108.2778], act: "체크아웃 후 영흥사 관광 🏯", icon: "fa-gopuram" },
    { d: "02.13", t: "10:00", loc: [16.0400, 108.2430], act: "안트엉 거리 구경 🏘️", icon: "fa-walking" },
    { d: "02.13", t: "11:00", loc: [16.0420, 108.2450], act: "발 마사지 휴식 👣", icon: "fa-spa" },
    { d: "02.13", t: "12:00", loc: [15.8771, 108.3275], act: "호이안으로 출발 🚗", icon: "fa-car-side" },
    { d: "02.13", t: "14:00", loc: [15.8850, 108.3200], act: "더 사가 호텔 체크인 🏨", icon: "fa-key" },
    { d: "02.13", t: "15:00", loc: [15.8800, 108.3250], act: "자전거 근처 구경 🚲", icon: "fa-bicycle" },
    { d: "02.13", t: "17:00", loc: [15.8770, 108.3320], act: "야시장 & 올드타운 소원배 🛶", icon: "fa-ship" },
    { d: "02.13", t: "19:00", loc: [15.8775, 108.3330], act: "저녁: QQ 레스토랑 🍽️", icon: "fa-utensils" },
    { d: "02.13", t: "20:00", loc: [15.8780, 108.3340], act: "우베베 망고빙수 🍧", icon: "fa-ice-cream" },
    // 2/14
    { d: "02.14", t: "06:00", loc: [15.8760, 108.3280], act: "호이안 새벽시장 구경 🧺", icon: "fa-basket-shopping" },
    { d: "02.14", t: "09:00", loc: [15.8800, 108.3300], act: "호이안 버기카 투어 🛺", icon: "fa-van-shuttle" },
    { d: "02.14", t: "11:00", loc: [15.9125, 108.3565], act: "안방해변 해수욕 및 서핑 🏄", icon: "fa-water" },
    { d: "02.14", t: "18:00", loc: [15.8700, 108.3400], act: "임프레션 테마파크 🎆", icon: "fa-masks-theater" },
    { d: "02.14", t: "20:00", loc: [15.8705, 108.3410], act: "호이안 메모리즈 쇼 관람 🎭", icon: "fa-ticket" },
    // 2/15
    { d: "02.15", t: "14:00", loc: [15.8770, 108.3270], act: "쿠킹클래스 체험 👨‍🍳", icon: "fa-mortar-pestle" },
    { d: "02.15", t: "18:00", loc: [16.0680, 108.2130], act: "다낭 라운지 베트남플라자 휴식 🛋️", icon: "fa-couch" },
    { d: "02.15", t: "22:15", loc: [16.0683, 108.2131], act: "나트랑행 슬리핑 기차 탑승 🚂", icon: "fa-train" },
    // 2/16 ~ 17
    { d: "02.16", t: "08:00", loc: [12.2467, 109.1843], act: "나트랑역 도착 및 조식 🍛", icon: "fa-train-subway" },
    { d: "02.16", t: "10:00", loc: [12.2155, 109.2085], act: "아쿠아마린 리조트 체크인 🏨", icon: "fa-hotel" },
    { d: "02.17", t: "전일", loc: [12.2155, 109.2085], act: "올인클루시브 리조트 휴양 🏊", icon: "fa-umbrella-beach" },
    // 2/18
    { d: "02.18", t: "12:00", loc: [12.2486, 109.1950], act: "나트랑 시내 이동 (체크아웃) 🚗", icon: "fa-car" },
    { d: "02.18", t: "14:00", loc: [12.2490, 109.1960], act: "챔튼 호텔 체크인 🏨", icon: "fa-key" },
    { d: "02.18", t: "16:00", loc: [12.2530, 109.1900], act: "담시장 & 시내 카페 투어 ☕", icon: "fa-store" },
    // 2/19
    { d: "02.19", t: "09:00", loc: [12.1755, 109.2155], act: "3개 섬 호핑 투어 출발 🛥️", icon: "fa-ship" },
    { d: "02.19", t: "19:00", loc: [12.2450, 109.1920], act: "나트랑 목식당 해산물 저녁 🦀", icon: "fa-utensils" },
    // 2/20 ~ 21
    { d: "02.20", t: "12:00", loc: [12.2486, 109.1950], act: "체크아웃 후 포나가르 첨탑 관광 🛕", icon: "fa-gopuram" },
    { d: "02.20", t: "19:00", loc: [12.2400, 109.1900], act: "마지막 마사지 및 저녁식사 💆", icon: "fa-spa" },
    { d: "02.20", t: "22:00", loc: [12.0011, 109.2158], act: "깜란 국제공항 이동 🚕", icon: "fa-car" },
    { d: "02.21", t: "01:00", loc: [37.4602, 126.4407], act: "나트랑 출발 → 인천 도착 🛬", icon: "fa-plane-up" }
];
let marker = L.marker(travelData[0].loc, {
    icon: L.divIcon({ html: `<i class="fa-solid fa-plane" style="font-size:30px; color:#d35400; text-shadow:0 0 8px white;"></i>`, className: 'c-icon', iconSize: [40, 40] })
}).addTo(map);

// 전체 여정을 기록할 Polyline
let travelPath = L.polyline([], { color: '#d35400', weight: 4, opacity: 0.6, dashArray: '5, 10', className: 'travel-path' }).addTo(map);

let lastDisplayedDay = "";

async function runSimulation()
{
    const list = document.getElementById('log-list');
    const btn = document.getElementById('start-btn');
    btn.disabled = true;
    list.innerHTML = "";
    travelPath.setLatLngs([]);
    lastDisplayedDay = "";

    for (let i = 0; i < travelData.length; i++)
    {
        const p = travelData[i];

        // 1. 날짜 구분선 추가
        if (lastDisplayedDay !== p.d)
        {
            const dateHeader = document.createElement('div');
            dateHeader.className = 'date-divider';
            dateHeader.innerText = `📅 ${p.d}`;
            list.prepend(dateHeader);
            lastDisplayedDay = p.d;
        }

        // 2. 리스트 아이템 생성 및 클릭 이벤트 추가
        const li = document.createElement('li');
        li.className = "clickable-item";
        li.innerHTML = `<span class="t-tag">${p.t}</span><span>${p.act}</span>`;

        // 클릭 시 해당 위치로 지도 이동 (이동 중이 아닐 때 자유롭게 클릭 가능)
        li.onclick = () =>
        {
            map.flyTo(p.loc, 15, { duration: 1.5 });
            marker.setLatLng(p.loc);
            marker.setIcon(L.divIcon({
                html: `<i class="fa-solid ${p.icon}" style="font-size:35px; color:#e74c3c; text-shadow:0 0 15px white;"></i>`,
                className: 'c-icon', iconSize: [40, 40]
            }));

            // 클릭한 항목 강조 스타일
            document.querySelectorAll('.clickable-item').forEach(item => item.classList.remove('active-item'));
            li.classList.add('active-item');
        };

        list.prepend(li);

        // 3. 자동 시뮬레이션 이동 로직 (기존과 동일)
        const startLoc = marker.getLatLng();
        const endLoc = L.latLng(p.loc);
        const moveObj = { t: 0 };

        document.getElementById('day-text').innerText = `${p.d} 일정`;
        document.getElementById('act-text').innerText = `${p.t} - ${p.act}`;

        let targetZoom = (p.d === "02.10" && i < 2) || p.d === "02.21" ? 5 : 13;
        map.flyTo(p.loc, targetZoom, { duration: 1.5, ease: "power2.inOut" });

        await new Promise(res =>
        {
            gsap.to(moveObj, {
                t: 1, duration: 1.5, ease: "power2.inOut",
                onUpdate: () =>
                {
                    const lat = startLoc.lat + (endLoc.lat - startLoc.lat) * moveObj.t;
                    const lng = startLoc.lng + (endLoc.lng - startLoc.lng) * moveObj.t;
                    marker.setLatLng([lat, lng]);

                    const currentPathPoints = travelPath.getLatLngs();
                    currentPathPoints.push([lat, lng]);
                    travelPath.setLatLngs(currentPathPoints);
                    currentPathPoints.pop();
                },
                onComplete: () =>
                {
                    travelPath.addLatLng(endLoc);
                    marker.setLatLng(endLoc);
                    marker.setIcon(L.divIcon({
                        html: `<i class="fa-solid ${p.icon}" style="font-size:30px; color:#d35400; text-shadow:0 0 8px white;"></i>`,
                        className: 'c-icon', iconSize: [40, 40]
                    }));
                    setTimeout(res, 800);
                }
            });
        });
    }
    btn.disabled = false;
}

// 모달 및 기타 기능
const openItinerary = () =>
{
    let html = `
        <p style="font-size: 0.8rem; color: #d35400; margin-bottom: 10px;">* 일정을 클릭하면 해당 위치로 이동합니다.</p>
        <table>
            <thead><tr><th>날짜</th><th>시간</th><th>활동</th></tr></thead>
            <tbody>`;
    travelData.forEach((x, index) =>
    {
        html += `<tr onclick="focusLocation(${index})" style="cursor:pointer;" class="modal-row">
                    <td>${x.d}</td><td>${x.t}</td><td>${x.act}</td>
                 </tr>`;
    });
    html += `</tbody></table>`;
    document.getElementById('itinerary-table').innerHTML = html; // itinerary-table에 주입
    document.getElementById('modal-overlay').classList.remove('hidden');
};

window.focusLocation = (index) =>
{
    const p = travelData[index];
    document.getElementById('modal-overlay').classList.add('hidden'); // 모달 닫기

    map.flyTo(p.loc, 15, { duration: 1.5 });
    marker.setLatLng(p.loc);
    marker.setIcon(L.divIcon({
        html: `<i class="fa-solid ${p.icon}" style="font-size:35px; color:#e74c3c; text-shadow:0 0 15px white;"></i>`,
        className: 'c-icon', iconSize: [40, 40]
    }));

    document.getElementById('day-text').innerText = p.d;
    document.getElementById('act-text').innerText = `${p.t} - ${p.act}`;
};

document.getElementById('start-btn').onclick = runSimulation;
document.getElementById('list-btn').onclick = openItinerary;
document.getElementById('close-modal').onclick = () => document.getElementById('modal-overlay').classList.add('hidden');
document.getElementById('pdf-btn').onclick = () =>
{
    openItinerary();
    html2pdf().from(document.getElementById('itinerary-table')).set({ margin: 10, filename: 'Vietnam_2026_Family_Trip.pdf' }).save();
};
document.getElementById('theme-btn').onclick = () =>
{
    document.body.classList.toggle('dark-theme');
    document.querySelector('#theme-btn i').className = document.body.classList.contains('dark-theme') ? 'fas fa-sun' : 'fas fa-moon';
};
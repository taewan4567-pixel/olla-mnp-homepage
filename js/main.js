/* ===== 서비스 이름: 여기 한 곳만 고치면 모든 페이지의 이름이 바뀝니다 ===== */
const SITE = {
  brand: { ko: '올라 가이드', en: 'Olla Guide' },
  /* 안내 캐릭터 그림 자리 (관광지 안내 쪽에만 씀). 파일을 이 경로에 올리면 자동으로 보이고, 없으면 그림 자리는 숨겨집니다. */
  guide: {
    hello: 'assets/guide/char_wave.webp',  // 첫 화면 관광지 안내 버튼 옆 인사
    point: 'assets/guide/char_point.webp', // 관광지 카드 「여기 가 보세요」
    map: 'assets/guide/char_map.webp',     // 「오는 길」 안내
    care: 'assets/guide/char_care.webp',   // 관광지 카드 「무리하지 마시고 담당 의사와 먼저 상의하세요」
  },
};
// 사이트 맨 위 폴더 주소 (js/main.js 위치 기준, /en/ 같은 하위 폴더에서도 맞게)
const SITE_ROOT = (document.currentScript && document.currentScript.src) ? new URL('../', document.currentScript.src).href : '/';

const LANG = (document.documentElement.lang || 'ko').slice(0, 2);
const BRAND = LANG === 'ko' ? SITE.brand.ko : SITE.brand.en;

// 이름 바꾸기 (data-brand="en"은 영어 이름 고정)
document.querySelectorAll('[data-brand]').forEach((el) => {
  el.textContent = el.dataset.brand === 'en' ? SITE.brand.en : BRAND;
});
if (document.title.includes('|')) document.title = document.title.replace(/\|[^|]*$/, '| ' + BRAND);

// 올해 연도 자동 표시
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

// 모바일 메뉴
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const langMenu = document.querySelector('.lang-menu');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    if (open && langMenu) langMenu.open = false;
  });
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}
// 언어 선택: 바깥을 누르면 닫기
if (langMenu) {
  langMenu.addEventListener('toggle', () => {
    if (langMenu.open && nav) { nav.classList.remove('open'); navToggle && navToggle.setAttribute('aria-expanded', 'false'); }
  });
  document.addEventListener('click', (e) => { if (!langMenu.contains(e.target)) langMenu.open = false; });
}

// 관광지 안내: js/regions.js 의 REGIONS 목록으로 지역 탭과 내용을 만듭니다
const pick = (o) => (o && (o[LANG] || o.en || o.ko)) || '';
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ICON_TRAIN = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="3" width="12" height="14" rx="3"/><path d="M6 10h12M9 21l1.5-4M15 21l-1.5-4"/></svg>';
const ICON_ALERT = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>';

function placeCard(p, short) {
  const meta = p.warn
    ? `<p class="place-meta warn">${ICON_ALERT}<span>${esc(pick(p.meta))}</span></p>`
    : `<p class="place-meta">${ICON_TRAIN}<span>${esc(pick(p.meta))}</span></p>`;
  const tip = (!short && p.tip) ? `<div class="guide-say"><img class="guide-img" data-guide="${esc(p.tip.pose || 'point')}" alt="" hidden><p class="bubble">${esc(pick(p.tip.text))}</p></div>` : '';
  return `<article class="card place"><h3>${esc(pick(p.name))}</h3>${short ? '' : `<p>${esc(pick(p.desc))}</p>`}${meta}${tip}</article>`;
}

// 캐릭터 그림: 파일이 있으면 보이고, 없으면 숨긴 채로 둡니다
function loadGuideImages() {
  document.querySelectorAll('img[data-guide]').forEach((img) => {
    const file = SITE.guide[img.dataset.guide];
    if (!file) return;
    img.addEventListener('load', () => { img.hidden = false; img.closest('[data-guide-slot]')?.classList.add('has-img'); }, { once: true });
    img.addEventListener('error', () => { img.hidden = true; }, { once: true });
    img.src = SITE_ROOT + file;
  });
}

function renderRegions() {
  if (!window.REGIONS) return;
  const L = (window.REGION_LABELS && window.REGION_LABELS[LANG]) || {};
  const fill = (tpl, r) => String(tpl || '').replace('{r}', pick(r.name));

  // 홈 미리보기
  document.querySelectorAll('[data-region-preview]').forEach((box) => {
    const tabs = REGIONS.map((r, i) => `<a class="chip${i === 0 ? ' on' : ''}" href="travel.html#${r.id}">${esc(pick(r.name))}</a>`).join('');
    const r0 = REGIONS[0];
    box.innerHTML = `<div class="chips">${tabs}</div><div class="grid g4">${r0.places.map((p) => placeCard(p, true)).join('')}</div>`;
  });

  // 관광지 안내 페이지
  const tabBox = document.querySelector('[data-region-tabs]');
  const panelBox = document.querySelector('[data-region-panels]');
  if (!tabBox || !panelBox) return;
  tabBox.innerHTML = REGIONS.map((r) => `<button class="chip" type="button" role="tab" id="tab-${r.id}" aria-controls="${r.id}">${esc(pick(r.name))}</button>`).join('');
  panelBox.innerHTML = REGIONS.map((r) => `
    <div class="region-panel" role="tabpanel" id="${r.id}" aria-labelledby="tab-${r.id}">
      <h2>${esc(fill(L.places, r))}</h2>
      <p class="sec-desc">${esc(L.placesIntro || '')}</p>
      <div class="grid g2">${r.places.map((p) => placeCard(p, false)).join('')}</div>
      <p class="caution">${ICON_ALERT}<span>${esc(L.caution || '')}</span></p>
      <div class="btn-row"><span class="btn btn-off" role="button" aria-disabled="true">${esc(L.klook || '')}</span></div>
      <h3 class="sub-h" id="${r.id}-route">${esc(fill(L.route, r))}</h3>
      <p class="sec-desc">${esc(L.routeIntro || '')}</p>
      ${L.routeTip ? `<div class="guide-say"><img class="guide-img" data-guide="map" alt="" hidden><p class="bubble">${esc(L.routeTip)}</p></div>` : ''}
      <ol class="steps">${r.route.map((s, i) => `<li><span class="step-no">${String(i + 1).padStart(2, '0')}</span><div><h4>${esc(pick(s.title))}</h4><p>${pick(s.text)}</p></div></li>`).join('')}</ol>
    </div>`).join('');

  const show = (id) => {
    const target = REGIONS.some((r) => r.id === id) ? id : REGIONS[0].id;
    REGIONS.forEach((r) => {
      const on = r.id === target;
      document.getElementById('tab-' + r.id).setAttribute('aria-selected', String(on));
      document.getElementById(r.id).hidden = !on;
    });
  };
  tabBox.querySelectorAll('[role="tab"]').forEach((b) => b.addEventListener('click', () => {
    const id = b.getAttribute('aria-controls');
    show(id);
    history.replaceState(null, '', '#' + id);
  }));
  show(location.hash.slice(1));
}
renderRegions();
loadGuideImages();

// 문의 폼·협력 업체 등록 폼 (2026-11-16)
// FORM_ENDPOINT에 Apps Script 웹 앱 주소(…/exec)를 넣으면 바로 접수(시트 + 메일 알림).
// 비어 있으면 예전처럼 메일 앱(mailto)으로 보낸다.
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyZvO0Yf02Lphm2ACTj4S3ffEk8sv9H2GWYPWQ7bsaKE2g7BijWDOYnG0TSGqYBvQYk/exec';
const FORM_MAIL = 'ollamnpsolution@gmail.com';
const FIELD_KO = { name: '이름', country: '국가', email: '이메일', phone: '연락처', type: '문의 유형', message: '문의 내용',
  org: '기관·업체명', field: '분야', person: '담당자', langs: '가능한 언어', intro: '소개' };
function setupForm(f) {
  if (!f) return;
  const kind = f.dataset.kind || 'contact';
  const note = f.querySelector('.form-note');
  const btn = f.querySelector('button[type=submit]');
  f.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!f.checkValidity()) {
      note.textContent = f.dataset.msgInvalid || '필수 항목을 모두 입력하고 개인정보 수집에 동의해 주세요.';
      f.reportValidity();
      return;
    }
    const d = new FormData(f);
    if (d.get('website')) return; // 함정 칸에 글이 있으면 자동 프로그램으로 보고 조용히 무시
    const data = { kind, lang: LANG, page: location.pathname };
    d.forEach((v, k) => { if (k !== 'website' && k !== 'consent') data[k] = String(v).trim(); });
    data.consent = d.get('consent') ? 'Y' : 'N';
    if (!FORM_ENDPOINT) {
      const title = kind === 'partner' ? `[협력 업체 등록 ${LANG.toUpperCase()}] ${data.field} - ${data.org}`
        : `[홈페이지 문의 ${LANG.toUpperCase()}] ${data.type} - ${data.name}`;
      const body = Object.keys(data).filter((k) => FIELD_KO[k]).map((k) => `${FIELD_KO[k]}: ${data[k]}`).join('\n') + `\n언어: ${LANG}`;
      window.location.href = `mailto:${FORM_MAIL}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
      note.textContent = f.dataset.msgSent || `메일 앱이 열립니다. 열리지 않으면 ${FORM_MAIL} 으로 직접 보내 주세요.`;
      return;
    }
    btn.disabled = true;
    note.textContent = f.dataset.msgSending || '보내는 중입니다…';
    try {
      // text/plain으로 보내면 Apps Script가 사전 요청 없이 받는다(no-cors라 응답 내용은 못 읽음)
      await fetch(FORM_ENDPOINT, { method: 'POST', mode: 'no-cors', credentials: 'omit', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(data) });
      note.textContent = f.dataset.msgOk || '접수되었습니다. 1영업일 안에 답변드립니다.';
      f.reset();
    } catch (err) {
      note.textContent = f.dataset.msgFail || `전송에 실패했습니다. ${FORM_MAIL} 으로 직접 보내 주세요.`;
    } finally {
      btn.disabled = false;
    }
  });
}
setupForm(document.getElementById('contactForm'));
setupForm(document.getElementById('partnerForm'));

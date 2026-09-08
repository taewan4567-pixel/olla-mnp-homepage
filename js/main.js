// 모바일 내비게이션 토글
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));

// 문의 폼: 백엔드 연결 전까지는 메일 클라이언트로 전달
// TODO: Formspree / Google Apps Script / 자체 API 중 하나로 교체
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    note.textContent = '필수 항목을 모두 입력하고 개인정보 수집에 동의해 주세요.';
    form.reportValidity();
    return;
  }
  const d = new FormData(form);
  const subject = `[홈페이지 문의] ${d.get('type')} - ${d.get('name')}`;
  const body = [
    `이름: ${d.get('name')}`,
    `국가: ${d.get('country')}`,
    `이메일: ${d.get('email')}`,
    `연락처: ${d.get('phone')}`,
    `문의 유형: ${d.get('type')}`,
    '',
    d.get('message'),
  ].join('\n');
  window.location.href = `mailto:ollamnpsolution@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  note.textContent = '메일 앱이 열립니다. 열리지 않으면 ollamnpsolution@gmail.com 으로 직접 보내주세요.';
});

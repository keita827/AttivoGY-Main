(() => {
  "use strict";
  const esc = (value) => String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  const campaign = SITE_CONFIG.campaign;
  const now = new Date();
  const start = new Date(`${campaign.startDate}T00:00:00+09:00`);
  const end = new Date(`${campaign.endDate}T23:59:59+09:00`);
  const campaignVisible = campaign.active && now >= start && now <= end;
  const campaignRoot = document.querySelector("#campaign-content");
  const campaignHeading = document.querySelector("#campaign-heading");
  const campaignLabel = campaignHeading?.previousElementSibling;
  if (campaignHeading) campaignHeading.textContent = campaign.title;
  if (campaignLabel) campaignLabel.textContent = `01 / ${campaign.label}`;

  if (campaignVisible) {
    campaignRoot.innerHTML = `<article class="campaign-card">
      <p class="campaign-card__period">${esc(campaign.period)}</p>
      <div class="campaign-visuals">${campaign.images.map((image, index) => `<img src="${esc(image.src)}" alt="${esc(image.alt)}" width="2000" height="1413" ${index ? 'loading="lazy"' : ''}>`).join("")}</div>
      <div class="campaign-details">
        <div class="campaign-details__heading"><p>CAMPAIGN BENEFITS</p><h4>今だけの入会特典</h4></div>
        <div class="benefit-grid">${campaign.benefits.map(item => `<div class="benefit"><p>${esc(item.label)}</p>${item.before ? `<small>${esc(item.before)}</small><span aria-hidden="true">→</span>` : ""}<strong>${esc(item.after)}</strong></div>`).join("")}</div>
        <div class="discount"><p>最大</p><strong>${esc(campaign.highlight)}</strong><span>無料</span></div>
        <p class="campaign-card__message">${esc(campaign.note)}</p>
      </div>
    </article>`;
  } else {
    campaignRoot.innerHTML = `<div class="campaign-empty"><p>CURRENT CAMPAIGN</p><h3>現在ご案内中のキャンペーンはありません。</h3><p>次回のお知らせをお待ちください。</p></div>`;
    document.querySelector(".hero__campaign")?.remove();
  }

  document.querySelector("#service-grid").innerHTML = SITE_CONFIG.services.map(service => `<a class="service-card" href="${esc(service.url)}">
    <span class="service-card__number">${esc(service.number)}</span><p>${esc(service.english)}</p><h3>${esc(service.title)}</h3><div class="service-card__line"></div><p class="service-card__description">${esc(service.description)}</p><span class="service-card__cta">詳しく見る <b>↗</b></span>
  </a>`).join("");

  const event = SITE_CONFIG.event;
  document.querySelector("#event-content").innerHTML = event.enabled && event.url
    ? `<a class="event-card" href="${esc(event.url)}"><span>03 / EVENT</span><h2>EVENT</h2><p>${esc(event.label)}</p><b>↗</b></a>`
    : `<div class="event-card is-disabled" aria-disabled="true"><span>03 / EVENT</span><h2>EVENT</h2><p>${esc(event.label)}</p><small>新しい体験を、ここから。</small></div>`;

  const store = SITE_CONFIG.store;
  document.querySelector("#store-info").innerHTML = `<div><dt>LOCATION</dt><dd>${esc(store.address)}</dd></div><div><dt>OPENING HOURS</dt><dd>${store.hours.map(esc).join("<br>")}</dd></div><div><dt>CLOSED</dt><dd>${store.closed.map(esc).join("<br>")}</dd></div>`;

  const button = document.querySelector(".menu-button");
  const nav = document.querySelector(".global-nav");
  button.addEventListener("click", () => { const open = button.getAttribute("aria-expanded") === "true"; button.setAttribute("aria-expanded", String(!open)); nav.classList.toggle("is-open", !open); document.body.classList.toggle("menu-open", !open); });
  nav.addEventListener("click", e => { if (e.target.matches("a")) { button.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); document.body.classList.remove("menu-open"); } });
  const networkToggle = document.querySelector(".network-nav__toggle");
  const networkLinks = document.querySelector(".network-nav__links");
  networkToggle.addEventListener("click", () => {
    const open = networkToggle.getAttribute("aria-expanded") === "true";
    networkToggle.setAttribute("aria-expanded", String(!open));
    networkLinks.classList.toggle("is-open", !open);
  });
})();

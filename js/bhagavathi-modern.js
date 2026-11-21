/* ==========================================================================
   Bhagavathi Chits Pvt. Ltd. — Interactive Client Logic (Vanilla ES6)
   ========================================================================== */

(function () {
  "use strict";

  const VIDEO_STORIES = {
    "what-is-chit": {
      title: "What is a Registered Chit Fund?",
      scenes: [
        {
          img: "assets/images/redesign/hero-family-growth.png",
          tag: "Scene 1 of 4 • Heritage & Trust",
          heading: "India's 200-Year Saving-cum-Borrowing Instrument",
          desc: "A registered chit fund brings together a fixed number of subscribers who agree to contribute a set monthly installment into a shared chit pool."
        },
        {
          img: "assets/images/redesign/about-heritage-office.png",
          tag: "Scene 2 of 4 • Chit Funds Act 1982",
          heading: "100% Regulated by Government of Karnataka",
          desc: "Bhagavathi Chits Pvt. Ltd. (CIN: U65992KA1997PTC022462) operates strictly under the Chit Funds Act, 1982 and periodic scrutiny of the Registrar of Chits."
        },
        {
          img: "assets/images/about/4.jpg",
          tag: "Scene 3 of 4 • Higher Returns",
          heading: "Earn Up to 18% Dividend Advantage",
          desc: "Unlike fixed bank deposits (up to 10% p.a.) or volatile markets, registered chit groups help members earn attractive monthly dividends and access low-cost funds."
        },
        {
          img: "assets/images/benefits/benefits-1.jpg",
          tag: "Scene 4 of 4 • Flexible Plans",
          heading: "Schemes from ₹2 Lakhs to ₹1 Crore",
          desc: "Serving 1,000+ subscribers across Karnataka and Maharashtra with ₹7 Cr+ monthly turnover since 1997."
        }
      ]
    },
    "auction-dividend": {
      title: "Monthly Auction & Equal Dividend",
      scenes: [
        {
          img: "assets/images/about/how-01.jpg",
          tag: "Scene 1 of 4 • Group Formation",
          heading: "Subscribers Contribute Fixed Monthly Installments",
          desc: "Every group runs for 20, 25, 30, or 40 months where the number of months equals the number of tickets in the group."
        },
        {
          img: "assets/images/services/service-bg-1.jpg",
          tag: "Scene 2 of 4 • 5-Minute Monthly Auction",
          heading: "Transparent Monthly Bidding (5% to 30% Cap)",
          desc: "Auctions are held once a month for 5 minutes. Minimum bid is 5% and maximum bid is capped at 30%; ties at 30% are decided by a transparent draw."
        },
        {
          img: "assets/images/about/4.jpg",
          tag: "Scene 3 of 4 • Dividend Sharing",
          heading: "Surplus Distributed Equally to Every Member",
          desc: "After deducting the statutory foreman commission, the balance bid discount is divided equally as dividend and credited to all members including the prized subscriber."
        },
        {
          img: "assets/images/gallery1.jpg",
          tag: "Scene 4 of 4 • Every Member Wins Once",
          heading: "Guaranteed Turn for Every Subscriber",
          desc: "By completion of the chit period, every subscriber receives the prize amount once. Non-prized members enjoy steady monthly dividends throughout."
        }
      ]
    },
    "safety-lien": {
      title: "Complete Safety & FD Lien Security",
      scenes: [
        {
          img: "assets/images/01.jpg",
          tag: "Scene 1 of 4 • Registrar Security Deposit",
          heading: "100% FD Equivalent to Chit Value Placed Before Launch",
          desc: "Before any new chit group starts, Bhagavathi Chits places a Fixed Deposit equal to 100% of the chit denomination with a Nationalised Bank under lien to the Registrar of Chits."
        },
        {
          img: "assets/images/02.jpg",
          tag: "Scene 2 of 4 • Repayment Protection",
          heading: "Adequate Security Before Prize Release",
          desc: "Prized money is disbursed only upon receipt of proper securities covering future installments, safeguarding every non-prized member's funds."
        },
        {
          img: "assets/images/03.jpg",
          tag: "Scene 3 of 4 • Banking Transparency",
          heading: "100% Trackable Cheque & Digital Settlements",
          desc: "All payouts and formal settlements run strictly through verified banking channels with zero hidden charges and zero defaults since inception."
        },
        {
          img: "assets/images/redesign/about-heritage-office.png",
          tag: "Scene 4 of 4 • Ex-Banker Leadership",
          heading: "Founded by Ex-Vijaya Bank Officer Mr. C. Karunakar Shetty",
          desc: "Backed by over 27 years of disciplined banking governance across Bangalore, Mysore, and Udupi."
        }
      ]
    },
    "digital-payments": {
      title: "UPI QR, Passbook & Doorstep Collection",
      scenes: [
        {
          img: "assets/images/about/payments-01.jpg",
          tag: "Scene 1 of 4 • Karnataka Bank UPI",
          heading: "Instant QR Scan via VPA: bhagavathiblr@kbl",
          desc: "Pay monthly chit installments quickly from GPay, PhonePe, Paytm, BHIM UPI, or Amazon Pay using our official Karnataka Bank QR code."
        },
        {
          img: "assets/images/services/service-bg-2.jpg",
          tag: "Scene 2 of 4 • Passbook Facility",
          heading: "Member Passbook After 2nd Installment",
          desc: "Every subscriber receives an official passbook and transparent installment & dividend ledger after receipt of the second installment."
        },
        {
          img: "assets/images/services/service-bg-3.jpg",
          tag: "Scene 3 of 4 • Doorstep Agents",
          heading: "Verified Doorstep Collection Across Branches",
          desc: "Prefer offline convenience? Our verified collection agents visit your doorstep or you can pay via Cheque at Bangalore, Mysore, or Udupi."
        },
        {
          img: "assets/images/redesign/hero-family-growth.png",
          tag: "Scene 4 of 4 • Quick Onboarding",
          heading: "Register Online or Download Application PDF",
          desc: "Choose a plan from ₹2 Lakhs to ₹1 Crore and get personalized guidance from our relationship team within hours."
        }
      ]
    }
  };

  /* ------------------------------------------------------------------
     1. Mobile Drawer & Desktop Dropdowns
     ------------------------------------------------------------------ */
  function initNavigation() {
    const hamburger = document.getElementById("bcHamburger");
    const drawer = document.getElementById("bcMobileDrawer");
    const backdrop = document.getElementById("bcDrawerBackdrop");
    const closeBtn = document.getElementById("bcDrawerClose");

    function openDrawer() {
      if (!drawer || !backdrop) return;
      drawer.classList.add("open");
      backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
      if (hamburger) hamburger.setAttribute("aria-expanded", "true");
    }

    function closeDrawer() {
      if (!drawer || !backdrop) return;
      drawer.classList.remove("open");
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
      if (hamburger) hamburger.setAttribute("aria-expanded", "false");
    }

    if (hamburger) hamburger.addEventListener("click", openDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDrawer);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeDrawer();
        closeAllModals();
      }
    });

    // Mobile drawer submenus
    document.querySelectorAll(".bc-drawer-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const sub = btn.nextElementSibling;
        const icon = btn.querySelector("i");
        if (!sub) return;
        const isOpen = sub.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(isOpen));
        if (icon) icon.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
      });
    });

    // Active nav highlight based on current filename
    const currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".bc-menu-link, .bc-dropdown a, .bc-drawer-nav a").forEach(function (link) {
      const href = (link.getAttribute("href") || "").split("?")[0].split("#")[0].toLowerCase();
      if (href && href === currentFile) {
        link.classList.add("active");
        const parentItem = link.closest(".bc-menu-item");
        if (parentItem) {
          const parentLink = parentItem.querySelector(":scope > .bc-menu-link");
          if (parentLink) parentLink.classList.add("active");
        }
      }
    });
  }

  /* ------------------------------------------------------------------
     2. Animated Stat Counters
     ------------------------------------------------------------------ */
  function initCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) return;

    function animateValue(el) {
      if (el.dataset.counted === "1") return;
      el.dataset.counted = "1";
      const target = parseFloat(el.dataset.counter);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const duration = 1200;
      const startTime = performance.now();

      function step(now) {
        const elapsed = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - elapsed, 3);
        const val = Math.round(target * eased);
        el.textContent = prefix + val.toLocaleString("en-IN") + suffix;
        if (elapsed < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = prefix + target.toLocaleString("en-IN") + suffix;
        }
      }
      requestAnimationFrame(step);
    }

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateValue(entry.target);
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });
      counters.forEach(function (c) { io.observe(c); });
    } else {
      counters.forEach(animateValue);
    }
  }

  /* ------------------------------------------------------------------
     3. Hero Showcase Reel
     ------------------------------------------------------------------ */
  function initHeroShowcase() {
    const showcase = document.getElementById("bcHeroShowcase");
    if (!showcase) return;
    const slides = showcase.querySelectorAll(".bc-hero-slide");
    const dots = showcase.querySelectorAll(".bc-slide-dot");
    if (!slides.length) return;

    let idx = 0;
    let timer = null;

    function showSlide(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle("active", i === idx); });
      dots.forEach(function (d, i) { d.classList.toggle("active", i === idx); });
    }

    function startAuto() {
      stopAuto();
      timer = setInterval(function () { showSlide(idx + 1); }, 4500);
    }

    function stopAuto() {
      if (timer) clearInterval(timer);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        showSlide(i);
        startAuto();
      });
    });

    showcase.addEventListener("mouseenter", stopAuto);
    showcase.addEventListener("mouseleave", startAuto);
    startAuto();
  }

  /* ------------------------------------------------------------------
     4. Chit Plans Filter & Details Modal & Calculator
     ------------------------------------------------------------------ */
  function initPlansAndCalculator() {
    const filterButtons = document.querySelectorAll(".bc-filter-pill[data-filter]");
    const planCards = document.querySelectorAll(".bc-plan-card[data-duration]");

    if (filterButtons.length && planCards.length) {
      filterButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          filterButtons.forEach(function (b) { b.classList.remove("active"); });
          btn.classList.add("active");
          const filter = btn.dataset.filter;
          planCards.forEach(function (card) {
            const dur = card.dataset.duration || "";
            const tier = card.dataset.tier || "";
            const match =
              filter === "all" ||
              dur === filter ||
              tier === filter;
            card.classList.toggle("hidden-plan", !match);
          });
        });
      });
    }

    // Plan Details Modal
    const planModal = document.getElementById("bcPlanModal");
    if (planModal) {
      document.querySelectorAll("[data-plan-view]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const card = btn.closest(".bc-plan-card");
          if (!card) return;
          const title = card.dataset.title || "Chit Plan";
          const monthly = card.dataset.monthly || "";
          const months = card.dataset.duration || "";
          const total = card.dataset.amount || "";
          const dividend = card.dataset.dividend || "Up to 18% p.a. equivalent";

          document.getElementById("bcPlanModalTitle").textContent = title;
          document.getElementById("bcPlanModalTotal").textContent = total;
          document.getElementById("bcPlanModalMonthly").textContent = monthly;
          document.getElementById("bcPlanModalDuration").textContent = months + " Months";
          document.getElementById("bcPlanModalDividend").textContent = dividend;
          const regLink = document.getElementById("bcPlanModalRegister");
          if (regLink) {
            regLink.href = "register.html?plan=" + encodeURIComponent(card.dataset.regValue || title);
          }
          planModal.classList.add("open");
          document.body.style.overflow = "hidden";
        });
      });
    }

    // Chit Savings Estimator
    const calcAmount = document.getElementById("calcChitAmount");
    const calcMonths = document.getElementById("calcMonths");
    if (calcAmount && calcMonths) {
      function updateCalc() {
        const amount = parseInt(calcAmount.value, 10) || 500000;
        const months = parseInt(calcMonths.value, 10) || 25;
        const monthly = Math.round(amount / months);
        const minPrize = Math.round(amount * 0.70);
        const maxPrize = Math.round(amount * 0.95);
        const estDividendMin = Math.round(monthly * 0.08);
        const estDividendMax = Math.round(monthly * 0.22);

        const fmt = function (n) { return "₹ " + n.toLocaleString("en-IN"); };
        const elMonthly = document.getElementById("calcOutMonthly");
        const elTotal = document.getElementById("calcOutTotal");
        const elDiv = document.getElementById("calcOutDividend");
        const elPrize = document.getElementById("calcOutPrize");
        const elCta = document.getElementById("calcRegisterBtn");

        if (elMonthly) elMonthly.textContent = fmt(monthly) + " / mo";
        if (elTotal) elTotal.textContent = fmt(amount);
        if (elDiv) elDiv.textContent = fmt(estDividendMin) + " – " + fmt(estDividendMax) + " / mo";
        if (elPrize) elPrize.textContent = fmt(minPrize) + " – " + fmt(maxPrize);
        if (elCta) {
          const lakhLabel = amount >= 10000000 ? "1Crore" : (amount / 100000) + "Lakhs";
          elCta.href = "register.html?plan=" + encodeURIComponent(lakhLabel);
        }
      }
      calcAmount.addEventListener("change", updateCalc);
      calcMonths.addEventListener("change", updateCalc);
      updateCalc();
    }
  }

  /* ------------------------------------------------------------------
     5. Interactive Video Explainer Modal
     ------------------------------------------------------------------ */
  let videoTimer = null;
  let currentVideoKey = "what-is-chit";
  let currentSceneIdx = 0;
  let videoPlaying = true;

  function renderVideoScene() {
    const story = VIDEO_STORIES[currentVideoKey];
    if (!story) return;
    const scene = story.scenes[currentSceneIdx];
    const stage = document.getElementById("bcVideoStage");
    const imgEl = document.getElementById("bcVideoImg");
    const tagEl = document.getElementById("bcVideoTag");
    const headEl = document.getElementById("bcVideoCaptionTitle");
    const descEl = document.getElementById("bcVideoCaptionDesc");
    const titleEl = document.getElementById("bcVideoModalTitle");
    const fillEl = document.getElementById("bcVideoProgress");
    const playBtn = document.getElementById("bcVideoPlayPause");

    if (titleEl) titleEl.textContent = story.title;
    if (imgEl) imgEl.src = scene.img;
    if (tagEl) tagEl.textContent = scene.tag;
    if (headEl) headEl.textContent = scene.heading;
    if (descEl) descEl.textContent = scene.desc;
    if (fillEl) fillEl.style.width = (((currentSceneIdx + 1) / story.scenes.length) * 100) + "%";
    if (stage) stage.classList.toggle("playing", videoPlaying);
    if (playBtn) {
      playBtn.innerHTML = videoPlaying
        ? '<i class="fas fa-pause"></i> Pause'
        : '<i class="fas fa-play"></i> Play';
    }
  }

  function startVideoAutoplay() {
    if (videoTimer) clearInterval(videoTimer);
    videoPlaying = true;
    renderVideoScene();
    videoTimer = setInterval(function () {
      const story = VIDEO_STORIES[currentVideoKey];
      if (!story || !videoPlaying) return;
      currentSceneIdx = (currentSceneIdx + 1) % story.scenes.length;
      renderVideoScene();
    }, 4500);
  }

  function stopVideoAutoplay() {
    if (videoTimer) clearInterval(videoTimer);
    videoPlaying = false;
    const stage = document.getElementById("bcVideoStage");
    if (stage) stage.classList.remove("playing");
  }

  function initVideoModal() {
    const modal = document.getElementById("bcVideoModal");
    if (!modal) return;

    document.querySelectorAll("[data-video-key]").forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        const key = trigger.dataset.videoKey;
        if (!VIDEO_STORIES[key]) return;
        currentVideoKey = key;
        currentSceneIdx = 0;
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
        startVideoAutoplay();
      });
    });

    const prevBtn = document.getElementById("bcVideoPrev");
    const nextBtn = document.getElementById("bcVideoNext");
    const playPauseBtn = document.getElementById("bcVideoPlayPause");

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        const story = VIDEO_STORIES[currentVideoKey];
        if (!story) return;
        currentSceneIdx = (currentSceneIdx - 1 + story.scenes.length) % story.scenes.length;
        renderVideoScene();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        const story = VIDEO_STORIES[currentVideoKey];
        if (!story) return;
        currentSceneIdx = (currentSceneIdx + 1) % story.scenes.length;
        renderVideoScene();
      });
    }

    if (playPauseBtn) {
      playPauseBtn.addEventListener("click", function () {
        if (videoPlaying) {
          stopVideoAutoplay();
          renderVideoScene();
        } else {
          startVideoAutoplay();
        }
      });
    }
  }

  /* ------------------------------------------------------------------
     6. Testimonials Carousel, Branch Tabs, FAQs & Lightbox
     ------------------------------------------------------------------ */
  function initCarousel() {
    const track = document.getElementById("bcTestiTrack");
    const prev = document.getElementById("bcTestiPrev");
    const next = document.getElementById("bcTestiNext");
    if (!track) return;
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -370, behavior: "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: 370, behavior: "smooth" }); });
  }

  function initBranchTabs() {
    const tabs = document.querySelectorAll(".bc-branch-tab[data-branch]");
    const panels = document.querySelectorAll(".bc-branch-panel[data-branch-panel]");
    if (!tabs.length || !panels.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        const target = tab.dataset.branch;
        tabs.forEach(function (t) {
          t.classList.toggle("active", t.dataset.branch === target);
          t.setAttribute("aria-selected", String(t.dataset.branch === target));
        });
        panels.forEach(function (p) {
          p.classList.toggle("active", p.dataset.branchPanel === target);
        });
      });
    });
  }

  function initFaqs() {
    document.querySelectorAll(".bc-faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const item = btn.closest(".bc-faq-item");
        if (!item) return;
        const isOpen = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }

  function initLightbox() {
    const modal = document.getElementById("bcLightboxModal");
    if (!modal) return;
    const triggers = Array.from(document.querySelectorAll("[data-lightbox-src]"));
    if (!triggers.length) return;

    const imgEl = document.getElementById("bcLightboxImg");
    const titleEl = document.getElementById("bcLightboxTitle");
    const prevBtn = document.getElementById("bcLightboxPrev");
    const nextBtn = document.getElementById("bcLightboxNext");
    let lbIndex = 0;

    function showAt(i) {
      lbIndex = (i + triggers.length) % triggers.length;
      const t = triggers[lbIndex];
      if (imgEl) imgEl.src = t.dataset.lightboxSrc;
      if (titleEl) titleEl.textContent = t.dataset.lightboxTitle || "Bhagavathi Chits";
    }

    triggers.forEach(function (t, i) {
      t.addEventListener("click", function (e) {
        e.preventDefault();
        showAt(i);
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });

    if (prevBtn) prevBtn.addEventListener("click", function () { showAt(lbIndex - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { showAt(lbIndex + 1); });
  }

  /* ------------------------------------------------------------------
     7. Copy UPI VPA & Modals Close & Back to Top
     ------------------------------------------------------------------ */
  function closeAllModals() {
    document.querySelectorAll(".bc-modal-backdrop.open, .bc-popup-backdrop.open").forEach(function (m) {
      m.classList.remove("open");
    });
    stopVideoAutoplay();
    document.body.style.overflow = "";
  }

  function initModalsAndExtras() {
    document.querySelectorAll("[data-modal-close]").forEach(function (btn) {
      btn.addEventListener("click", closeAllModals);
    });
    document.querySelectorAll(".bc-modal-backdrop").forEach(function (bd) {
      bd.addEventListener("click", function (e) {
        if (e.target === bd) closeAllModals();
      });
    });

    // Copy VPA buttons
    document.querySelectorAll("[data-copy-vpa]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const text = btn.dataset.copyVpa || "bhagavathiblr@kbl";
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).catch(function () {});
        }
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(function () { btn.innerHTML = orig; }, 2200);
      });
    });

    // Scroll to top button
    const topBtn = document.getElementById("bcBackToTop");
    if (topBtn) {
      window.addEventListener("scroll", function () {
        topBtn.classList.toggle("visible", window.scrollY > 360);
      }, { passive: true });
      topBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ------------------------------------------------------------------
     8. Register & Contact Form Validation + WhatsApp Handoff
     ------------------------------------------------------------------ */
  function initForms() {
    const params = new URLSearchParams(window.location.search);
    const planParam = params.get("plan");
    const branchParam = params.get("branch");

    const planSelect = document.getElementById("regChitPlan");
    if (planSelect && planParam) {
      for (let i = 0; i < planSelect.options.length; i++) {
        if (planSelect.options[i].value.toLowerCase() === planParam.toLowerCase() ||
            planSelect.options[i].text.toLowerCase().includes(planParam.toLowerCase())) {
          planSelect.selectedIndex = i;
          break;
        }
      }
    }

    const branchSelect = document.getElementById("regBranch");
    if (branchSelect && branchParam) {
      for (let i = 0; i < branchSelect.options.length; i++) {
        if (branchSelect.options[i].value.toLowerCase().includes(branchParam.toLowerCase())) {
          branchSelect.selectedIndex = i;
          break;
        }
      }
    }

    document.querySelectorAll("form[data-bc-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const data = new FormData(form);
        const lines = [];
        data.forEach(function (val, key) {
          if (val && val.toString().trim()) {
            lines.push(key + ": " + val.toString().trim());
          }
        });

        const summaryEl = document.getElementById("bcFormSummary");
        const waBtn = document.getElementById("bcFormWaBtn");
        const modal = document.getElementById("bcFormSuccessModal");

        if (summaryEl) {
          summaryEl.innerHTML = lines
            .map(function (l) {
              const idx = l.indexOf(":");
              return "<div style='padding:6px 0;border-bottom:1px solid #eef2f6;'><strong>" +
                l.slice(0, idx) + ":</strong> " + l.slice(idx + 1) + "</div>";
            })
            .join("");
        }

        if (waBtn) {
          const waMsg = "Hello Bhagavathi Chits! I would like to submit an inquiry:\n" + lines.join("\n");
          waBtn.href = "https://api.whatsapp.com/send?phone=+919148974525&text=" + encodeURIComponent(waMsg);
        }

        if (modal) {
          modal.classList.add("open");
          document.body.style.overflow = "hidden";
        }
        form.reset();
      });
    });
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
     9. Preloader & Welcome Join Pop-Up Photo Modal
     ------------------------------------------------------------------ */
  function initPreloaderAndPopup() {
    const preloader = document.getElementById("bcPreloader");
    const popup = document.getElementById("bcJoinPopup");
    const popupClose = document.getElementById("bcJoinPopupClose");

    function triggerJoinPopup() {
      if (!popup) return;
      try {
        if (sessionStorage.getItem("bcJoinPopupDismissed") === "true") {
          return;
        }
      } catch (err) {}

      setTimeout(function () {
        popup.classList.add("open");
        document.body.style.overflow = "hidden";
      }, 350);
    }

    function closeJoinPopup() {
      if (!popup) return;
      popup.classList.remove("open");
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("bcJoinPopupDismissed", "true");
      } catch (err) {}
    }

    if (popupClose) {
      popupClose.addEventListener("click", function (e) {
        e.preventDefault();
        closeJoinPopup();
      });
    }

    if (popup) {
      popup.addEventListener("click", function (e) {
        if (e.target === popup) {
          closeJoinPopup();
        }
      });
    }

    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && popup && popup.classList.contains("open")) {
        closeJoinPopup();
      }
    });

    // Dismiss preloader smoothly
    function dismissPreloader() {
      if (!preloader || preloader.dataset.dismissed === "true") return;
      preloader.dataset.dismissed = "true";
      preloader.classList.add("fade-out");
      setTimeout(function () {
        preloader.style.display = "none";
        triggerJoinPopup();
      }, 450);
    }

    if (document.readyState === "complete") {
      setTimeout(dismissPreloader, 250);
    } else {
      window.addEventListener("load", function () {
        setTimeout(dismissPreloader, 250);
      });
      // Safety timeout fallback
      setTimeout(dismissPreloader, 900);
    }
  }

  /* ------------------------------------------------------------------
     10. Mobile Sticky Bottom Navigation Active Item
     ------------------------------------------------------------------ */
  function initBottomNav() {
    const path = window.location.pathname.toLowerCase();
    const navItems = document.querySelectorAll(".bc-bottom-nav-item");
    if (!navItems.length) return;

    let matched = false;
    navItems.forEach(function (item) {
      const page = item.dataset.bottomPage;
      if (!page) return;

      if (
        (page === "index" && (path.endsWith("index.html") || path.endsWith("/") || path === "")) ||
        (page === "chit-plans" && path.includes("chit-plans.html")) ||
        (page === "branches" && (path.includes("mysore-branch") || window.location.hash === "#branches")) ||
        (page === "payments" && path.includes("payments.html")) ||
        (page === "kyc" && path.includes("kyc.html"))
      ) {
        item.classList.add("active");
        matched = true;
      } else {
        item.classList.remove("active");
      }
    });

    if (!matched) {
      if (path.includes("services") || path.includes("how-it-works") || path.includes("benefits")) {
        const chitPlanItem = document.querySelector('.bc-bottom-nav-item[data-bottom-page="chit-plans"]');
        if (chitPlanItem) chitPlanItem.classList.add("active");
      } else if (path.includes("contact")) {
        const branchItem = document.querySelector('.bc-bottom-nav-item[data-bottom-page="branches"]');
        if (branchItem) branchItem.classList.add("active");
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initPreloaderAndPopup();
    initBottomNav();
    initNavigation();
    initCounters();
    initHeroShowcase();
    initPlansAndCalculator();
    initVideoModal();
    initCarousel();
    initBranchTabs();
    initFaqs();
    initLightbox();
    initModalsAndExtras();
    initForms();
  });
})();

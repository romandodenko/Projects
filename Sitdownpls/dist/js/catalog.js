"use strict";
document.addEventListener("DOMContentLoaded", (function () {
  var e = gsap.timeline({
    paused: !0
  });
  e.to(".furniture-hidden", {
    duration: .3,
    opacity: 1,
    visibility: "visible",
    display: "block"
  }), document.querySelectorAll(".btn-furniture").forEach((function (c) {
    c.addEventListener("click", (function () {
      document.querySelectorAll(".btn-close-furniture").forEach((function (e) {
        e.classList.add("vis")
      })), c.classList.add("hid"), e.timeScale(1).play()
    }))
  })), document.querySelectorAll(".btn-close-furniture").forEach((function (c) {
    c.addEventListener("click", (function () {
      document.querySelectorAll(".btn-furniture").forEach((function (e) {
        e.classList.remove("hid")
      })), c.classList.remove("vis"), e.timeScale(2).reverse()
    }))
  })), document.querySelectorAll(".catalog__btnfurniture").forEach((function (c) {
    c.addEventListener("click", (function () {
      document.querySelectorAll(".catalog__closefurniture").forEach((function (e) {
        e.classList.add("vis")
      })), c.classList.add("hid"), e.timeScale(1).play()
    }))
  })), document.querySelectorAll(".catalog__closefurniture").forEach((function (c) {
    c.addEventListener("click", (function () {
      document.querySelectorAll(".catalog__btnfurniture").forEach((function (e) {
        e.classList.remove("hid")
      })), c.classList.remove("vis"), e.timeScale(2).reverse()
    }))
  }));
  var c = gsap.timeline({
    paused: !0
  });
  c.to(".color-hidden", {
    duration: .3,
    opacity: 1,
    visibility: "visible",
    display: "block"
  }), document.querySelectorAll(".color-btn").forEach((function (e) {
    e.addEventListener("click", (function () {
      document.querySelectorAll(".color-close-btn").forEach((function (e) {
        e.classList.add("vis")
      })), e.classList.add("hid"), c.timeScale(1).play()
    }))
  })), document.querySelectorAll(".color-close-btn").forEach((function (e) {
    e.addEventListener("click", (function () {
      document.querySelectorAll(".color-btn").forEach((function (e) {
        e.classList.remove("hid")
      })), e.classList.remove("vis"), c.timeScale(2).reverse()
    }))
  })), document.querySelectorAll(".catalog__btncolor").forEach((function (e) {
    e.addEventListener("click", (function () {
      document.querySelectorAll(".catalog__closecolor").forEach((function (e) {
        e.classList.add("vis")
      })), e.classList.add("hid"), c.timeScale(1).play()
    }))
  })), document.querySelectorAll(".catalog__closecolor").forEach((function (e) {
    e.addEventListener("click", (function () {
      document.querySelectorAll(".catalog__btncolor").forEach((function (e) {
        e.classList.remove("hid")
      })), e.classList.remove("vis"), c.timeScale(2).reverse()
    }))
  })), document.querySelectorAll(".catalog-but").forEach((function (e) {
    e.addEventListener("click", (function (e) {
      var c = e.currentTarget.dataset.path;
      document.querySelectorAll(".catalog__wrapper").forEach((function (e) {
        e.classList.remove("catalog-list-active")
      })), document.querySelector('[data-target="'.concat(c, '"]')).classList.add("catalog-list-active")
    }))
  })), document.querySelectorAll(".catalog-but").forEach((function (e) {
    e.addEventListener("click", (function (e) {
      var c = e.currentTarget.dataset.pathbut;
      document.querySelectorAll(".catalog-but").forEach((function (e) {
        e.classList.remove("but-active")
      })), document.querySelector('[data-targetbut="'.concat(c, '"]')).classList.add("but-active"), window.scrollTo({
        top: 210,
        behavior: "smooth"
      })
    }))
  }));
  var t = document.getElementById("range-slider");
  noUiSlider.create(t, {
    start: [2e3, 15e4],
    connect: !0,
    animationDuration: 100,
    step: 1,
    handleAttributes: [{
      "aria-label": "уменьшить цену"
    }, {
      "aria-label": "повысить цену"
    }],
    behaviour: "tap",
    decimals: 0,
    range: {
      min: 0,
      max: 225e3
    }
  });
  var n = [document.getElementById("first-price"), document.getElementById("second-price")];
  t.noUiSlider.on("update", (function (e, c) {
    n[c].value = Math.round(e[c]), document.getElementById("prc").innerHTML = "До " + document.getElementById("second-price").value, document.getElementById("price-wrap").classList.add("price-active")
  }));
  n.forEach((function (e, c) {
    e.addEventListener("change", (function (e) {
      var n, o, r;
      n = c, o = e.currentTarget.value, (r = [null, null])[n] = o, t.noUiSlider.set(r)
    }))
  }));
  var o = document.querySelector(".catalog__prc");
  document.querySelectorAll(".second-price").forEach((function (e) {
    e.addEventListener("input", (function () {
      var c = e.value;
      o.innerHTML = "До " + c
    }))
  }));
  var r = document.querySelectorAll("input[type=number]");
  Array.from(r).forEach((function (e) {
    var c = +e.min,
      t = +e.max;
    e.addEventListener("input", (function (n) {
      var o = e.value;
      o > t ? e.value = t : o < c && (e.value = c)
    }))
  }));
  var a = "dropfilter__btn",
    i = "is-active",
    l = "is-disabled";

  function u(e) {
    e.target.classList.contains(l) && (e.target.classList.remove(l, i), e.target.removeEventListener("animationend", u))
  }
  document.body.addEventListener("click", (function (e) {
    var c = document.querySelectorAll(".".concat(i));
    if (c.length && !e.target.closest(".".concat(i)) && c.forEach((function (e) {
        e.classList.contains(a) ? e.classList.remove(i) : e.classList.add(l)
      })), e.target.closest(".".concat(a))) {
      var t = e.target.closest(".".concat(a)),
        n = t.dataset.path,
        o = document.querySelector('[data-target="'.concat(n, '"]'));
      t.classList.toggle(i), o.classList.contains(i) ? o.classList.add(l) : (o.classList.add(i), o.addEventListener("animationend", u))
    }
  }));
  var s = document.querySelectorAll(".furniture__sofas"),
    f = document.querySelectorAll(".furnitures-sofas"),
    d = document.querySelectorAll(".sofas-btn");
  s.forEach((function (e) {
    e.addEventListener("change", (function () {
      f.forEach((function (e) {
        e.classList.toggle("sofas-active")
      }))
    }))
  })), d.forEach((function (e) {
    e.addEventListener("click", (function () {
      f.forEach((function (e) {
        e.classList.remove("sofas-active")
      })), s.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var h = document.querySelectorAll(".furniture__armchair"),
    E = document.querySelectorAll(".furnitures-armchair"),
    v = document.querySelectorAll(".archair-btn");
  h.forEach((function (e) {
    e.addEventListener("change", (function () {
      E.forEach((function (e) {
        e.classList.toggle("archair-active")
      }))
    }))
  })), v.forEach((function (e) {
    e.addEventListener("click", (function () {
      E.forEach((function (e) {
        e.classList.remove("archair-active")
      })), h.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var m = document.querySelectorAll(".furniture__poufs"),
    L = document.querySelectorAll(".furnitures-poufs"),
    g = document.querySelectorAll(".poufs-btn");
  m.forEach((function (e) {
    e.addEventListener("change", (function () {
      L.forEach((function (e) {
        e.classList.toggle("poufs-active")
      }))
    }))
  })), g.forEach((function (e) {
    e.addEventListener("click", (function () {
      L.forEach((function (e) {
        e.classList.remove("poufs-active")
      })), m.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var y = document.querySelectorAll(".furniture__beds"),
    S = document.querySelectorAll(".furnitures-beds"),
    q = document.querySelectorAll(".beds-btn");
  y.forEach((function (e) {
    e.addEventListener("change", (function () {
      S.forEach((function (e) {
        e.classList.toggle("beds-active")
      }))
    }))
  })), q.forEach((function (e) {
    e.addEventListener("click", (function () {
      S.forEach((function (e) {
        e.classList.remove("beds-active")
      })), y.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var k = document.querySelectorAll(".furniture__pedestals"),
    A = document.querySelectorAll(".furnitures-pedestals"),
    b = document.querySelectorAll(".pedestals-btn");
  k.forEach((function (e) {
    e.addEventListener("change", (function () {
      A.forEach((function (e) {
        e.classList.toggle("pedestals-active")
      }))
    }))
  })), b.forEach((function (e) {
    e.addEventListener("click", (function () {
      A.forEach((function (e) {
        e.classList.remove("pedestals-active")
      })), k.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var _ = document.querySelectorAll(".furniture__commode"),
    p = document.querySelectorAll(".furnitures-commode"),
    w = document.querySelectorAll(".commode-btn");
  _.forEach((function (e) {
    e.addEventListener("change", (function () {
      p.forEach((function (e) {
        e.classList.toggle("commode-active")
      }))
    }))
  })), w.forEach((function (e) {
    e.addEventListener("click", (function () {
      p.forEach((function (e) {
        e.classList.remove("commode-active")
      })), _.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var B = document.querySelectorAll(".furniture__chair"),
    I = document.querySelectorAll(".furnitures-chairs"),
    T = document.querySelectorAll(".chairs-btn");
  B.forEach((function (e) {
    e.addEventListener("change", (function () {
      I.forEach((function (e) {
        e.classList.toggle("chairs-active")
      }))
    }))
  })), T.forEach((function (e) {
    e.addEventListener("click", (function () {
      I.forEach((function (e) {
        e.classList.remove("chairs-active")
      })), B.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var M = document.querySelectorAll(".furniture__desk"),
    U = document.querySelectorAll(".furnitures-desk"),
    x = document.querySelectorAll(".desk-btn");
  M.forEach((function (e) {
    e.addEventListener("change", (function () {
      U.forEach((function (e) {
        e.classList.toggle("chairs-active")
      }))
    }))
  })), x.forEach((function (e) {
    e.addEventListener("click", (function () {
      U.forEach((function (e) {
        e.classList.remove("chairs-active")
      })), M.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var D = document.querySelectorAll(".furniture__accessories"),
    H = document.querySelectorAll(".furnitures-accessories"),
    C = document.querySelectorAll(".accessories-btn");
  D.forEach((function (e) {
    e.addEventListener("change", (function () {
      H.forEach((function (e) {
        e.classList.toggle("accessories-active")
      }))
    }))
  })), C.forEach((function (e) {
    e.addEventListener("click", (function () {
      H.forEach((function (e) {
        e.classList.remove("accessories-active")
      })), D.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var O = document.querySelectorAll(".furniture__straightsofas"),
    j = document.querySelectorAll(".furnitures-straightsofas"),
    z = document.querySelectorAll(".straightsofas-btn");
  O.forEach((function (e) {
    e.addEventListener("change", (function () {
      j.forEach((function (e) {
        e.classList.toggle("straightsofas-active")
      }))
    }))
  })), z.forEach((function (e) {
    e.addEventListener("click", (function () {
      j.forEach((function (e) {
        e.classList.remove("straightsofas-active")
      })), O.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var F = document.querySelectorAll(".furniture__cornersofas"),
    G = document.querySelectorAll(".furnitures-cornersofas"),
    J = document.querySelectorAll(".cornersofas-btn");
  F.forEach((function (e) {
    e.addEventListener("change", (function () {
      G.forEach((function (e) {
        e.classList.toggle("cornersofas-active")
      }))
    }))
  })), J.forEach((function (e) {
    e.addEventListener("click", (function () {
      G.forEach((function (e) {
        e.classList.remove("cornersofas-active")
      })), F.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var K = document.querySelectorAll(".furniture__modularsofas"),
    N = document.querySelectorAll(".furnitures-modularsofas"),
    P = document.querySelectorAll(".modularsofas-btn");
  K.forEach((function (e) {
    e.addEventListener("change", (function () {
      N.forEach((function (e) {
        e.classList.toggle("modularsofas-active")
      }))
    }))
  })), P.forEach((function (e) {
    e.addEventListener("click", (function () {
      N.forEach((function (e) {
        e.classList.remove("modularsofas-active")
      })), K.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var Q = document.querySelectorAll(".furniture__leatherettesofas"),
    R = document.querySelectorAll(".furnitures-leatherettesofas"),
    V = document.querySelectorAll(".leatherettesofas-btn");
  Q.forEach((function (e) {
    e.addEventListener("change", (function () {
      R.forEach((function (e) {
        e.classList.toggle("leatherettesofas-active")
      }))
    }))
  })), V.forEach((function (e) {
    e.addEventListener("click", (function () {
      R.forEach((function (e) {
        e.classList.remove("leatherettesofas-active")
      })), Q.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var W = document.querySelectorAll(".furniture__upholsteredarmchairs"),
    X = document.querySelectorAll(".furnitures-upholsteredarmchairs"),
    Y = document.querySelectorAll(".upholsteredarmchairs-btn");
  W.forEach((function (e) {
    e.addEventListener("change", (function () {
      X.forEach((function (e) {
        e.classList.toggle("upholsteredarmchairs-active")
      }))
    }))
  })), Y.forEach((function (e) {
    e.addEventListener("click", (function () {
      X.forEach((function (e) {
        e.classList.remove("upholsteredarmchairs-active")
      })), W.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var Z = document.querySelectorAll(".furniture__chairbeds"),
    $ = document.querySelectorAll(".furnitures-chairbeds"),
    ee = document.querySelectorAll(".chairbeds-btn");
  Z.forEach((function (e) {
    e.addEventListener("change", (function () {
      $.forEach((function (e) {
        e.classList.toggle("chairbeds-active")
      }))
    }))
  })), ee.forEach((function (e) {
    e.addEventListener("click", (function () {
      $.forEach((function (e) {
        e.classList.remove("chairbeds-active")
      })), Z.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var ce = document.querySelectorAll(".furniture__singlebeds"),
    te = document.querySelectorAll(".furnitures-singlebeds"),
    ne = document.querySelectorAll(".singlebeds-btn");
  ce.forEach((function (e) {
    e.addEventListener("change", (function () {
      te.forEach((function (e) {
        e.classList.toggle("singlebeds-active")
      }))
    }))
  })), ne.forEach((function (e) {
    e.addEventListener("click", (function () {
      te.forEach((function (e) {
        e.classList.remove("singlebeds-active")
      })), ce.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var oe = document.querySelectorAll(".furniture__doublebeds"),
    re = document.querySelectorAll(".furnitures-doublebeds"),
    ae = document.querySelectorAll(".doublebeds-btn");
  oe.forEach((function (e) {
    e.addEventListener("change", (function () {
      re.forEach((function (e) {
        e.classList.toggle("doublebeds-active")
      }))
    }))
  })), ae.forEach((function (e) {
    e.addEventListener("click", (function () {
      re.forEach((function (e) {
        e.classList.remove("doublebeds-active")
      })), oe.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var ie = document.querySelectorAll(".furniture__woodenchairs"),
    le = document.querySelectorAll(".furnitures-woodenchairs"),
    ue = document.querySelectorAll(".woodenchairs-btn");
  ie.forEach((function (e) {
    e.addEventListener("change", (function () {
      le.forEach((function (e) {
        e.classList.toggle("woodenchairs-active")
      }))
    }))
  })), ue.forEach((function (e) {
    e.addEventListener("click", (function () {
      le.forEach((function (e) {
        e.classList.remove("woodenchairs-active")
      })), ie.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var se = document.querySelectorAll(".furniture__metalchairs"),
    fe = document.querySelectorAll(".furnitures-metalchairs"),
    de = document.querySelectorAll(".metalchairs-btn");
  se.forEach((function (e) {
    e.addEventListener("change", (function () {
      fe.forEach((function (e) {
        e.classList.toggle("metalchairs-active")
      }))
    }))
  })), de.forEach((function (e) {
    e.addEventListener("click", (function () {
      fe.forEach((function (e) {
        e.classList.remove("metalchairs-active")
      })), se.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var he = document.querySelectorAll(".furniture__alarmclocks"),
    Ee = document.querySelectorAll(".furnitures-alarmclocks"),
    ve = document.querySelectorAll(".alarmclocks-btn");
  he.forEach((function (e) {
    e.addEventListener("change", (function () {
      Ee.forEach((function (e) {
        e.classList.toggle("alarmclocks-active")
      }))
    }))
  })), ve.forEach((function (e) {
    e.addEventListener("click", (function () {
      Ee.forEach((function (e) {
        e.classList.remove("alarmclocks-active")
      })), he.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var me = document.querySelectorAll(".furniture__sculptures"),
    Le = document.querySelectorAll(".furnitures-sculptures"),
    ge = document.querySelectorAll(".sculptures-btn");
  me.forEach((function (e) {
    e.addEventListener("change", (function () {
      Le.forEach((function (e) {
        e.classList.toggle("sculptures-active")
      }))
    }))
  })), ge.forEach((function (e) {
    e.addEventListener("click", (function () {
      Le.forEach((function (e) {
        e.classList.remove("sculptures-active")
      })), me.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var ye = document.getElementById("second-price"),
    Se = document.querySelectorAll(".tag-price"),
    qe = document.querySelectorAll(".prc-btn");
  ye.addEventListener("change", (function () {
    Se.forEach((function (e) {
      e.classList.add("price-active")
    }))
  })), qe.forEach((function (e) {
    e.addEventListener("click", (function () {
      Se.forEach((function (e) {
        e.classList.remove("price-active"), ye.value = ""
      }))
    }))
  }));
  var ke = document.querySelectorAll(".catalog__more"),
    Ae = document.querySelectorAll(".morediscount"),
    be = document.querySelectorAll(".morediscount-btn");
  ke.forEach((function (e) {
    e.addEventListener("change", (function () {
      Ae.forEach((function (e) {
        e.classList.toggle("morediscount-active")
      }))
    }))
  })), be.forEach((function (e) {
    e.addEventListener("click", (function () {
      Ae.forEach((function (e) {
        e.classList.remove("morediscount-active")
      })), ke.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var _e = document.querySelectorAll(".catalog__less"),
    pe = document.querySelectorAll(".lessdiscount"),
    we = document.querySelectorAll(".lessdiscount-btn");
  _e.forEach((function (e) {
    e.addEventListener("change", (function () {
      pe.forEach((function (e) {
        e.classList.toggle("lessdiscount-active")
      }))
    }))
  })), we.forEach((function (e) {
    e.addEventListener("click", (function () {
      pe.forEach((function (e) {
        e.classList.remove("lessdiscount-active")
      })), _e.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var Be = document.querySelectorAll(".catalog__nodiscount"),
    Ie = document.querySelectorAll(".nodiscount"),
    Te = document.querySelectorAll(".nodiscount-btn");
  Be.forEach((function (e) {
    e.addEventListener("change", (function () {
      Ie.forEach((function (e) {
        e.classList.toggle("nodiscount-active")
      }))
    }))
  })), Te.forEach((function (e) {
    e.addEventListener("click", (function () {
      Ie.forEach((function (e) {
        e.classList.remove("nodiscount-active")
      })), Be.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var Me = document.querySelectorAll(".color__brown"),
    Ue = document.querySelectorAll(".color-brown"),
    xe = document.querySelectorAll(".brown-btn");
  Me.forEach((function (e) {
    e.addEventListener("change", (function () {
      Ue.forEach((function (e) {
        e.classList.toggle("brown-active")
      }))
    }))
  })), xe.forEach((function (e) {
    e.addEventListener("click", (function () {
      Ue.forEach((function (e) {
        e.classList.remove("brown-active")
      })), Me.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var De = document.querySelectorAll(".color__black"),
    He = document.querySelectorAll(".color-black"),
    Ce = document.querySelectorAll(".black-btn");
  De.forEach((function (e) {
    e.addEventListener("change", (function () {
      He.forEach((function (e) {
        e.classList.toggle("black-active")
      }))
    }))
  })), Ce.forEach((function (e) {
    e.addEventListener("click", (function () {
      He.forEach((function (e) {
        e.classList.remove("black-active")
      })), De.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var Oe = document.querySelectorAll(".color__beige"),
    je = document.querySelectorAll(".color-beige"),
    ze = document.querySelectorAll(".beige-btn");
  Oe.forEach((function (e) {
    e.addEventListener("change", (function () {
      je.forEach((function (e) {
        e.classList.toggle("beige-active")
      }))
    }))
  })), ze.forEach((function (e) {
    e.addEventListener("click", (function () {
      je.forEach((function (e) {
        e.classList.remove("beige-active")
      })), Oe.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var Fe = document.querySelectorAll(".color__gray"),
    Ge = document.querySelectorAll(".color-gray"),
    Je = document.querySelectorAll(".gray-btn");
  Fe.forEach((function (e) {
    e.addEventListener("change", (function () {
      Ge.forEach((function (e) {
        e.classList.toggle("gray-active")
      }))
    }))
  })), Je.forEach((function (e) {
    e.addEventListener("click", (function () {
      Ge.forEach((function (e) {
        e.classList.remove("gray-active")
      })), Fe.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var Ke = document.querySelectorAll(".color__white"),
    Ne = document.querySelectorAll(".color-white"),
    Pe = document.querySelectorAll(".white-btn");
  Ke.forEach((function (e) {
    e.addEventListener("change", (function () {
      Ne.forEach((function (e) {
        e.classList.toggle("white-active")
      }))
    }))
  })), Pe.forEach((function (e) {
    e.addEventListener("click", (function () {
      Ne.forEach((function (e) {
        e.classList.remove("white-active")
      })), Ke.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var Qe = document.querySelectorAll(".color__navy"),
    Re = document.querySelectorAll(".color-navy"),
    Ve = document.querySelectorAll(".navy-btn");
  Qe.forEach((function (e) {
    e.addEventListener("change", (function () {
      Re.forEach((function (e) {
        e.classList.toggle("navy-active")
      }))
    }))
  })), Ve.forEach((function (e) {
    e.addEventListener("click", (function () {
      Re.forEach((function (e) {
        e.classList.remove("navy-active")
      })), Qe.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var We = document.querySelectorAll(".color__orange"),
    Xe = document.querySelectorAll(".color-orange"),
    Ye = document.querySelectorAll(".orange-btn");
  We.forEach((function (e) {
    e.addEventListener("change", (function () {
      Xe.forEach((function (e) {
        e.classList.toggle("orange-active")
      }))
    }))
  })), Ye.forEach((function (e) {
    e.addEventListener("click", (function () {
      Xe.forEach((function (e) {
        e.classList.remove("orange-active")
      })), We.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var Ze = document.querySelectorAll(".color__yellow"),
    $e = document.querySelectorAll(".color-yellow"),
    ec = document.querySelectorAll(".yellow-btn");
  Ze.forEach((function (e) {
    e.addEventListener("change", (function () {
      $e.forEach((function (e) {
        e.classList.toggle("yellow-active")
      }))
    }))
  })), ec.forEach((function (e) {
    e.addEventListener("click", (function () {
      $e.forEach((function (e) {
        e.classList.remove("yellow-active")
      })), Ze.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var cc = document.querySelectorAll(".color__green"),
    tc = document.querySelectorAll(".color-green"),
    nc = document.querySelectorAll(".green-btn");
  cc.forEach((function (e) {
    e.addEventListener("change", (function () {
      tc.forEach((function (e) {
        e.classList.toggle("green-active")
      }))
    }))
  })), nc.forEach((function (e) {
    e.addEventListener("click", (function () {
      tc.forEach((function (e) {
        e.classList.remove("green-active")
      })), cc.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var oc = document.querySelectorAll(".color__red"),
    rc = document.querySelectorAll(".color-red"),
    ac = document.querySelectorAll(".red-btn");
  oc.forEach((function (e) {
    e.addEventListener("change", (function () {
      rc.forEach((function (e) {
        e.classList.toggle("red-active")
      }))
    }))
  })), ac.forEach((function (e) {
    e.addEventListener("click", (function () {
      rc.forEach((function (e) {
        e.classList.remove("red-active")
      })), oc.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var ic = document.querySelectorAll(".color__purple"),
    lc = document.querySelectorAll(".color-purple"),
    uc = document.querySelectorAll(".purple-btn");
  ic.forEach((function (e) {
    e.addEventListener("change", (function () {
      lc.forEach((function (e) {
        e.classList.toggle("purple-active")
      }))
    }))
  })), uc.forEach((function (e) {
    e.addEventListener("click", (function () {
      lc.forEach((function (e) {
        e.classList.remove("purple-active")
      })), ic.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var sc = document.querySelectorAll(".color__pink"),
    fc = document.querySelectorAll(".color-pink"),
    dc = document.querySelectorAll(".pink-btn");
  sc.forEach((function (e) {
    e.addEventListener("change", (function () {
      fc.forEach((function (e) {
        e.classList.toggle("pink-active")
      }))
    }))
  })), dc.forEach((function (e) {
    e.addEventListener("click", (function () {
      fc.forEach((function (e) {
        e.classList.remove("pink-active")
      })), sc.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var hc = document.querySelectorAll(".color__blue"),
    Ec = document.querySelectorAll(".color-blue"),
    vc = document.querySelectorAll(".blue-btn");
  hc.forEach((function (e) {
    e.addEventListener("change", (function () {
      Ec.forEach((function (e) {
        e.classList.toggle("blue-active")
      }))
    }))
  })), vc.forEach((function (e) {
    e.addEventListener("click", (function () {
      Ec.forEach((function (e) {
        e.classList.remove("blue-active")
      })), hc.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var mc = document.querySelectorAll(".color__lightgreen"),
    Lc = document.querySelectorAll(".color-lightgreen"),
    gc = document.querySelectorAll(".lightgreen-btn");
  mc.forEach((function (e) {
    e.addEventListener("change", (function () {
      Lc.forEach((function (e) {
        e.classList.toggle("lightgreen-active")
      }))
    }))
  })), gc.forEach((function (e) {
    e.addEventListener("click", (function () {
      Lc.forEach((function (e) {
        e.classList.remove("lightgreen-active")
      })), mc.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var yc = document.querySelectorAll(".color__aquamarine"),
    Sc = document.querySelectorAll(".color-aquamarine"),
    qc = document.querySelectorAll(".aquamarine-btn");
  yc.forEach((function (e) {
    e.addEventListener("change", (function () {
      Sc.forEach((function (e) {
        e.classList.toggle("aquamarine-active")
      }))
    }))
  })), qc.forEach((function (e) {
    e.addEventListener("click", (function () {
      Sc.forEach((function (e) {
        e.classList.remove("aquamarine-active")
      })), yc.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }));
  var kc = document.querySelectorAll(".color__grayc"),
    Ac = document.querySelectorAll(".color-grayc"),
    bc = document.querySelectorAll(".grayc-btn");
  kc.forEach((function (e) {
    e.addEventListener("change", (function () {
      Ac.forEach((function (e) {
        e.classList.toggle("grayc-active")
      }))
    }))
  })), bc.forEach((function (e) {
    e.addEventListener("click", (function () {
      Ac.forEach((function (e) {
        e.classList.remove("grayc-active")
      })), kc.forEach((function (e) {
        e.checked && (e.checked = !1)
      }))
    }))
  }))
}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGltZWxpbmUiLCJwYXVzZWQiLCJmdXJuaXR1cmVJdGVtcyIsImR1cmF0aW9uIiwib3BhY2l0eSIsInZpc2liaWxpdHkiLCJkaXNwbGF5IiwiZm9yRWFjaCIsImJ0bkZ1cm5pdHVyZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5DbG9zZUZ1cm5pdHVyZSIsImNsYXNzTGlzdCIsImFkZCIsInBsYXkiLCJidXRDbG9zZUZ1cm5pdHVyZSIsImJ1dEZ1cm5pdHVyZSIsInJlbW92ZSIsInRpbWVTY2FsZSIsInJldmVyc2UiLCJjb2xvckl0ZW1zIiwiZ3NhcCIsInRvIiwiYnRuQ29sb3IiLCJidG5DbG9zZUNvbG9yIiwiYnV0Q2xvc2VDb2xvciIsImJ1dENvbG9yIiwidGFic0J0biIsImV2ZW50IiwicGF0aCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGFiQ29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJidXQiLCJidXRBIiwicGF0aGJ1dCIsInRvcCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJzdGFydCIsImdldEVsZW1lbnRCeUlkIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJzdGVwIiwiaGFuZGxlQXR0cmlidXRlcyIsImJlaGF2aW91ciIsInJhbmdlIiwiZGVjaW1hbHMiLCJtaW4iLCJtYXgiLCJpbnB1dFByaWNlIiwiZmlyc3RQcmljZSIsIm5vVWlTbGlkZXIiLCJoYW5kbGUiLCJ2YWx1ZSIsIk1hdGgiLCJyb3VuZCIsInZhbHVlcyIsInNldFJhbmdlU2xpZGVyIiwiaSIsImFyciIsImVsIiwiaW5kZXgiLCJwcmljZURpdiIsImUiLCJyYW5nZVNsaWRlciIsInNldCIsIkFycmF5IiwiZnJvbSIsInNwIiwiaW5wdXQiLCJpbm5lckhUTUwiLCJkYXRhIiwiaW5wIiwiYnRuQ2xhc3NOYW1lIiwiZGlzYWJsZWRDbGFzc05hbWUiLCJldnQiLCJhY3RpdmVFbGVtZW50cyIsInRhcmdldCIsImNvbnRhaW5zIiwicGFyYW1zIiwibGVuZ3RoIiwib25EaXNhYmxlIiwiYm9keSIsImNsb3Nlc3QiLCJjdXJyZW50IiwiYnRuIiwiZHJvcCIsInRvZ2dsZSIsInNldE1lbnVMaXN0ZW5lciIsInNvZmFzVGFncyIsInNvZmFzQnRucyIsInNvZmFzRGVsZXRlQ2xhc3MiLCJmdXJuaXR1cmVTb2ZhcyIsInNvZmFzIiwiY2hlY2tlZCIsInNvZmFzSW5wdXQiLCJzb2Zhc1RhZyIsInNvZmFzQnRuIiwiYXJjaGFpckJ0biIsImZ1cm5pdHVyZUFybWNoYWlyIiwiYXJjaGFpcnMiLCJhcmNoYWlyVGFncyIsImFyY2hhaXJzVGFnIiwiYXJjaGFpckJ0bnMiLCJhcmNoYWlyc0lucHV0IiwiZnVybml0dXJlUG91ZnMiLCJwb3Vmc1RhZ3MiLCJwb3Vmc1RhZyIsImFybWNoYWlyRGVsZXRlQ2xhc3MiLCJwb3Vmc0J0bnMiLCJwb3Vmc0RlbGV0ZUNsYXNzIiwicG91ZnNCdG4iLCJwb3VmcyIsImJlZHNCdG4iLCJmdXJuaXR1cmVCZWRzIiwiYmVkc0J0bnMiLCJiZWRzVGFncyIsImJlZHNEZWxldGVDbGFzcyIsInBvdWZzSW5wdXQiLCJmdXJuaXR1cmVQZWRlc3RhbHMiLCJwZWRlc3RhbHNUYWdzIiwicGVkZXN0YWxzQnRuIiwicGVkZXN0YWxzIiwiYmVkcyIsInBlZGVzdGFsc1RhZyIsImJlZHNUYWciLCJwZWRlc3RhbHNEZWxldGVDbGFzcyIsInBlZGVzdGFsc0lucHV0IiwiYmVkc0lucHV0IiwiZnVybml0dXJlQ29tbW9kZSIsImNvbW1vZGUiLCJjb21tb2RlVGFncyIsImNvbW1vZGVCdG4iLCJjb21tb2RlQnRucyIsInBlZGVzdGFsc0J0bnMiLCJjb21tb2RlSW5wdXQiLCJmdXJuaXR1cmVDaGFpciIsImNoYWlyVGFnIiwiY2hhaXJCdG4iLCJjaGFpckJ0bnMiLCJjaGFpclRhZ3MiLCJjaGFpckRlbGV0ZUNsYXNzIiwiY29tbW9kZURlbGV0ZUNsYXNzIiwiZGVza1RhZ3MiLCJmdXJuaXR1cmVEZXNrIiwiZGVza0J0biIsImRlc2tCdG5zIiwiZGVza0RlbGV0ZUNsYXNzIiwiY2hhaXIiLCJkZXNrSW5wdXQiLCJmdXJuaXR1cmVBY2Nlc3NvcmllcyIsImFjY2Vzc29yaWVzVGFncyIsImFjY2Vzc29yaWVzQnRuIiwiYWNjZXNzb3JpZXMiLCJjaGFpcklucHV0IiwiYWNjZXNzb3JpZXNUYWciLCJhY2Nlc3Nvcmllc0RlbGV0ZUNsYXNzIiwiYWNjZXNzb3JpZXNJbnB1dCIsImRlc2tUYWciLCJzdHJhaWdodHNvZmFzQnRuIiwiZnVybml0dXJlU3RyYWlnaHRzb2ZhcyIsInN0cmFpZ2h0c29mYXMiLCJzdHJhaWdodHNvZmFzVGFncyIsInN0cmFpZ2h0c29mYXNJbnB1dCIsImZ1cm5pdHVyZUNvcm5lcnNvZmFzIiwiY29ybmVyc29mYXNUYWdzIiwiYWNjZXNzb3JpZXNCdG5zIiwiY29ybmVyc29mYXNUYWciLCJjb3JuZXJzb2Zhc0J0biIsImNvcm5lcnNvZmFzQnRucyIsImZ1cm5pdHVyZU1vZHVsYXJzb2ZhcyIsIm1vZHVsYXJzb2Zhc1RhZ3MiLCJtb2R1bGFyc29mYXNCdG4iLCJtb2R1bGFyc29mYXMiLCJzdHJhaWdodHNvZmFzQnRucyIsIm1vZHVsYXJzb2Zhc0J0bnMiLCJtb2R1bGFyc29mYXNEZWxldGVDbGFzcyIsImZ1cm5pdHVyZUxlYXRoZXJldHRlc29mYXMiLCJsZWF0aGVyZXR0ZXNvZmFzVGFncyIsImNvcm5lcnNvZmFzIiwibGVhdGhlcmV0dGVzb2ZhcyIsImxlYXRoZXJldHRlc29mYXNUYWciLCJsZWF0aGVyZXR0ZXNvZmFzQnRucyIsImxlYXRoZXJldHRlc29mYXNEZWxldGVDbGFzcyIsImNvcm5lcnNvZmFzRGVsZXRlQ2xhc3MiLCJsZWF0aGVyZXR0ZXNvZmFzSW5wdXQiLCJjb3JuZXJzb2Zhc0lucHV0IiwidXBob2xzdGVyZWRhcm1jaGFpcnNCdG4iLCJmdXJuaXR1cmVVcGhvbHN0ZXJlZGFybWNoYWlycyIsInVwaG9sc3RlcmVkYXJtY2hhaXJzIiwidXBob2xzdGVyZWRhcm1jaGFpcnNUYWciLCJtb2R1bGFyc29mYXNUYWciLCJ1cGhvbHN0ZXJlZGFybWNoYWlyc0lucHV0IiwibW9kdWxhcnNvZmFzSW5wdXQiLCJjaGFpcmJlZHNUYWdzIiwiY2hhaXJiZWRzVGFnIiwibGVhdGhlcmV0dGVzb2Zhc0J0biIsImNoYWlyYmVkc0J0biIsImNoYWlyYmVkc0J0bnMiLCJjaGFpcmJlZHNEZWxldGVDbGFzcyIsImNoYWlyYmVkc0lucHV0IiwiZnVybml0dXJlU2luZ2xlYmVkcyIsInNpbmdsZWJlZHNUYWdzIiwic2luZ2xlYmVkc0J0biIsInVwaG9sc3RlcmVkYXJtY2hhaXJzVGFncyIsInNpbmdsZWJlZHNCdG5zIiwic2luZ2xlYmVkc0RlbGV0ZUNsYXNzIiwic2luZ2xlYmVkc0lucHV0IiwidXBob2xzdGVyZWRhcm1jaGFpcnNCdG5zIiwiZnVybml0dXJlRG91YmxlYmVkcyIsImRvdWJsZWJlZHNUYWdzIiwiZG91YmxlYmVkcyIsImRvdWJsZWJlZHNUYWciLCJkb3VibGViZWRzQnRucyIsImRvdWJsZWJlZHNEZWxldGVDbGFzcyIsImNoYWlyYmVkcyIsImRvdWJsZWJlZHNJbnB1dCIsIndvb2RlbmNoYWlyc1RhZ3MiLCJ3b29kZW5jaGFpcnNCdG4iLCJmdXJuaXR1cmVXb29kZW5jaGFpcnMiLCJ3b29kZW5jaGFpcnMiLCJ3b29kZW5jaGFpcnNUYWciLCJ3b29kZW5jaGFpcnNJbnB1dCIsInNpbmdsZWJlZHMiLCJzaW5nbGViZWRzVGFnIiwibWV0YWxjaGFpcnMiLCJtZXRhbGNoYWlyc1RhZ3MiLCJtZXRhbGNoYWlyc1RhZyIsIm1ldGFsY2hhaXJzQnRuIiwibWV0YWxjaGFpcnNCdG5zIiwibWV0YWxjaGFpcnNJbnB1dCIsImRvdWJsZWJlZHNCdG4iLCJmdXJuaXR1cmVBbGFybWNsb2NrcyIsImFsYXJtY2xvY2tzVGFncyIsImFsYXJtY2xvY2tzQnRuIiwiYWxhcm1jbG9ja3NCdG5zIiwiYWxhcm1jbG9ja3NEZWxldGVDbGFzcyIsImZ1cm5pdHVyZVNjdWxwdHVyZXMiLCJzY3VscHR1cmVzIiwic2N1bHB0dXJlc1RhZ3MiLCJzY3VscHR1cmVzVGFnIiwic2N1bHB0dXJlc0J0biIsInNjdWxwdHVyZXNCdG5zIiwic2N1bHB0dXJlc0RlbGV0ZUNsYXNzIiwic2N1bHB0dXJlc0lucHV0IiwicHJpY2VUYWdzIiwicHJpY2VCdG4iLCJpbnB1dFByYyIsInByaWNlVGFnIiwicHJpY2VCdG5zIiwibWV0YWxjaGFpcnNEZWxldGVDbGFzcyIsIm1vcmVkaXNjb3VudCIsIm1vcmVkaXNjb3VudEJ0biIsIm1vcmVkaXNjb3VudEJ0bnMiLCJtb3JlZGlzY291bnRUYWdzIiwibW9yZWRpc2NvdW50RGVsZXRlQ2xhc3MiLCJhbGFybWNsb2NrcyIsIm1vcmVkaXNjb3VudElucHV0IiwiYWxhcm1jbG9ja3NUYWciLCJsZXNzZGlzY291bnQiLCJsZXNzZGlzY291bnRUYWdzIiwibGVzc2Rpc2NvdW50QnRuIiwibGVzc2Rpc2NvdW50VGFnIiwiYWxhcm1jbG9ja3NJbnB1dCIsImxlc3NkaXNjb3VudERlbGV0ZUNsYXNzIiwibGVzc2Rpc2NvdW50SW5wdXQiLCJub2Rpc2NvdW50Iiwibm9kaXNjb3VudFRhZ3MiLCJub2Rpc2NvdW50VGFnIiwibm9kaXNjb3VudEJ0biIsIm5vZGlzY291bnRCdG5zIiwibm9kaXNjb3VudElucHV0IiwiY29sb3JCcm93biIsImJyb3duIiwiYnJvd25UYWdzIiwiYnJvd25UYWciLCJwcmljZURlbGV0ZUNsYXNzIiwiYnJvd25EZWxldGVDbGFzcyIsImJyb3duSW5wdXQiLCJtb3JlZGlzY291bnRUYWciLCJjb2xvckJsYWNrIiwiYmxhY2siLCJibGFja1RhZ3MiLCJibGFja1RhZyIsImJsYWNrSW5wdXQiLCJjb2xvckJlaWdlIiwiYmVpZ2VUYWdzIiwiYmVpZ2VUYWciLCJsZXNzZGlzY291bnRCdG5zIiwiYmVpZ2VCdG5zIiwiYmVpZ2VEZWxldGVDbGFzcyIsImdyYXlUYWdzIiwiY29sb3JHcmF5IiwiZ3JheUJ0biIsImdyYXlCdG5zIiwibm9kaXNjb3VudERlbGV0ZUNsYXNzIiwiZ3JheURlbGV0ZUNsYXNzIiwid2hpdGVUYWdzIiwid2hpdGVCdG4iLCJjb2xvcldoaXRlIiwid2hpdGVUYWciLCJ3aGl0ZURlbGV0ZUNsYXNzIiwiYnJvd25CdG5zIiwibmF2eSIsIm5hdnlUYWdzIiwibmF2eVRhZyIsIm5hdnlCdG4iLCJuYXZ5QnRucyIsImJsYWNrQnRuIiwibmF2eUlucHV0IiwiYmxhY2tEZWxldGVDbGFzcyIsImNvbG9yT3JhbmdlIiwib3JhbmdlVGFncyIsImJlaWdlQnRuIiwib3JhbmdlQnRucyIsIm9yYW5nZURlbGV0ZUNsYXNzIiwiY29sb3JZZWxsb3ciLCJ5ZWxsb3dCdG4iLCJiZWlnZUlucHV0IiwieWVsbG93QnRucyIsInllbGxvd1RhZ3MiLCJ5ZWxsb3dEZWxldGVDbGFzcyIsImdyYXkiLCJ5ZWxsb3dJbnB1dCIsImdyYXlUYWciLCJjb2xvckdyZWVuIiwiZ3JlZW5UYWdzIiwiZ3JlZW5CdG4iLCJncmVlbiIsImdyYXlJbnB1dCIsImdyZWVuVGFnIiwiZ3JlZW5JbnB1dCIsIndoaXRlIiwicmVkIiwid2hpdGVCdG5zIiwicmVkVGFncyIsInJlZFRhZyIsIndoaXRlSW5wdXQiLCJyZWRCdG5zIiwicmVkSW5wdXQiLCJjb2xvck5hdnkiLCJjb2xvclB1cnBsZSIsInB1cnBsZVRhZ3MiLCJwdXJwbGVCdG4iLCJuYXZ5RGVsZXRlQ2xhc3MiLCJwdXJwbGVCdG5zIiwicHVycGxlRGVsZXRlQ2xhc3MiLCJjb2xvclBpbmsiLCJwaW5rVGFncyIsInBpbmsiLCJwaW5rVGFnIiwicGlua0J0bnMiLCJwaW5rRGVsZXRlQ2xhc3MiLCJwaW5rSW5wdXQiLCJvcmFuZ2VJbnB1dCIsImJsdWVCdG4iLCJjb2xvckJsdWUiLCJibHVlIiwiYmx1ZVRhZyIsInllbGxvdyIsInllbGxvd1RhZyIsImJsdWVJbnB1dCIsImxpZ2h0Z3JlZW5UYWdzIiwibGlnaHRncmVlblRhZyIsImxpZ2h0Z3JlZW5CdG4iLCJsaWdodGdyZWVuQnRucyIsImxpZ2h0Z3JlZW5JbnB1dCIsImdyZWVuQnRucyIsImdyZWVuRGVsZXRlQ2xhc3MiLCJjb2xvckFxdWFtYXJpbmUiLCJhcXVhbWFyaW5lVGFncyIsImFxdWFtYXJpbmVCdG4iLCJjb2xvclJlZCIsImFxdWFtYXJpbmVCdG5zIiwiYXF1YW1hcmluZURlbGV0ZUNsYXNzIiwicmVkQnRuIiwiY29sb3JHcmF5YyIsImdyYXljVGFncyIsImdyYXljIiwiZ3JheWNCdG5zIiwiZ3JheWNEZWxldGVDbGFzcyIsInB1cnBsZSIsImdyYXljZUlucHV0IiwicHVycGxlVGFnIiwicHVycGxlSW5wdXQiLCJwaW5rQnRuIiwiYmx1ZVRhZ3MiLCJibHVlQnRucyIsImJsdWVEZWxldGVDbGFzcyIsImNvbG9yTGlnaHRncmVlbiIsImxpZ2h0Z3JlZW4iLCJsaWdodGdyZWVuRGVsZXRlQ2xhc3MiLCJhcXVhbWFyaW5lIiwiYXF1YW1hcmluZVRhZyIsImFxdWFtYXJpbmVJbnB1dCIsImdyYXljQnRuIiwiZ3JheWNUYWciXSwibWFwcGluZ3MiOiJhQUFBQSxTQUFTQyxpQkFBaUIsb0JBQW9CLFdBQTlDRCxJQUFBQSxFQUFTQyxLQUFpQkMsU0FBQSxDQUFBQyxRQUExQixJQUVBQyxFQUFxQ0QsR0FBQUEsb0JBQVEsQ0FBQUUsU0FBQSxHQUFBQyxRQUFBLEVBQUFDLFdBQUEsVUFBQUMsUUFBQSxVQUU3Q0osU0FBQUEsaUJBQ00sa0JBQXFCSyxTQUFBLFNBQUFDLEdBQUNMLEVBQURKLGlCQUFBLFNBQUEsV0FBZUssU0FBZkssaUJBQUEsd0JBQUFGLFNBQUEsU0FBQUcsR0FBMkJMLEVBQTNCTSxVQUFBQyxJQUFBLFVBRDNCSixFQUFBRyxVQUFBQyxJQUFBLE9BR0VkLEVBQVNXLFVBQWlCLEdBQUFJLGFBSXJCZixTQUZEVyxpQkFBQSx3QkFBQUYsU0FBQSxTQUFBTyxHQUdFTixFQUFhRyxpQkFBYyxTQUEzQixXQUNBVCxTQUFBQSxpQkFBQSxrQkFBQUssU0FBQSxTQUFBUSxHQUxKQSxFQUFBSixVQUFBSyxPQUFBLFVBU0psQixFQUFTVyxVQUFpQk8sT0FBQSxPQUN4QkYsRUFBQUEs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VyxHQUFnQjNXLFNBQVEsU0FBU29ZLEdBQzFCQSxFQUFnQjVTLFVBQ25CNFMsRUFBZ0I1UyxTQUFVLFlBTWxDLElBQU0wUixHQUFhM1gsU0FBU1csaUJBQWlCLGlCQUN2Q2lYLEdBQVk1WCxTQUFTVyxpQkFBaUIsZ0JBQ3RDbVksR0FBVzlZLFNBQVNXLGlCQUFpQixjQUUzQ2dYLEdBQVdsWCxTQUFRLFNBQVNvWCxHQUMxQkEsRUFBTTVYLGlCQUFpQixVQUFVLFdBQy9CMlgsR0FBVW5YLFNBQVEsU0FBU3NZLEdBQ3pCQSxFQUFTbFksVUFBVTZFLE9BQU8seUJBS2hDb1QsR0FBU3JZLFNBQVEsU0FBU3FYLEdBQ3hCQSxFQUFVN1gsaUJBQWlCLFNBQVMsV0FDbEMyWCxHQUFVblgsU0FBUSxTQUFTc1gsR0FDekJBLEVBQWlCbFgsVUFBVUssT0FBTyxtQkFFcEN5VyxHQUFXbFgsU0FBUSxTQUFTd1gsR0FDckJBLEVBQVloUyxVQUNmZ1MsRUFBWWhTLFNBQVUiLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gIC8vIENhdGFsb2cgYnRuXHJcbmxldCBmdXJuaXR1cmVJdGVtcyA9IGdzYXAudGltZWxpbmUoeyBwYXVzZWQ6IHRydWUgfSlcclxuXHJcbmZ1cm5pdHVyZUl0ZW1zXHJcbiAgLnRvKFwiLmZ1cm5pdHVyZS1oaWRkZW5cIiwge2R1cmF0aW9uOiAuMywgb3BhY2l0eTogMSwgdmlzaWJpbGl0eTogXCJ2aXNpYmxlXCIsIGRpc3BsYXk6IFwiYmxvY2tcIn0pXHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWZ1cm5pdHVyZVwiKS5mb3JFYWNoKGZ1bmN0aW9uKGJ0bkZ1cm5pdHVyZSkge1xyXG4gICAgYnRuRnVybml0dXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tY2xvc2UtZnVybml0dXJlXCIpLmZvckVhY2goZnVuY3Rpb24oYnRuQ2xvc2VGdXJuaXR1cmUpIHtcclxuICAgICAgICBidG5DbG9zZUZ1cm5pdHVyZS5jbGFzc0xpc3QuYWRkKFwidmlzXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgICAgYnRuRnVybml0dXJlLmNsYXNzTGlzdC5hZGQoXCJoaWRcIilcclxuICAgICAgICBmdXJuaXR1cmVJdGVtcy50aW1lU2NhbGUoMSkucGxheSgpXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1jbG9zZS1mdXJuaXR1cmVcIikuZm9yRWFjaChmdW5jdGlvbihidXRDbG9zZUZ1cm5pdHVyZSkge1xyXG4gIGJ1dENsb3NlRnVybml0dXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWZ1cm5pdHVyZVwiKS5mb3JFYWNoKGZ1bmN0aW9uKGJ1dEZ1cm5pdHVyZSkge1xyXG4gICAgICBidXRGdXJuaXR1cmUuY2xhc3NMaXN0LnJlbW92ZShcImhpZFwiKVxyXG4gICAgfSlcclxuICAgIGJ1dENsb3NlRnVybml0dXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNcIilcclxuICAgIGZ1cm5pdHVyZUl0ZW1zLnRpbWVTY2FsZSgyKS5yZXZlcnNlKClcclxuICB9KVxyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRhbG9nX19idG5mdXJuaXR1cmVcIikuZm9yRWFjaChmdW5jdGlvbihidG5GdXJuaXR1cmUpIHtcclxuICBidG5GdXJuaXR1cmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRhbG9nX19jbG9zZWZ1cm5pdHVyZVwiKS5mb3JFYWNoKGZ1bmN0aW9uKGJ0bkNsb3NlRnVybml0dXJlKSB7XHJcbiAgICAgIGJ0bkNsb3NlRnVybml0dXJlLmNsYXNzTGlzdC5hZGQoXCJ2aXNcIilcclxuICAgIH0pXHJcbiAgICAgIGJ0bkZ1cm5pdHVyZS5jbGFzc0xpc3QuYWRkKFwiaGlkXCIpXHJcbiAgICAgIGZ1cm5pdHVyZUl0ZW1zLnRpbWVTY2FsZSgxKS5wbGF5KClcclxuICB9KVxyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRhbG9nX19jbG9zZWZ1cm5pdHVyZVwiKS5mb3JFYWNoKGZ1bmN0aW9uKGJ1dENsb3NlRnVybml0dXJlKSB7XHJcbmJ1dENsb3NlRnVybml0dXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGFsb2dfX2J0bmZ1cm5pdHVyZVwiKS5mb3JFYWNoKGZ1bmN0aW9uKGJ1dEZ1cm5pdHVyZSkge1xyXG4gICAgYnV0RnVybml0dXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRcIilcclxuICB9KVxyXG4gIGJ1dENsb3NlRnVybml0dXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNcIilcclxuICBmdXJuaXR1cmVJdGVtcy50aW1lU2NhbGUoMikucmV2ZXJzZSgpXHJcbn0pXHJcbn0pXHJcblxyXG4vLyBDYXRhbG9nIGJ0blxyXG5cclxubGV0IGNvbG9ySXRlbXMgPSBnc2FwLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pXHJcblxyXG5jb2xvckl0ZW1zXHJcbiAgLnRvKFwiLmNvbG9yLWhpZGRlblwiLCB7ZHVyYXRpb246IC4zLCBvcGFjaXR5OiAxLCB2aXNpYmlsaXR5OiBcInZpc2libGVcIiwgZGlzcGxheTogXCJibG9ja1wifSlcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1idG5cIikuZm9yRWFjaChmdW5jdGlvbihidG5Db2xvcikge1xyXG4gICAgYnRuQ29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yLWNsb3NlLWJ0blwiKS5mb3JFYWNoKGZ1bmN0aW9uKGJ0bkNsb3NlQ29sb3IpIHtcclxuICAgICAgICBidG5DbG9zZUNvbG9yLmNsYXNzTGlzdC5hZGQoXCJ2aXNcIilcclxuICAgICAgfSlcclxuICAgICAgYnRuQ29sb3IuY2xhc3NMaXN0LmFkZChcImhpZFwiKVxyXG4gICAgICBjb2xvckl0ZW1zLnRpbWVTY2FsZSgxKS5wbGF5KClcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3ItY2xvc2UtYnRuXCIpLmZvckVhY2goZnVuY3Rpb24oYnV0Q2xvc2VDb2xvcikge1xyXG4gIGJ1dENsb3NlQ29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1idG5cIikuZm9yRWFjaChmdW5jdGlvbihidXRDb2xvcikge1xyXG4gICAgICBidXRDb2xvci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkXCIpXHJcbiAgICB9KVxyXG4gICAgYnV0Q2xvc2VDb2xvci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzXCIpXHJcbiAgICBjb2xvckl0ZW1zLnRpbWVTY2FsZSgyKS5yZXZlcnNlKClcclxuICB9KVxyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRhbG9nX19idG5jb2xvclwiKS5mb3JFYWNoKGZ1bmN0aW9uKGJ0bkNvbG9yKSB7XHJcbiAgYnRuQ29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRhbG9nX19jbG9zZWNvbG9yXCIpLmZvckVhY2goZnVuY3Rpb24oYnRuQ2xvc2VDb2xvcikge1xyXG4gICAgICBidG5DbG9zZUNvbG9yLmNsYXNzTGlzdC5hZGQoXCJ2aXNcIilcclxuICAgIH0pXHJcbiAgICBidG5Db2xvci5jbGFzc0xpc3QuYWRkKFwiaGlkXCIpXHJcbiAgICBjb2xvckl0ZW1zLnRpbWVTY2FsZSgxKS5wbGF5KClcclxuICB9KVxyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRhbG9nX19jbG9zZWNvbG9yXCIpLmZvckVhY2goZnVuY3Rpb24oYnV0Q2xvc2VDb2xvcikge1xyXG5idXRDbG9zZUNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGFsb2dfX2J0bmNvbG9yXCIpLmZvckVhY2goZnVuY3Rpb24oYnV0Q29sb3IpIHtcclxuICAgIGJ1dENvbG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRcIilcclxuICB9KVxyXG4gIGJ1dENsb3NlQ29sb3IuY2xhc3NMaXN0LnJlbW92ZShcInZpc1wiKVxyXG4gIGNvbG9ySXRlbXMudGltZVNjYWxlKDIpLnJldmVyc2UoKVxyXG59KVxyXG59KVxyXG5cclxuXHJcbi8vIENhdGFsb2cgXHJcbi8vIFRhYnMgXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRhbG9nLWJ1dFwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWJzQnRuKSB7XHJcbiAgICB0YWJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgY29uc3QgcGF0aCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXRoXHJcblxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGFsb2dfX3dyYXBwZXJcIikuZm9yRWFjaChmdW5jdGlvbiAodGFiQ29udGVudCkge1xyXG4gICAgICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImNhdGFsb2ctbGlzdC1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC5hZGQoXCJjYXRhbG9nLWxpc3QtYWN0aXZlXCIpXHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgLy8gVGFic1xyXG4gIC8vIFRhYnMgYnRuXHJcbiAgZnVuY3Rpb24gdG9wKCkge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiAyMTAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgfSk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGFsb2ctYnV0XCIpLmZvckVhY2goZnVuY3Rpb24gKGJ1dCkge1xyXG4gICAgYnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgY29uc3QgcGF0aGJ1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXRoYnV0XHJcblxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGFsb2ctYnV0XCIpLmZvckVhY2goZnVuY3Rpb24gKGJ1dEEpIHtcclxuICAgICAgICBidXRBLmNsYXNzTGlzdC5yZW1vdmUoXCJidXQtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldGJ1dD1cIiR7cGF0aGJ1dH1cIl1gKS5jbGFzc0xpc3QuYWRkKFwiYnV0LWFjdGl2ZVwiKVxyXG4gICAgICB0b3AoKVxyXG4gICAgfSlcclxuICB9KVxyXG4gIC8vIFRhYnMgYnRuXHJcbiAgLy8gUmFuZ2UgXHJcbiAgY29uc3QgcmFuZ2VTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmdlLXNsaWRlclwiKVxyXG5cclxuICBub1VpU2xpZGVyLmNyZWF0ZShyYW5nZVNsaWRlciwge1xyXG4gICAgc3RhcnQ6IFsyMDAwLCAxNTAwMDBdLFxyXG4gICAgY29ubmVjdDogdHJ1ZSxcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAxMDAsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgaGFuZGxlQXR0cmlidXRlczogW1xyXG4gICAgICB7ICdhcmlhLWxhYmVsJzogJ9GD0LzQtdC90YzRiNC40YLRjCDRhtC10L3RgycgfSxcclxuICAgICAgeyAnYXJpYS1sYWJlbCc6ICfQv9C+0LLRi9GB0LjRgtGMINGG0LXQvdGDJyB9LFxyXG4gICAgXSxcclxuICAgIGJlaGF2aW91cjogJ3RhcCcsXHJcbiAgICBkZWNpbWFsczogMCxcclxuICAgIHJhbmdlOiB7XHJcbiAgICAgICAgJ21pbic6IDAsXHJcbiAgICAgICAgJ21heCc6IDIyNTAwMCxcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBmaXJzdFByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdC1wcmljZVwiKTtcclxuICBjb25zdCBzZWNvbmRQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vjb25kLXByaWNlXCIpO1xyXG4gIGNvbnN0IGlucHV0UHJpY2UgPSBbZmlyc3RQcmljZSwgc2Vjb25kUHJpY2VdO1xyXG5cclxuICByYW5nZVNsaWRlci5ub1VpU2xpZGVyLm9uKFwidXBkYXRlXCIsIGZ1bmN0aW9uKHZhbHVlcyxoYW5kbGUpIHtcclxuICAgIGlucHV0UHJpY2VbaGFuZGxlXS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzW2hhbmRsZV0pXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmNcIikuaW5uZXJIVE1MID0gXCLQlNC+IFwiICsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmQtcHJpY2VcIikudmFsdWVcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaWNlLXdyYXBcIikuY2xhc3NMaXN0LmFkZChcInByaWNlLWFjdGl2ZVwiKVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHNldFJhbmdlU2xpZGVyID0gKGksdmFsdWUpID0+IHtcclxuICAgIGxldCBhcnIgPSBbbnVsbCwgbnVsbF1cclxuICAgIGFycltpXSA9IHZhbHVlO1xyXG5cclxuICAgIHJhbmdlU2xpZGVyLm5vVWlTbGlkZXIuc2V0KGFycilcclxuICB9XHJcblxyXG4gIGlucHV0UHJpY2UuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgIHNldFJhbmdlU2xpZGVyKGluZGV4LCBlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgLy8gUmFuZ2VcclxuICAvLyBOdW1iZXIgaW5wdXRcclxuICBjb25zdCBwcmljZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0YWxvZ19fcHJjXCIpXHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2Vjb25kLXByaWNlXCIpLmZvckVhY2goZnVuY3Rpb24oc3ApIHtcclxuICAgIHNwLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IGRhdGEgPSBzcC52YWx1ZTtcclxuXHJcbiAgICAgIHByaWNlRGl2LmlubmVySFRNTCA9IFwi0JTQviBcIiArIGRhdGE7XHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGlucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9bnVtYmVyXScpO1xyXG4gIEFycmF5LmZyb20oaW5wKS5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgY29uc3QgbWluID0gK2lucHV0Lm1pbjtcclxuICAgICAgY29uc3QgbWF4ID0gK2lucHV0Lm1heDtcclxuICBcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgIGlmICh2YWx1ZSA+IG1heCkgeyBcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBtYXggfVxyXG4gICAgICAgICAgZWxzZSBpZiAodmFsdWUgPCBtaW4pIHsgXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gbWluIFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH0pO1xyXG4gIC8vTnVtYmVyIGlucHV0XHJcbiAgLy8gRmlsdGVyXHJcbiAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgYnRuQ2xhc3NOYW1lOiBcImRyb3BmaWx0ZXJfX2J0blwiLFxyXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBcImlzLWFjdGl2ZVwiLFxyXG4gICAgZGlzYWJsZWRDbGFzc05hbWU6IFwiaXMtZGlzYWJsZWRcIlxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBvbkRpc2FibGUoZXZ0KSB7XHJcbiAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMocGFyYW1zLmRpc2FibGVkQ2xhc3NOYW1lKSkge1xyXG4gICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUocGFyYW1zLmRpc2FibGVkQ2xhc3NOYW1lLCBwYXJhbXMuYWN0aXZlQ2xhc3NOYW1lKTtcclxuICAgICAgZXZ0LnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIG9uRGlzYWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIHNldE1lbnVMaXN0ZW5lcigpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuICAgICAgY29uc3QgYWN0aXZlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtwYXJhbXMuYWN0aXZlQ2xhc3NOYW1lfWApO1xyXG4gIFxyXG4gICAgICBpZiAoYWN0aXZlRWxlbWVudHMubGVuZ3RoICYmICFldnQudGFyZ2V0LmNsb3Nlc3QoYC4ke3BhcmFtcy5hY3RpdmVDbGFzc05hbWV9YCkpIHtcclxuICAgICAgICBhY3RpdmVFbGVtZW50cy5mb3JFYWNoKChjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMocGFyYW1zLmJ0bkNsYXNzTmFtZSkpIHtcclxuICAgICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKHBhcmFtcy5hY3RpdmVDbGFzc05hbWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QuYWRkKHBhcmFtcy5kaXNhYmxlZENsYXNzTmFtZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaWYgKGV2dC50YXJnZXQuY2xvc2VzdChgLiR7cGFyYW1zLmJ0bkNsYXNzTmFtZX1gKSkge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IGV2dC50YXJnZXQuY2xvc2VzdChgLiR7cGFyYW1zLmJ0bkNsYXNzTmFtZX1gKTtcclxuICAgICAgICBjb25zdCBwYXRoID0gYnRuLmRhdGFzZXQucGF0aDtcclxuICAgICAgICBjb25zdCBkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApO1xyXG4gIFxyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKHBhcmFtcy5hY3RpdmVDbGFzc05hbWUpO1xyXG4gIFxyXG4gICAgICAgIGlmICghZHJvcC5jbGFzc0xpc3QuY29udGFpbnMocGFyYW1zLmFjdGl2ZUNsYXNzTmFtZSkpIHtcclxuICAgICAgICAgIGRyb3AuY2xhc3NMaXN0LmFkZChwYXJhbXMuYWN0aXZlQ2xhc3NOYW1lKTtcclxuICAgICAgICAgIGRyb3AuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBvbkRpc2FibGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkcm9wLmNsYXNzTGlzdC5hZGQocGFyYW1zLmRpc2FibGVkQ2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzZXRNZW51TGlzdGVuZXIoKTtcclxuICAvLyBGaWx0ZXJcclxuICAvLyBJbnB1dHNcclxuXHJcbiAgY29uc3QgZnVybml0dXJlU29mYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZV9fc29mYXNcIik7XHJcbiAgY29uc3Qgc29mYXNUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVzLXNvZmFzXCIpO1xyXG4gIGNvbnN0IHNvZmFzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zb2Zhcy1idG5cIik7XHJcblxyXG4gIGZ1cm5pdHVyZVNvZmFzLmZvckVhY2goZnVuY3Rpb24oc29mYXMpIHtcclxuICAgIHNvZmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNvZmFzVGFncy5mb3JFYWNoKGZ1bmN0aW9uKHNvZmFzVGFnKSB7XHJcbiAgICAgICAgc29mYXNUYWcuY2xhc3NMaXN0LnRvZ2dsZShcInNvZmFzLWFjdGl2ZVwiKVxyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBzb2Zhc0J0bi5mb3JFYWNoKGZ1bmN0aW9uKHNvZmFzQnRucykge1xyXG4gICAgc29mYXNCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgc29mYXNUYWdzLmZvckVhY2goZnVuY3Rpb24oc29mYXNEZWxldGVDbGFzcykge1xyXG4gICAgICAgIHNvZmFzRGVsZXRlQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcInNvZmFzLWFjdGl2ZVwiKVxyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgICBmdXJuaXR1cmVTb2Zhcy5mb3JFYWNoKGZ1bmN0aW9uKHNvZmFzSW5wdXQpIHtcclxuICAgICAgICBpZiAoIHNvZmFzSW5wdXQuY2hlY2tlZCApIHtcclxuICAgICAgICAgIHNvZmFzSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZnVybml0dXJlQXJtY2hhaXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZV9fYXJtY2hhaXJcIik7XHJcbiAgY29uc3QgYXJjaGFpclRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZXMtYXJtY2hhaXJcIik7XHJcbiAgY29uc3QgYXJjaGFpckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXJjaGFpci1idG5cIik7XHJcblxyXG4gIGZ1cm5pdHVyZUFybWNoYWlyLmZvckVhY2goZnVuY3Rpb24oYXJjaGFpcnMpIHtcclxuICAgIGFyY2hhaXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFyY2hhaXJUYWdzLmZvckVhY2goZnVuY3Rpb24oYXJjaGFpcnNUYWcpIHtcclxuICAgICAgICBhcmNoYWlyc1RhZy5jbGFzc0xpc3QudG9nZ2xlKFwiYXJjaGFpci1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgYXJjaGFpckJ0bi5mb3JFYWNoKGZ1bmN0aW9uKGFyY2hhaXJCdG5zKSB7XHJcbiAgICBhcmNoYWlyQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFyY2hhaXJUYWdzLmZvckVhY2goZnVuY3Rpb24oYXJtY2hhaXJEZWxldGVDbGFzcykge1xyXG4gICAgICAgIGFybWNoYWlyRGVsZXRlQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcImFyY2hhaXItYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGZ1cm5pdHVyZUFybWNoYWlyLmZvckVhY2goZnVuY3Rpb24oYXJjaGFpcnNJbnB1dCkge1xyXG4gICAgICAgIGlmICggYXJjaGFpcnNJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgYXJjaGFpcnNJbnB1dC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGZ1cm5pdHVyZVBvdWZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVfX3BvdWZzXCIpO1xyXG4gIGNvbnN0IHBvdWZzVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVybml0dXJlcy1wb3Vmc1wiKTtcclxuICBjb25zdCBwb3Vmc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG91ZnMtYnRuXCIpO1xyXG5cclxuICBmdXJuaXR1cmVQb3Vmcy5mb3JFYWNoKGZ1bmN0aW9uKHBvdWZzKSB7XHJcbiAgICBwb3Vmcy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBwb3Vmc1RhZ3MuZm9yRWFjaChmdW5jdGlvbihwb3Vmc1RhZykge1xyXG4gICAgICAgIHBvdWZzVGFnLmNsYXNzTGlzdC50b2dnbGUoXCJwb3Vmcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgcG91ZnNCdG4uZm9yRWFjaChmdW5jdGlvbihwb3Vmc0J0bnMpIHtcclxuICAgIHBvdWZzQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHBvdWZzVGFncy5mb3JFYWNoKGZ1bmN0aW9uKHBvdWZzRGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICBwb3Vmc0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3Vmcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgZnVybml0dXJlUG91ZnMuZm9yRWFjaChmdW5jdGlvbihwb3Vmc0lucHV0KSB7XHJcbiAgICAgICAgaWYgKCBwb3Vmc0lucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBwb3Vmc0lucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZnVybml0dXJlQmVkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVybml0dXJlX19iZWRzXCIpO1xyXG4gIGNvbnN0IGJlZHNUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVzLWJlZHNcIik7XHJcbiAgY29uc3QgYmVkc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmVkcy1idG5cIik7XHJcblxyXG4gIGZ1cm5pdHVyZUJlZHMuZm9yRWFjaChmdW5jdGlvbihiZWRzKSB7XHJcbiAgICBiZWRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJlZHNUYWdzLmZvckVhY2goZnVuY3Rpb24oYmVkc1RhZykge1xyXG4gICAgICAgIGJlZHNUYWcuY2xhc3NMaXN0LnRvZ2dsZShcImJlZHMtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGJlZHNCdG4uZm9yRWFjaChmdW5jdGlvbihiZWRzQnRucykge1xyXG4gICAgYmVkc0J0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBiZWRzVGFncy5mb3JFYWNoKGZ1bmN0aW9uKGJlZHNEZWxldGVDbGFzcykge1xyXG4gICAgICAgIGJlZHNEZWxldGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwiYmVkcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgZnVybml0dXJlQmVkcy5mb3JFYWNoKGZ1bmN0aW9uKGJlZHNJbnB1dCkge1xyXG4gICAgICAgIGlmICggYmVkc0lucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBiZWRzSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBmdXJuaXR1cmVQZWRlc3RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZV9fcGVkZXN0YWxzXCIpO1xyXG4gIGNvbnN0IHBlZGVzdGFsc1RhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZXMtcGVkZXN0YWxzXCIpO1xyXG4gIGNvbnN0IHBlZGVzdGFsc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGVkZXN0YWxzLWJ0blwiKTtcclxuXHJcbiAgZnVybml0dXJlUGVkZXN0YWxzLmZvckVhY2goZnVuY3Rpb24ocGVkZXN0YWxzKSB7XHJcbiAgICBwZWRlc3RhbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgcGVkZXN0YWxzVGFncy5mb3JFYWNoKGZ1bmN0aW9uKHBlZGVzdGFsc1RhZykge1xyXG4gICAgICAgIHBlZGVzdGFsc1RhZy5jbGFzc0xpc3QudG9nZ2xlKFwicGVkZXN0YWxzLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBwZWRlc3RhbHNCdG4uZm9yRWFjaChmdW5jdGlvbihwZWRlc3RhbHNCdG5zKSB7XHJcbiAgICBwZWRlc3RhbHNCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgcGVkZXN0YWxzVGFncy5mb3JFYWNoKGZ1bmN0aW9uKHBlZGVzdGFsc0RlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgcGVkZXN0YWxzRGVsZXRlQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcInBlZGVzdGFscy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgZnVybml0dXJlUGVkZXN0YWxzLmZvckVhY2goZnVuY3Rpb24ocGVkZXN0YWxzSW5wdXQpIHtcclxuICAgICAgICBpZiAoIHBlZGVzdGFsc0lucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBwZWRlc3RhbHNJbnB1dC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGZ1cm5pdHVyZUNvbW1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZV9fY29tbW9kZVwiKTtcclxuICBjb25zdCBjb21tb2RlVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVybml0dXJlcy1jb21tb2RlXCIpO1xyXG4gIGNvbnN0IGNvbW1vZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbW1vZGUtYnRuXCIpO1xyXG5cclxuICBmdXJuaXR1cmVDb21tb2RlLmZvckVhY2goZnVuY3Rpb24oY29tbW9kZSkge1xyXG4gICAgY29tbW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb21tb2RlVGFncy5mb3JFYWNoKGZ1bmN0aW9uKGNvbW1vZGVUYWcpIHtcclxuICAgICAgICBjb21tb2RlVGFnLmNsYXNzTGlzdC50b2dnbGUoXCJjb21tb2RlLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjb21tb2RlQnRuLmZvckVhY2goZnVuY3Rpb24oY29tbW9kZUJ0bnMpIHtcclxuICAgIGNvbW1vZGVCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgY29tbW9kZVRhZ3MuZm9yRWFjaChmdW5jdGlvbihjb21tb2RlRGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICBjb21tb2RlRGVsZXRlQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcImNvbW1vZGUtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGZ1cm5pdHVyZUNvbW1vZGUuZm9yRWFjaChmdW5jdGlvbihjb21tb2RlSW5wdXQpIHtcclxuICAgICAgICBpZiAoIGNvbW1vZGVJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgY29tbW9kZUlucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZnVybml0dXJlQ2hhaXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZV9fY2hhaXJcIik7XHJcbiAgY29uc3QgY2hhaXJUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVzLWNoYWlyc1wiKTtcclxuICBjb25zdCBjaGFpckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhaXJzLWJ0blwiKTtcclxuXHJcbiAgZnVybml0dXJlQ2hhaXIuZm9yRWFjaChmdW5jdGlvbihjaGFpcikge1xyXG4gICAgY2hhaXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgY2hhaXJUYWdzLmZvckVhY2goZnVuY3Rpb24oY2hhaXJUYWcpIHtcclxuICAgICAgICBjaGFpclRhZy5jbGFzc0xpc3QudG9nZ2xlKFwiY2hhaXJzLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjaGFpckJ0bi5mb3JFYWNoKGZ1bmN0aW9uKGNoYWlyQnRucykge1xyXG4gICAgY2hhaXJCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgY2hhaXJUYWdzLmZvckVhY2goZnVuY3Rpb24oY2hhaXJEZWxldGVDbGFzcykge1xyXG4gICAgICAgIGNoYWlyRGVsZXRlQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcImNoYWlycy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgZnVybml0dXJlQ2hhaXIuZm9yRWFjaChmdW5jdGlvbihjaGFpcklucHV0KSB7XHJcbiAgICAgICAgaWYgKCBjaGFpcklucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBjaGFpcklucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZnVybml0dXJlRGVzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVybml0dXJlX19kZXNrXCIpO1xyXG4gIGNvbnN0IGRlc2tUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVzLWRlc2tcIik7XHJcbiAgY29uc3QgZGVza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVzay1idG5cIik7XHJcblxyXG4gIGZ1cm5pdHVyZURlc2suZm9yRWFjaChmdW5jdGlvbihkZXNrKSB7XHJcbiAgICBkZXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRlc2tUYWdzLmZvckVhY2goZnVuY3Rpb24oZGVza1RhZykge1xyXG4gICAgICAgIGRlc2tUYWcuY2xhc3NMaXN0LnRvZ2dsZShcImNoYWlycy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgZGVza0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGRlc2tCdG5zKSB7XHJcbiAgICBkZXNrQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRlc2tUYWdzLmZvckVhY2goZnVuY3Rpb24oZGVza0RlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgZGVza0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJjaGFpcnMtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGZ1cm5pdHVyZURlc2suZm9yRWFjaChmdW5jdGlvbihkZXNrSW5wdXQpIHtcclxuICAgICAgICBpZiAoIGRlc2tJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgZGVza0lucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZnVybml0dXJlQWNjZXNzb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZV9fYWNjZXNzb3JpZXNcIik7XHJcbiAgY29uc3QgYWNjZXNzb3JpZXNUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVzLWFjY2Vzc29yaWVzXCIpO1xyXG4gIGNvbnN0IGFjY2Vzc29yaWVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2Nlc3Nvcmllcy1idG5cIik7XHJcblxyXG4gIGZ1cm5pdHVyZUFjY2Vzc29yaWVzLmZvckVhY2goZnVuY3Rpb24oYWNjZXNzb3JpZXMpIHtcclxuICAgIGFjY2Vzc29yaWVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFjY2Vzc29yaWVzVGFncy5mb3JFYWNoKGZ1bmN0aW9uKGFjY2Vzc29yaWVzVGFnKSB7XHJcbiAgICAgICAgYWNjZXNzb3JpZXNUYWcuY2xhc3NMaXN0LnRvZ2dsZShcImFjY2Vzc29yaWVzLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBhY2Nlc3Nvcmllc0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGFjY2Vzc29yaWVzQnRucykge1xyXG4gICAgYWNjZXNzb3JpZXNCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgYWNjZXNzb3JpZXNUYWdzLmZvckVhY2goZnVuY3Rpb24oYWNjZXNzb3JpZXNEZWxldGVDbGFzcykge1xyXG4gICAgICAgIGFjY2Vzc29yaWVzRGVsZXRlQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcImFjY2Vzc29yaWVzLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgICBmdXJuaXR1cmVBY2Nlc3Nvcmllcy5mb3JFYWNoKGZ1bmN0aW9uKGFjY2Vzc29yaWVzSW5wdXQpIHtcclxuICAgICAgICBpZiAoIGFjY2Vzc29yaWVzSW5wdXQuY2hlY2tlZCApIHtcclxuICAgICAgICAgIGFjY2Vzc29yaWVzSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBmdXJuaXR1cmVTdHJhaWdodHNvZmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVfX3N0cmFpZ2h0c29mYXNcIik7XHJcbiAgY29uc3Qgc3RyYWlnaHRzb2Zhc1RhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZXMtc3RyYWlnaHRzb2Zhc1wiKTtcclxuICBjb25zdCBzdHJhaWdodHNvZmFzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdHJhaWdodHNvZmFzLWJ0blwiKTtcclxuXHJcbiAgZnVybml0dXJlU3RyYWlnaHRzb2Zhcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmFpZ2h0c29mYXMpIHtcclxuICAgIHN0cmFpZ2h0c29mYXMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgc3RyYWlnaHRzb2Zhc1RhZ3MuZm9yRWFjaChmdW5jdGlvbihzdHJhaWdodHNvZmFzVGFnKSB7XHJcbiAgICAgICAgc3RyYWlnaHRzb2Zhc1RhZy5jbGFzc0xpc3QudG9nZ2xlKFwic3RyYWlnaHRzb2Zhcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgc3RyYWlnaHRzb2Zhc0J0bi5mb3JFYWNoKGZ1bmN0aW9uKHN0cmFpZ2h0c29mYXNCdG5zKSB7XHJcbiAgICBzdHJhaWdodHNvZmFzQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHN0cmFpZ2h0c29mYXNUYWdzLmZvckVhY2goZnVuY3Rpb24oc3RyYWlnaHRzb2Zhc0RlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgc3RyYWlnaHRzb2Zhc0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHJhaWdodHNvZmFzLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgICBmdXJuaXR1cmVTdHJhaWdodHNvZmFzLmZvckVhY2goZnVuY3Rpb24oc3RyYWlnaHRzb2Zhc0lucHV0KSB7XHJcbiAgICAgICAgaWYgKCBzdHJhaWdodHNvZmFzSW5wdXQuY2hlY2tlZCApIHtcclxuICAgICAgICAgIHN0cmFpZ2h0c29mYXNJbnB1dC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGZ1cm5pdHVyZUNvcm5lcnNvZmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVfX2Nvcm5lcnNvZmFzXCIpO1xyXG4gIGNvbnN0IGNvcm5lcnNvZmFzVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVybml0dXJlcy1jb3JuZXJzb2Zhc1wiKTtcclxuICBjb25zdCBjb3JuZXJzb2Zhc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29ybmVyc29mYXMtYnRuXCIpO1xyXG5cclxuICBmdXJuaXR1cmVDb3JuZXJzb2Zhcy5mb3JFYWNoKGZ1bmN0aW9uKGNvcm5lcnNvZmFzKSB7XHJcbiAgICBjb3JuZXJzb2Zhcy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb3JuZXJzb2Zhc1RhZ3MuZm9yRWFjaChmdW5jdGlvbihjb3JuZXJzb2Zhc1RhZykge1xyXG4gICAgICAgIGNvcm5lcnNvZmFzVGFnLmNsYXNzTGlzdC50b2dnbGUoXCJjb3JuZXJzb2Zhcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29ybmVyc29mYXNCdG4uZm9yRWFjaChmdW5jdGlvbihjb3JuZXJzb2Zhc0J0bnMpIHtcclxuICAgIGNvcm5lcnNvZmFzQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvcm5lcnNvZmFzVGFncy5mb3JFYWNoKGZ1bmN0aW9uKGNvcm5lcnNvZmFzRGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICBjb3JuZXJzb2Zhc0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJjb3JuZXJzb2Zhcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgZnVybml0dXJlQ29ybmVyc29mYXMuZm9yRWFjaChmdW5jdGlvbihjb3JuZXJzb2Zhc0lucHV0KSB7XHJcbiAgICAgICAgaWYgKCBjb3JuZXJzb2Zhc0lucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBjb3JuZXJzb2Zhc0lucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZnVybml0dXJlTW9kdWxhcnNvZmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVfX21vZHVsYXJzb2Zhc1wiKTtcclxuICBjb25zdCBtb2R1bGFyc29mYXNUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVzLW1vZHVsYXJzb2Zhc1wiKTtcclxuICBjb25zdCBtb2R1bGFyc29mYXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZHVsYXJzb2Zhcy1idG5cIik7XHJcblxyXG4gIGZ1cm5pdHVyZU1vZHVsYXJzb2Zhcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsYXJzb2Zhcykge1xyXG4gICAgbW9kdWxhcnNvZmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIG1vZHVsYXJzb2Zhc1RhZ3MuZm9yRWFjaChmdW5jdGlvbihtb2R1bGFyc29mYXNUYWcpIHtcclxuICAgICAgICBtb2R1bGFyc29mYXNUYWcuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZHVsYXJzb2Zhcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgbW9kdWxhcnNvZmFzQnRuLmZvckVhY2goZnVuY3Rpb24obW9kdWxhcnNvZmFzQnRucykge1xyXG4gICAgbW9kdWxhcnNvZmFzQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIG1vZHVsYXJzb2Zhc1RhZ3MuZm9yRWFjaChmdW5jdGlvbihtb2R1bGFyc29mYXNEZWxldGVDbGFzcykge1xyXG4gICAgICAgIG1vZHVsYXJzb2Zhc0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2R1bGFyc29mYXMtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGZ1cm5pdHVyZU1vZHVsYXJzb2Zhcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsYXJzb2Zhc0lucHV0KSB7XHJcbiAgICAgICAgaWYgKCBtb2R1bGFyc29mYXNJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgbW9kdWxhcnNvZmFzSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBmdXJuaXR1cmVMZWF0aGVyZXR0ZXNvZmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVfX2xlYXRoZXJldHRlc29mYXNcIik7XHJcbiAgY29uc3QgbGVhdGhlcmV0dGVzb2Zhc1RhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZXMtbGVhdGhlcmV0dGVzb2Zhc1wiKTtcclxuICBjb25zdCBsZWF0aGVyZXR0ZXNvZmFzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sZWF0aGVyZXR0ZXNvZmFzLWJ0blwiKTtcclxuXHJcbiAgZnVybml0dXJlTGVhdGhlcmV0dGVzb2Zhcy5mb3JFYWNoKGZ1bmN0aW9uKGxlYXRoZXJldHRlc29mYXMpIHtcclxuICAgIGxlYXRoZXJldHRlc29mYXMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgbGVhdGhlcmV0dGVzb2Zhc1RhZ3MuZm9yRWFjaChmdW5jdGlvbihsZWF0aGVyZXR0ZXNvZmFzVGFnKSB7XHJcbiAgICAgICAgbGVhdGhlcmV0dGVzb2Zhc1RhZy5jbGFzc0xpc3QudG9nZ2xlKFwibGVhdGhlcmV0dGVzb2Zhcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgbGVhdGhlcmV0dGVzb2Zhc0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGxlYXRoZXJldHRlc29mYXNCdG5zKSB7XHJcbiAgICBsZWF0aGVyZXR0ZXNvZmFzQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxlYXRoZXJldHRlc29mYXNUYWdzLmZvckVhY2goZnVuY3Rpb24obGVhdGhlcmV0dGVzb2Zhc0RlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgbGVhdGhlcmV0dGVzb2Zhc0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWF0aGVyZXR0ZXNvZmFzLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgICBmdXJuaXR1cmVMZWF0aGVyZXR0ZXNvZmFzLmZvckVhY2goZnVuY3Rpb24obGVhdGhlcmV0dGVzb2Zhc0lucHV0KSB7XHJcbiAgICAgICAgaWYgKCBsZWF0aGVyZXR0ZXNvZmFzSW5wdXQuY2hlY2tlZCApIHtcclxuICAgICAgICAgIGxlYXRoZXJldHRlc29mYXNJbnB1dC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGZ1cm5pdHVyZVVwaG9sc3RlcmVkYXJtY2hhaXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVfX3VwaG9sc3RlcmVkYXJtY2hhaXJzXCIpO1xyXG4gIGNvbnN0IHVwaG9sc3RlcmVkYXJtY2hhaXJzVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVybml0dXJlcy11cGhvbHN0ZXJlZGFybWNoYWlyc1wiKTtcclxuICBjb25zdCB1cGhvbHN0ZXJlZGFybWNoYWlyc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXBob2xzdGVyZWRhcm1jaGFpcnMtYnRuXCIpO1xyXG5cclxuICBmdXJuaXR1cmVVcGhvbHN0ZXJlZGFybWNoYWlycy5mb3JFYWNoKGZ1bmN0aW9uKHVwaG9sc3RlcmVkYXJtY2hhaXJzKSB7XHJcbiAgICB1cGhvbHN0ZXJlZGFybWNoYWlycy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB1cGhvbHN0ZXJlZGFybWNoYWlyc1RhZ3MuZm9yRWFjaChmdW5jdGlvbih1cGhvbHN0ZXJlZGFybWNoYWlyc1RhZykge1xyXG4gICAgICAgIHVwaG9sc3RlcmVkYXJtY2hhaXJzVGFnLmNsYXNzTGlzdC50b2dnbGUoXCJ1cGhvbHN0ZXJlZGFybWNoYWlycy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgdXBob2xzdGVyZWRhcm1jaGFpcnNCdG4uZm9yRWFjaChmdW5jdGlvbih1cGhvbHN0ZXJlZGFybWNoYWlyc0J0bnMpIHtcclxuICAgIHVwaG9sc3RlcmVkYXJtY2hhaXJzQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHVwaG9sc3RlcmVkYXJtY2hhaXJzVGFncy5mb3JFYWNoKGZ1bmN0aW9uKHVwaG9sc3RlcmVkYXJtY2hhaXJzRGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICB1cGhvbHN0ZXJlZGFybWNoYWlyc0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJ1cGhvbHN0ZXJlZGFybWNoYWlycy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgZnVybml0dXJlVXBob2xzdGVyZWRhcm1jaGFpcnMuZm9yRWFjaChmdW5jdGlvbih1cGhvbHN0ZXJlZGFybWNoYWlyc0lucHV0KSB7XHJcbiAgICAgICAgaWYgKCB1cGhvbHN0ZXJlZGFybWNoYWlyc0lucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICB1cGhvbHN0ZXJlZGFybWNoYWlyc0lucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZnVybml0dXJlQ2hhaXJiZWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVfX2NoYWlyYmVkc1wiKTtcclxuICBjb25zdCBjaGFpcmJlZHNUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVzLWNoYWlyYmVkc1wiKTtcclxuICBjb25zdCBjaGFpcmJlZHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYWlyYmVkcy1idG5cIik7XHJcblxyXG4gIGZ1cm5pdHVyZUNoYWlyYmVkcy5mb3JFYWNoKGZ1bmN0aW9uKGNoYWlyYmVkcykge1xyXG4gICAgY2hhaXJiZWRzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNoYWlyYmVkc1RhZ3MuZm9yRWFjaChmdW5jdGlvbihjaGFpcmJlZHNUYWcpIHtcclxuICAgICAgICBjaGFpcmJlZHNUYWcuY2xhc3NMaXN0LnRvZ2dsZShcImNoYWlyYmVkcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY2hhaXJiZWRzQnRuLmZvckVhY2goZnVuY3Rpb24oY2hhaXJiZWRzQnRucykge1xyXG4gICAgY2hhaXJiZWRzQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNoYWlyYmVkc1RhZ3MuZm9yRWFjaChmdW5jdGlvbihjaGFpcmJlZHNEZWxldGVDbGFzcykge1xyXG4gICAgICAgIGNoYWlyYmVkc0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJjaGFpcmJlZHMtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGZ1cm5pdHVyZUNoYWlyYmVkcy5mb3JFYWNoKGZ1bmN0aW9uKGNoYWlyYmVkc0lucHV0KSB7XHJcbiAgICAgICAgaWYgKCBjaGFpcmJlZHNJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgY2hhaXJiZWRzSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBmdXJuaXR1cmVTaW5nbGViZWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVfX3NpbmdsZWJlZHNcIik7XHJcbiAgY29uc3Qgc2luZ2xlYmVkc1RhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZXMtc2luZ2xlYmVkc1wiKTtcclxuICBjb25zdCBzaW5nbGViZWRzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaW5nbGViZWRzLWJ0blwiKTtcclxuXHJcbiAgZnVybml0dXJlU2luZ2xlYmVkcy5mb3JFYWNoKGZ1bmN0aW9uKHNpbmdsZWJlZHMpIHtcclxuICAgIHNpbmdsZWJlZHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgc2luZ2xlYmVkc1RhZ3MuZm9yRWFjaChmdW5jdGlvbihzaW5nbGViZWRzVGFnKSB7XHJcbiAgICAgICAgc2luZ2xlYmVkc1RhZy5jbGFzc0xpc3QudG9nZ2xlKFwic2luZ2xlYmVkcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgc2luZ2xlYmVkc0J0bi5mb3JFYWNoKGZ1bmN0aW9uKHNpbmdsZWJlZHNCdG5zKSB7XHJcbiAgICBzaW5nbGViZWRzQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNpbmdsZWJlZHNUYWdzLmZvckVhY2goZnVuY3Rpb24oc2luZ2xlYmVkc0RlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgc2luZ2xlYmVkc0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJzaW5nbGViZWRzLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgICBmdXJuaXR1cmVTaW5nbGViZWRzLmZvckVhY2goZnVuY3Rpb24oc2luZ2xlYmVkc0lucHV0KSB7XHJcbiAgICAgICAgaWYgKCBzaW5nbGViZWRzSW5wdXQuY2hlY2tlZCApIHtcclxuICAgICAgICAgIHNpbmdsZWJlZHNJbnB1dC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGZ1cm5pdHVyZURvdWJsZWJlZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZV9fZG91YmxlYmVkc1wiKTtcclxuICBjb25zdCBkb3VibGViZWRzVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVybml0dXJlcy1kb3VibGViZWRzXCIpO1xyXG4gIGNvbnN0IGRvdWJsZWJlZHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvdWJsZWJlZHMtYnRuXCIpO1xyXG5cclxuICBmdXJuaXR1cmVEb3VibGViZWRzLmZvckVhY2goZnVuY3Rpb24oZG91YmxlYmVkcykge1xyXG4gICAgZG91YmxlYmVkcy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBkb3VibGViZWRzVGFncy5mb3JFYWNoKGZ1bmN0aW9uKGRvdWJsZWJlZHNUYWcpIHtcclxuICAgICAgICBkb3VibGViZWRzVGFnLmNsYXNzTGlzdC50b2dnbGUoXCJkb3VibGViZWRzLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBkb3VibGViZWRzQnRuLmZvckVhY2goZnVuY3Rpb24oZG91YmxlYmVkc0J0bnMpIHtcclxuICAgIGRvdWJsZWJlZHNCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgZG91YmxlYmVkc1RhZ3MuZm9yRWFjaChmdW5jdGlvbihkb3VibGViZWRzRGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICBkb3VibGViZWRzRGVsZXRlQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcImRvdWJsZWJlZHMtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGZ1cm5pdHVyZURvdWJsZWJlZHMuZm9yRWFjaChmdW5jdGlvbihkb3VibGViZWRzSW5wdXQpIHtcclxuICAgICAgICBpZiAoIGRvdWJsZWJlZHNJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgZG91YmxlYmVkc0lucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZnVybml0dXJlV29vZGVuY2hhaXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVfX3dvb2RlbmNoYWlyc1wiKTtcclxuICBjb25zdCB3b29kZW5jaGFpcnNUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVzLXdvb2RlbmNoYWlyc1wiKTtcclxuICBjb25zdCB3b29kZW5jaGFpcnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvb2RlbmNoYWlycy1idG5cIik7XHJcblxyXG4gIGZ1cm5pdHVyZVdvb2RlbmNoYWlycy5mb3JFYWNoKGZ1bmN0aW9uKHdvb2RlbmNoYWlycykge1xyXG4gICAgd29vZGVuY2hhaXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHdvb2RlbmNoYWlyc1RhZ3MuZm9yRWFjaChmdW5jdGlvbih3b29kZW5jaGFpcnNUYWcpIHtcclxuICAgICAgICB3b29kZW5jaGFpcnNUYWcuY2xhc3NMaXN0LnRvZ2dsZShcIndvb2RlbmNoYWlycy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgd29vZGVuY2hhaXJzQnRuLmZvckVhY2goZnVuY3Rpb24od29vZGVuY2hhaXJzQnRucykge1xyXG4gICAgd29vZGVuY2hhaXJzQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHdvb2RlbmNoYWlyc1RhZ3MuZm9yRWFjaChmdW5jdGlvbih3b29kZW5jaGFpcnNEZWxldGVDbGFzcykge1xyXG4gICAgICAgIHdvb2RlbmNoYWlyc0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJ3b29kZW5jaGFpcnMtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGZ1cm5pdHVyZVdvb2RlbmNoYWlycy5mb3JFYWNoKGZ1bmN0aW9uKHdvb2RlbmNoYWlyc0lucHV0KSB7XHJcbiAgICAgICAgaWYgKCB3b29kZW5jaGFpcnNJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgd29vZGVuY2hhaXJzSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBmdXJuaXR1cmVNZXRhbGNoYWlycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVybml0dXJlX19tZXRhbGNoYWlyc1wiKTtcclxuICBjb25zdCBtZXRhbGNoYWlyc1RhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZXMtbWV0YWxjaGFpcnNcIik7XHJcbiAgY29uc3QgbWV0YWxjaGFpcnNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1ldGFsY2hhaXJzLWJ0blwiKTtcclxuXHJcbiAgZnVybml0dXJlTWV0YWxjaGFpcnMuZm9yRWFjaChmdW5jdGlvbihtZXRhbGNoYWlycykge1xyXG4gICAgbWV0YWxjaGFpcnMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgbWV0YWxjaGFpcnNUYWdzLmZvckVhY2goZnVuY3Rpb24obWV0YWxjaGFpcnNUYWcpIHtcclxuICAgICAgICBtZXRhbGNoYWlyc1RhZy5jbGFzc0xpc3QudG9nZ2xlKFwibWV0YWxjaGFpcnMtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIG1ldGFsY2hhaXJzQnRuLmZvckVhY2goZnVuY3Rpb24obWV0YWxjaGFpcnNCdG5zKSB7XHJcbiAgICBtZXRhbGNoYWlyc0J0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBtZXRhbGNoYWlyc1RhZ3MuZm9yRWFjaChmdW5jdGlvbihtZXRhbGNoYWlyc0RlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgbWV0YWxjaGFpcnNEZWxldGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwibWV0YWxjaGFpcnMtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGZ1cm5pdHVyZU1ldGFsY2hhaXJzLmZvckVhY2goZnVuY3Rpb24obWV0YWxjaGFpcnNJbnB1dCkge1xyXG4gICAgICAgIGlmICggbWV0YWxjaGFpcnNJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgbWV0YWxjaGFpcnNJbnB1dC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGZ1cm5pdHVyZUFsYXJtY2xvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVfX2FsYXJtY2xvY2tzXCIpO1xyXG4gIGNvbnN0IGFsYXJtY2xvY2tzVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVybml0dXJlcy1hbGFybWNsb2Nrc1wiKTtcclxuICBjb25zdCBhbGFybWNsb2Nrc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWxhcm1jbG9ja3MtYnRuXCIpO1xyXG5cclxuICBmdXJuaXR1cmVBbGFybWNsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uKGFsYXJtY2xvY2tzKSB7XHJcbiAgICBhbGFybWNsb2Nrcy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBhbGFybWNsb2Nrc1RhZ3MuZm9yRWFjaChmdW5jdGlvbihhbGFybWNsb2Nrc1RhZykge1xyXG4gICAgICAgIGFsYXJtY2xvY2tzVGFnLmNsYXNzTGlzdC50b2dnbGUoXCJhbGFybWNsb2Nrcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgYWxhcm1jbG9ja3NCdG4uZm9yRWFjaChmdW5jdGlvbihhbGFybWNsb2Nrc0J0bnMpIHtcclxuICAgIGFsYXJtY2xvY2tzQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFsYXJtY2xvY2tzVGFncy5mb3JFYWNoKGZ1bmN0aW9uKGFsYXJtY2xvY2tzRGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICBhbGFybWNsb2Nrc0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJhbGFybWNsb2Nrcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgZnVybml0dXJlQWxhcm1jbG9ja3MuZm9yRWFjaChmdW5jdGlvbihhbGFybWNsb2Nrc0lucHV0KSB7XHJcbiAgICAgICAgaWYgKCBhbGFybWNsb2Nrc0lucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBhbGFybWNsb2Nrc0lucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgZnVybml0dXJlU2N1bHB0dXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVybml0dXJlX19zY3VscHR1cmVzXCIpO1xyXG4gIGNvbnN0IHNjdWxwdHVyZXNUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mdXJuaXR1cmVzLXNjdWxwdHVyZXNcIik7XHJcbiAgY29uc3Qgc2N1bHB0dXJlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2N1bHB0dXJlcy1idG5cIik7XHJcblxyXG4gIGZ1cm5pdHVyZVNjdWxwdHVyZXMuZm9yRWFjaChmdW5jdGlvbihzY3VscHR1cmVzKSB7XHJcbiAgICBzY3VscHR1cmVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNjdWxwdHVyZXNUYWdzLmZvckVhY2goZnVuY3Rpb24oc2N1bHB0dXJlc1RhZykge1xyXG4gICAgICAgIHNjdWxwdHVyZXNUYWcuY2xhc3NMaXN0LnRvZ2dsZShcInNjdWxwdHVyZXMtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIHNjdWxwdHVyZXNCdG4uZm9yRWFjaChmdW5jdGlvbihzY3VscHR1cmVzQnRucykge1xyXG4gICAgc2N1bHB0dXJlc0J0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBzY3VscHR1cmVzVGFncy5mb3JFYWNoKGZ1bmN0aW9uKHNjdWxwdHVyZXNEZWxldGVDbGFzcykge1xyXG4gICAgICAgIHNjdWxwdHVyZXNEZWxldGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwic2N1bHB0dXJlcy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgZnVybml0dXJlU2N1bHB0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uKHNjdWxwdHVyZXNJbnB1dCkge1xyXG4gICAgICAgIGlmICggc2N1bHB0dXJlc0lucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBzY3VscHR1cmVzSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBpbnB1dFByYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vjb25kLXByaWNlXCIpO1xyXG4gIGNvbnN0IHByaWNlVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFnLXByaWNlXCIpO1xyXG4gIGNvbnN0IHByaWNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmMtYnRuXCIpO1xyXG5cclxuICBpbnB1dFByYy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBwcmljZVRhZ3MuZm9yRWFjaChmdW5jdGlvbihwcmljZVRhZykge1xyXG4gICAgICAgIHByaWNlVGFnLmNsYXNzTGlzdC5hZGQoXCJwcmljZS1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICB9KVxyXG5cclxuICBwcmljZUJ0bi5mb3JFYWNoKGZ1bmN0aW9uKHByaWNlQnRucykge1xyXG4gICAgcHJpY2VCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgcHJpY2VUYWdzLmZvckVhY2goZnVuY3Rpb24ocHJpY2VEZWxldGVDbGFzcykge1xyXG4gICAgICAgIHByaWNlRGVsZXRlQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcInByaWNlLWFjdGl2ZVwiKVxyXG4gICAgICAgIGlucHV0UHJjLnZhbHVlID0gXCJcIlxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBtb3JlZGlzY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGFsb2dfX21vcmVcIik7XHJcbiAgY29uc3QgbW9yZWRpc2NvdW50VGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9yZWRpc2NvdW50XCIpO1xyXG4gIGNvbnN0IG1vcmVkaXNjb3VudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9yZWRpc2NvdW50LWJ0blwiKTtcclxuXHJcbiAgbW9yZWRpc2NvdW50LmZvckVhY2goZnVuY3Rpb24obW9yZWRpc2NvdW50KSB7XHJcbiAgICBtb3JlZGlzY291bnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgbW9yZWRpc2NvdW50VGFncy5mb3JFYWNoKGZ1bmN0aW9uKG1vcmVkaXNjb3VudFRhZykge1xyXG4gICAgICAgIG1vcmVkaXNjb3VudFRhZy5jbGFzc0xpc3QudG9nZ2xlKFwibW9yZWRpc2NvdW50LWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBtb3JlZGlzY291bnRCdG4uZm9yRWFjaChmdW5jdGlvbihtb3JlZGlzY291bnRCdG5zKSB7XHJcbiAgICBtb3JlZGlzY291bnRCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgbW9yZWRpc2NvdW50VGFncy5mb3JFYWNoKGZ1bmN0aW9uKG1vcmVkaXNjb3VudERlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgbW9yZWRpc2NvdW50RGVsZXRlQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcIm1vcmVkaXNjb3VudC1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgbW9yZWRpc2NvdW50LmZvckVhY2goZnVuY3Rpb24obW9yZWRpc2NvdW50SW5wdXQpIHtcclxuICAgICAgICBpZiAoIG1vcmVkaXNjb3VudElucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBtb3JlZGlzY291bnRJbnB1dC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGxlc3NkaXNjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0YWxvZ19fbGVzc1wiKTtcclxuICBjb25zdCBsZXNzZGlzY291bnRUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sZXNzZGlzY291bnRcIik7XHJcbiAgY29uc3QgbGVzc2Rpc2NvdW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5sZXNzZGlzY291bnQtYnRuXCIpO1xyXG5cclxuICBsZXNzZGlzY291bnQuZm9yRWFjaChmdW5jdGlvbihsZXNzZGlzY291bnQpIHtcclxuICAgIGxlc3NkaXNjb3VudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXNzZGlzY291bnRUYWdzLmZvckVhY2goZnVuY3Rpb24obGVzc2Rpc2NvdW50VGFnKSB7XHJcbiAgICAgICAgbGVzc2Rpc2NvdW50VGFnLmNsYXNzTGlzdC50b2dnbGUoXCJsZXNzZGlzY291bnQtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGxlc3NkaXNjb3VudEJ0bi5mb3JFYWNoKGZ1bmN0aW9uKGxlc3NkaXNjb3VudEJ0bnMpIHtcclxuICAgIGxlc3NkaXNjb3VudEJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXNzZGlzY291bnRUYWdzLmZvckVhY2goZnVuY3Rpb24obGVzc2Rpc2NvdW50RGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICBsZXNzZGlzY291bnREZWxldGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwibGVzc2Rpc2NvdW50LWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgICBsZXNzZGlzY291bnQuZm9yRWFjaChmdW5jdGlvbihsZXNzZGlzY291bnRJbnB1dCkge1xyXG4gICAgICAgIGlmICggbGVzc2Rpc2NvdW50SW5wdXQuY2hlY2tlZCApIHtcclxuICAgICAgICAgIGxlc3NkaXNjb3VudElucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qgbm9kaXNjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0YWxvZ19fbm9kaXNjb3VudFwiKTtcclxuICBjb25zdCBub2Rpc2NvdW50VGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm9kaXNjb3VudFwiKTtcclxuICBjb25zdCBub2Rpc2NvdW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub2Rpc2NvdW50LWJ0blwiKTtcclxuXHJcbiAgbm9kaXNjb3VudC5mb3JFYWNoKGZ1bmN0aW9uKG5vZGlzY291bnQpIHtcclxuICAgIG5vZGlzY291bnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgbm9kaXNjb3VudFRhZ3MuZm9yRWFjaChmdW5jdGlvbihub2Rpc2NvdW50VGFnKSB7XHJcbiAgICAgICAgbm9kaXNjb3VudFRhZy5jbGFzc0xpc3QudG9nZ2xlKFwibm9kaXNjb3VudC1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgbm9kaXNjb3VudEJ0bi5mb3JFYWNoKGZ1bmN0aW9uKG5vZGlzY291bnRCdG5zKSB7XHJcbiAgICBub2Rpc2NvdW50QnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIG5vZGlzY291bnRUYWdzLmZvckVhY2goZnVuY3Rpb24obm9kaXNjb3VudERlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgbm9kaXNjb3VudERlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJub2Rpc2NvdW50LWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgICBub2Rpc2NvdW50LmZvckVhY2goZnVuY3Rpb24obm9kaXNjb3VudElucHV0KSB7XHJcbiAgICAgICAgaWYgKCBub2Rpc2NvdW50SW5wdXQuY2hlY2tlZCApIHtcclxuICAgICAgICAgIG5vZGlzY291bnRJbnB1dC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIFxyXG4gIGNvbnN0IGNvbG9yQnJvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yX19icm93blwiKTtcclxuICBjb25zdCBicm93blRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yLWJyb3duXCIpO1xyXG4gIGNvbnN0IGJyb3duQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5icm93bi1idG5cIik7XHJcblxyXG4gIGNvbG9yQnJvd24uZm9yRWFjaChmdW5jdGlvbihicm93bikge1xyXG4gICAgYnJvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgYnJvd25UYWdzLmZvckVhY2goZnVuY3Rpb24oYnJvd25UYWcpIHtcclxuICAgICAgICBicm93blRhZy5jbGFzc0xpc3QudG9nZ2xlKFwiYnJvd24tYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGJyb3duQnRuLmZvckVhY2goZnVuY3Rpb24oYnJvd25CdG5zKSB7XHJcbiAgICBicm93bkJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBicm93blRhZ3MuZm9yRWFjaChmdW5jdGlvbihicm93bkRlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgYnJvd25EZWxldGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwiYnJvd24tYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbG9yQnJvd24uZm9yRWFjaChmdW5jdGlvbihicm93bklucHV0KSB7XHJcbiAgICAgICAgaWYgKCBicm93bklucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBicm93bklucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29sb3JCbGFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3JfX2JsYWNrXCIpO1xyXG4gIGNvbnN0IGJsYWNrVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3ItYmxhY2tcIik7XHJcbiAgY29uc3QgYmxhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsYWNrLWJ0blwiKTtcclxuXHJcbiAgY29sb3JCbGFjay5mb3JFYWNoKGZ1bmN0aW9uKGJsYWNrKSB7XHJcbiAgICBibGFjay5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBibGFja1RhZ3MuZm9yRWFjaChmdW5jdGlvbihibGFja1RhZykge1xyXG4gICAgICAgIGJsYWNrVGFnLmNsYXNzTGlzdC50b2dnbGUoXCJibGFjay1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgYmxhY2tCdG4uZm9yRWFjaChmdW5jdGlvbihibGFja0J0bnMpIHtcclxuICAgIGJsYWNrQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJsYWNrVGFncy5mb3JFYWNoKGZ1bmN0aW9uKGJsYWNrRGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICBibGFja0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJibGFjay1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgY29sb3JCbGFjay5mb3JFYWNoKGZ1bmN0aW9uKGJsYWNrSW5wdXQpIHtcclxuICAgICAgICBpZiAoIGJsYWNrSW5wdXQuY2hlY2tlZCApIHtcclxuICAgICAgICAgIGJsYWNrSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBjb2xvckJlaWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvcl9fYmVpZ2VcIik7XHJcbiAgY29uc3QgYmVpZ2VUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1iZWlnZVwiKTtcclxuICBjb25zdCBiZWlnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmVpZ2UtYnRuXCIpO1xyXG5cclxuICBjb2xvckJlaWdlLmZvckVhY2goZnVuY3Rpb24oYmVpZ2UpIHtcclxuICAgIGJlaWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJlaWdlVGFncy5mb3JFYWNoKGZ1bmN0aW9uKGJlaWdlVGFnKSB7XHJcbiAgICAgICAgYmVpZ2VUYWcuY2xhc3NMaXN0LnRvZ2dsZShcImJlaWdlLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBiZWlnZUJ0bi5mb3JFYWNoKGZ1bmN0aW9uKGJlaWdlQnRucykge1xyXG4gICAgYmVpZ2VCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgYmVpZ2VUYWdzLmZvckVhY2goZnVuY3Rpb24oYmVpZ2VEZWxldGVDbGFzcykge1xyXG4gICAgICAgIGJlaWdlRGVsZXRlQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcImJlaWdlLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgICBjb2xvckJlaWdlLmZvckVhY2goZnVuY3Rpb24oYmVpZ2VJbnB1dCkge1xyXG4gICAgICAgIGlmICggYmVpZ2VJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgYmVpZ2VJbnB1dC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNvbG9yR3JheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3JfX2dyYXlcIik7XHJcbiAgY29uc3QgZ3JheVRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yLWdyYXlcIik7XHJcbiAgY29uc3QgZ3JheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JheS1idG5cIik7XHJcblxyXG4gIGNvbG9yR3JheS5mb3JFYWNoKGZ1bmN0aW9uKGdyYXkpIHtcclxuICAgIGdyYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgZ3JheVRhZ3MuZm9yRWFjaChmdW5jdGlvbihncmF5VGFnKSB7XHJcbiAgICAgICAgZ3JheVRhZy5jbGFzc0xpc3QudG9nZ2xlKFwiZ3JheS1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgZ3JheUJ0bi5mb3JFYWNoKGZ1bmN0aW9uKGdyYXlCdG5zKSB7XHJcbiAgICBncmF5QnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGdyYXlUYWdzLmZvckVhY2goZnVuY3Rpb24oZ3JheURlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgZ3JheURlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJncmF5LWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgICBjb2xvckdyYXkuZm9yRWFjaChmdW5jdGlvbihncmF5SW5wdXQpIHtcclxuICAgICAgICBpZiAoIGdyYXlJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgZ3JheUlucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcblxyXG4gIGNvbnN0IGNvbG9yV2hpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yX193aGl0ZVwiKTtcclxuICBjb25zdCB3aGl0ZVRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yLXdoaXRlXCIpO1xyXG4gIGNvbnN0IHdoaXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53aGl0ZS1idG5cIik7XHJcblxyXG4gIGNvbG9yV2hpdGUuZm9yRWFjaChmdW5jdGlvbih3aGl0ZSkge1xyXG4gICAgd2hpdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgd2hpdGVUYWdzLmZvckVhY2goZnVuY3Rpb24od2hpdGVUYWcpIHtcclxuICAgICAgICB3aGl0ZVRhZy5jbGFzc0xpc3QudG9nZ2xlKFwid2hpdGUtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIHdoaXRlQnRuLmZvckVhY2goZnVuY3Rpb24od2hpdGVCdG5zKSB7XHJcbiAgICB3aGl0ZUJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB3aGl0ZVRhZ3MuZm9yRWFjaChmdW5jdGlvbih3aGl0ZURlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgd2hpdGVEZWxldGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwid2hpdGUtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbG9yV2hpdGUuZm9yRWFjaChmdW5jdGlvbih3aGl0ZUlucHV0KSB7XHJcbiAgICAgICAgaWYgKCB3aGl0ZUlucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICB3aGl0ZUlucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29sb3JOYXZ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvcl9fbmF2eVwiKTtcclxuICBjb25zdCBuYXZ5VGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3ItbmF2eVwiKTtcclxuICBjb25zdCBuYXZ5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZ5LWJ0blwiKTtcclxuXHJcbiAgY29sb3JOYXZ5LmZvckVhY2goZnVuY3Rpb24obmF2eSkge1xyXG4gICAgbmF2eS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBuYXZ5VGFncy5mb3JFYWNoKGZ1bmN0aW9uKG5hdnlUYWcpIHtcclxuICAgICAgICBuYXZ5VGFnLmNsYXNzTGlzdC50b2dnbGUoXCJuYXZ5LWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBuYXZ5QnRuLmZvckVhY2goZnVuY3Rpb24obmF2eUJ0bnMpIHtcclxuICAgIG5hdnlCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgbmF2eVRhZ3MuZm9yRWFjaChmdW5jdGlvbihuYXZ5RGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICBuYXZ5RGVsZXRlQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcIm5hdnktYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbG9yTmF2eS5mb3JFYWNoKGZ1bmN0aW9uKG5hdnlJbnB1dCkge1xyXG4gICAgICAgIGlmICggbmF2eUlucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBuYXZ5SW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuXHJcbiAgY29uc3QgY29sb3JPcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yX19vcmFuZ2VcIik7XHJcbiAgY29uc3Qgb3JhbmdlVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3Itb3JhbmdlXCIpO1xyXG4gIGNvbnN0IG9yYW5nZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIub3JhbmdlLWJ0blwiKTtcclxuXHJcbiAgY29sb3JPcmFuZ2UuZm9yRWFjaChmdW5jdGlvbihvcmFuZ2UpIHtcclxuICAgIG9yYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBvcmFuZ2VUYWdzLmZvckVhY2goZnVuY3Rpb24ob3JhbmdlVGFnKSB7XHJcbiAgICAgICAgb3JhbmdlVGFnLmNsYXNzTGlzdC50b2dnbGUoXCJvcmFuZ2UtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIG9yYW5nZUJ0bi5mb3JFYWNoKGZ1bmN0aW9uKG9yYW5nZUJ0bnMpIHtcclxuICAgIG9yYW5nZUJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBvcmFuZ2VUYWdzLmZvckVhY2goZnVuY3Rpb24ob3JhbmdlRGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICBvcmFuZ2VEZWxldGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwib3JhbmdlLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgICBjb2xvck9yYW5nZS5mb3JFYWNoKGZ1bmN0aW9uKG9yYW5nZUlucHV0KSB7XHJcbiAgICAgICAgaWYgKCBvcmFuZ2VJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgb3JhbmdlSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBjb2xvclllbGxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3JfX3llbGxvd1wiKTtcclxuICBjb25zdCB5ZWxsb3dUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci15ZWxsb3dcIik7XHJcbiAgY29uc3QgeWVsbG93QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi55ZWxsb3ctYnRuXCIpO1xyXG5cclxuICBjb2xvclllbGxvdy5mb3JFYWNoKGZ1bmN0aW9uKHllbGxvdykge1xyXG4gICAgeWVsbG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHllbGxvd1RhZ3MuZm9yRWFjaChmdW5jdGlvbih5ZWxsb3dUYWcpIHtcclxuICAgICAgICB5ZWxsb3dUYWcuY2xhc3NMaXN0LnRvZ2dsZShcInllbGxvdy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgeWVsbG93QnRuLmZvckVhY2goZnVuY3Rpb24oeWVsbG93QnRucykge1xyXG4gICAgeWVsbG93QnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHllbGxvd1RhZ3MuZm9yRWFjaChmdW5jdGlvbih5ZWxsb3dEZWxldGVDbGFzcykge1xyXG4gICAgICAgIHllbGxvd0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJ5ZWxsb3ctYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbG9yWWVsbG93LmZvckVhY2goZnVuY3Rpb24oeWVsbG93SW5wdXQpIHtcclxuICAgICAgICBpZiAoIHllbGxvd0lucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICB5ZWxsb3dJbnB1dC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNvbG9yR3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yX19ncmVlblwiKTtcclxuICBjb25zdCBncmVlblRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yLWdyZWVuXCIpO1xyXG4gIGNvbnN0IGdyZWVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmVlbi1idG5cIik7XHJcblxyXG4gIGNvbG9yR3JlZW4uZm9yRWFjaChmdW5jdGlvbihncmVlbikge1xyXG4gICAgZ3JlZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgZ3JlZW5UYWdzLmZvckVhY2goZnVuY3Rpb24oZ3JlZW5UYWcpIHtcclxuICAgICAgICBncmVlblRhZy5jbGFzc0xpc3QudG9nZ2xlKFwiZ3JlZW4tYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGdyZWVuQnRuLmZvckVhY2goZnVuY3Rpb24oZ3JlZW5CdG5zKSB7XHJcbiAgICBncmVlbkJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBncmVlblRhZ3MuZm9yRWFjaChmdW5jdGlvbihncmVlbkRlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgZ3JlZW5EZWxldGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JlZW4tYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbG9yR3JlZW4uZm9yRWFjaChmdW5jdGlvbihncmVlbklucHV0KSB7XHJcbiAgICAgICAgaWYgKCBncmVlbklucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBncmVlbklucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29sb3JSZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yX19yZWRcIik7XHJcbiAgY29uc3QgcmVkVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3ItcmVkXCIpO1xyXG4gIGNvbnN0IHJlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVkLWJ0blwiKTtcclxuXHJcbiAgY29sb3JSZWQuZm9yRWFjaChmdW5jdGlvbihyZWQpIHtcclxuICAgIHJlZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZWRUYWdzLmZvckVhY2goZnVuY3Rpb24ocmVkVGFnKSB7XHJcbiAgICAgICAgcmVkVGFnLmNsYXNzTGlzdC50b2dnbGUoXCJyZWQtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIHJlZEJ0bi5mb3JFYWNoKGZ1bmN0aW9uKHJlZEJ0bnMpIHtcclxuICAgIHJlZEJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICByZWRUYWdzLmZvckVhY2goZnVuY3Rpb24ocmVkRGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICByZWREZWxldGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwicmVkLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgICBjb2xvclJlZC5mb3JFYWNoKGZ1bmN0aW9uKHJlZElucHV0KSB7XHJcbiAgICAgICAgaWYgKCByZWRJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgcmVkSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBjb2xvclB1cnBsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3JfX3B1cnBsZVwiKTtcclxuICBjb25zdCBwdXJwbGVUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1wdXJwbGVcIik7XHJcbiAgY29uc3QgcHVycGxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wdXJwbGUtYnRuXCIpO1xyXG5cclxuICBjb2xvclB1cnBsZS5mb3JFYWNoKGZ1bmN0aW9uKHB1cnBsZSkge1xyXG4gICAgcHVycGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHB1cnBsZVRhZ3MuZm9yRWFjaChmdW5jdGlvbihwdXJwbGVUYWcpIHtcclxuICAgICAgICBwdXJwbGVUYWcuY2xhc3NMaXN0LnRvZ2dsZShcInB1cnBsZS1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgcHVycGxlQnRuLmZvckVhY2goZnVuY3Rpb24ocHVycGxlQnRucykge1xyXG4gICAgcHVycGxlQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHB1cnBsZVRhZ3MuZm9yRWFjaChmdW5jdGlvbihwdXJwbGVEZWxldGVDbGFzcykge1xyXG4gICAgICAgIHB1cnBsZURlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJwdXJwbGUtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbG9yUHVycGxlLmZvckVhY2goZnVuY3Rpb24ocHVycGxlSW5wdXQpIHtcclxuICAgICAgICBpZiAoIHB1cnBsZUlucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBwdXJwbGVJbnB1dC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNvbG9yUGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3JfX3BpbmtcIik7XHJcbiAgY29uc3QgcGlua1RhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yLXBpbmtcIik7XHJcbiAgY29uc3QgcGlua0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGluay1idG5cIik7XHJcblxyXG4gIGNvbG9yUGluay5mb3JFYWNoKGZ1bmN0aW9uKHBpbmspIHtcclxuICAgIHBpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgcGlua1RhZ3MuZm9yRWFjaChmdW5jdGlvbihwaW5rVGFnKSB7XHJcbiAgICAgICAgcGlua1RhZy5jbGFzc0xpc3QudG9nZ2xlKFwicGluay1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgcGlua0J0bi5mb3JFYWNoKGZ1bmN0aW9uKHBpbmtCdG5zKSB7XHJcbiAgICBwaW5rQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHBpbmtUYWdzLmZvckVhY2goZnVuY3Rpb24ocGlua0RlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgcGlua0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJwaW5rLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgICBjb2xvclBpbmsuZm9yRWFjaChmdW5jdGlvbihwaW5rSW5wdXQpIHtcclxuICAgICAgICBpZiAoIHBpbmtJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgcGlua0lucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29sb3JCbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvcl9fYmx1ZVwiKTtcclxuICBjb25zdCBibHVlVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3ItYmx1ZVwiKTtcclxuICBjb25zdCBibHVlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibHVlLWJ0blwiKTtcclxuXHJcbiAgY29sb3JCbHVlLmZvckVhY2goZnVuY3Rpb24oYmx1ZSkge1xyXG4gICAgYmx1ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBibHVlVGFncy5mb3JFYWNoKGZ1bmN0aW9uKGJsdWVUYWcpIHtcclxuICAgICAgICBibHVlVGFnLmNsYXNzTGlzdC50b2dnbGUoXCJibHVlLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBibHVlQnRuLmZvckVhY2goZnVuY3Rpb24oYmx1ZUJ0bnMpIHtcclxuICAgIGJsdWVCdG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgYmx1ZVRhZ3MuZm9yRWFjaChmdW5jdGlvbihibHVlRGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICBibHVlRGVsZXRlQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZShcImJsdWUtYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbG9yQmx1ZS5mb3JFYWNoKGZ1bmN0aW9uKGJsdWVJbnB1dCkge1xyXG4gICAgICAgIGlmICggYmx1ZUlucHV0LmNoZWNrZWQgKSB7XHJcbiAgICAgICAgICBibHVlSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBjb2xvckxpZ2h0Z3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yX19saWdodGdyZWVuXCIpO1xyXG4gIGNvbnN0IGxpZ2h0Z3JlZW5UYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb2xvci1saWdodGdyZWVuXCIpO1xyXG4gIGNvbnN0IGxpZ2h0Z3JlZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpZ2h0Z3JlZW4tYnRuXCIpO1xyXG5cclxuICBjb2xvckxpZ2h0Z3JlZW4uZm9yRWFjaChmdW5jdGlvbihsaWdodGdyZWVuKSB7XHJcbiAgICBsaWdodGdyZWVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxpZ2h0Z3JlZW5UYWdzLmZvckVhY2goZnVuY3Rpb24obGlnaHRncmVlblRhZykge1xyXG4gICAgICAgIGxpZ2h0Z3JlZW5UYWcuY2xhc3NMaXN0LnRvZ2dsZShcImxpZ2h0Z3JlZW4tYWN0aXZlXCIpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGxpZ2h0Z3JlZW5CdG4uZm9yRWFjaChmdW5jdGlvbihsaWdodGdyZWVuQnRucykge1xyXG4gICAgbGlnaHRncmVlbkJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBsaWdodGdyZWVuVGFncy5mb3JFYWNoKGZ1bmN0aW9uKGxpZ2h0Z3JlZW5EZWxldGVDbGFzcykge1xyXG4gICAgICAgIGxpZ2h0Z3JlZW5EZWxldGVDbGFzcy5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHRncmVlbi1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgY29sb3JMaWdodGdyZWVuLmZvckVhY2goZnVuY3Rpb24obGlnaHRncmVlbklucHV0KSB7XHJcbiAgICAgICAgaWYgKCBsaWdodGdyZWVuSW5wdXQuY2hlY2tlZCApIHtcclxuICAgICAgICAgIGxpZ2h0Z3JlZW5JbnB1dC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGNvbG9yQXF1YW1hcmluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3JfX2FxdWFtYXJpbmVcIik7XHJcbiAgY29uc3QgYXF1YW1hcmluZVRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbG9yLWFxdWFtYXJpbmVcIik7XHJcbiAgY29uc3QgYXF1YW1hcmluZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXF1YW1hcmluZS1idG5cIik7XHJcblxyXG4gIGNvbG9yQXF1YW1hcmluZS5mb3JFYWNoKGZ1bmN0aW9uKGFxdWFtYXJpbmUpIHtcclxuICAgIGFxdWFtYXJpbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgYXF1YW1hcmluZVRhZ3MuZm9yRWFjaChmdW5jdGlvbihhcXVhbWFyaW5lVGFnKSB7XHJcbiAgICAgICAgYXF1YW1hcmluZVRhZy5jbGFzc0xpc3QudG9nZ2xlKFwiYXF1YW1hcmluZS1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgYXF1YW1hcmluZUJ0bi5mb3JFYWNoKGZ1bmN0aW9uKGFxdWFtYXJpbmVCdG5zKSB7XHJcbiAgICBhcXVhbWFyaW5lQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFxdWFtYXJpbmVUYWdzLmZvckVhY2goZnVuY3Rpb24oYXF1YW1hcmluZURlbGV0ZUNsYXNzKSB7XHJcbiAgICAgICAgYXF1YW1hcmluZURlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJhcXVhbWFyaW5lLWFjdGl2ZVwiKVxyXG4gICAgICB9KVxyXG4gICAgICBjb2xvckFxdWFtYXJpbmUuZm9yRWFjaChmdW5jdGlvbihhcXVhbWFyaW5lSW5wdXQpIHtcclxuICAgICAgICBpZiAoIGFxdWFtYXJpbmVJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgYXF1YW1hcmluZUlucHV0LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY29sb3JHcmF5YyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3JfX2dyYXljXCIpO1xyXG4gIGNvbnN0IGdyYXljVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29sb3ItZ3JheWNcIik7XHJcbiAgY29uc3QgZ3JheWNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyYXljLWJ0blwiKTtcclxuXHJcbiAgY29sb3JHcmF5Yy5mb3JFYWNoKGZ1bmN0aW9uKGdyYXljKSB7XHJcbiAgICBncmF5Yy5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBncmF5Y1RhZ3MuZm9yRWFjaChmdW5jdGlvbihncmF5Y1RhZykge1xyXG4gICAgICAgIGdyYXljVGFnLmNsYXNzTGlzdC50b2dnbGUoXCJncmF5Yy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSlcclxuXHJcbiAgZ3JheWNCdG4uZm9yRWFjaChmdW5jdGlvbihncmF5Y0J0bnMpIHtcclxuICAgIGdyYXljQnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGdyYXljVGFncy5mb3JFYWNoKGZ1bmN0aW9uKGdyYXljRGVsZXRlQ2xhc3MpIHtcclxuICAgICAgICBncmF5Y0RlbGV0ZUNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoXCJncmF5Yy1hY3RpdmVcIilcclxuICAgICAgfSlcclxuICAgICAgY29sb3JHcmF5Yy5mb3JFYWNoKGZ1bmN0aW9uKGdyYXljZUlucHV0KSB7XHJcbiAgICAgICAgaWYgKCBncmF5Y2VJbnB1dC5jaGVja2VkICkge1xyXG4gICAgICAgICAgZ3JheWNlSW5wdXQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KVxyXG4gIC8vIElucHV0c1xyXG59KSJdfQ==
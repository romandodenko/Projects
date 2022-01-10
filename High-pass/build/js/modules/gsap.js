import gsap from 'gsap';

export function gsapScript() {
  gsap.from(".hero__left", {duration: 1, delay: .2, x: -300, opacity: 0})
  gsap.from(".item-one", {duration: 1, delay: .5, opacity: 0})
  gsap.from(".item-two", {duration: 1, delay: .8, opacity: 0})
  gsap.from(".item-third", {duration: 1, delay: 1, opacity: 0})
}
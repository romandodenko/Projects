import AOS from 'aos';

export function aosScript() {
  AOS.init({
    startEvent: 'DOMContentLoaded',
  });
}
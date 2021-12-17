export const funAdopta = () => {
  // const onclick = "ga('send', 'event', 'Novena', 'Fundaciones', 'Fundacion_Adopta'); fbq('click', 'Novena');";
  const onclick = "gaq.push(['_trackEvent', 'prueba_evento', 'set' + foundationSelectedStepTwo.title.rendered]);";
  return onclick
}
export const funSanar = () => {
  const onclick = "gtag('event', 'click', { 'event_category': 'Novena', 'event_label': 'Fundacion_Sanar', 'value': '0'});";
  console.log(onclick);
  return onclick
}
export const funTecho = () => {
  const onclick = "gtag('event', 'click', { 'event_category': 'Novena', 'event_label': 'Fundacion_Techo', 'value': '0'});";
  console.log(onclick);
  return onclick
}
export const funFruto = () => {
  const onclick = "gtag('event', 'click', { 'event_category': 'Novena', 'event_label': 'Fundacion_Fruto', 'value': '0'});";
  console.log(onclick, typeof onclick);
  return onclick
}
export const funAmese = () => {
  const onclick = "gtag('event', 'click', { 'event_category': 'Novena', 'event_label': 'Fundacion_Amese', 'value': '0'});";
  console.log(onclick);
  return onclick
}
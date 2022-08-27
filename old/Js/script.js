const sr =ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    dealy: 400,
})

sr.reveal('.text,.t-heading,.heading,.card', {interval:100,})

sr.reveal('.f-para,.t-para',{origin:'left'})
sr.reveal('.s-para',{origin:'right'})
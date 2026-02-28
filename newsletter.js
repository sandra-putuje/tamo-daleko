// Funkcija koja ubacuje newsletter sekciju na stranicu
function injectNewsletter() {
    const container = document.getElementById('custom-substack-embed');
    if (!container) return;

    container.innerHTML = `
        <section style="text-align: center; padding: 40px 20px; background: rgba(255, 220, 160, 0.65); border-radius: 10px; border: 1px solid rgba(220, 180, 120, 0.35); margin: 50px 0; font-family: Georgia, serif;">
            <hr style="border: 0; border-top: 1px solid #ccc; margin-bottom: 30px;">
            <h2 style="margin-top: 0; color: #f39c12;">Ne propustite sledeću avanturu!</h2>
            <p style="margin-bottom: 20px;">Pridružite se zajednici putnika i nove priče će vam stizati direktno u inbox.</p>
            
            <a href="https://sandra-putuje.substack.com/subscribe" 
               target="_blank" 
               style="display: inline-block; background-color: #8bb272; color: white; padding: 15px 35px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 1.1rem; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.2s ease;">
                Prijavi se na newsletter
            </a>
            
            <p style="font-size: 0.85rem; margin-top: 20px; color: #555; font-style: italic;">
                *Besplatna prijava putem Substack platforme.
            </p>
        </section>
    `;
}
// Bez ove linije, funkcija samo "postoji", ali se nikada ne izvršava
document.addEventListener('DOMContentLoaded', injectNewsletter);

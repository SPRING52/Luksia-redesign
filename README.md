# TEKNINEN DOKUMENTAATIO

## Luksia-verkkosivuston uudelleensuunnittelu (Frontend-projekti)

---

# 1. PROJEKTIN YLEISKUVAUS

## Projektin tarkoitus

Tämä projekti on Luksian virallisen verkkosivuston oppimistehtävänä tehty uudelleensuunnittelu (redesign), joka on toteutettu osana _Projektissa toimiminen_ -kurssia. Projektin tavoitteena oli luoda nykyaikainen, responsiivinen ja käyttäjäystävällinen versio sivustosta käyttäen ainoastaan frontend-teknologioita ilman palvelinpuolen ratkaisuja.

Projekti sisältää kolme pääsivua:

1. **Etusivu** (Sivuston pääsivu)
2. **Koulutushaku** (Koulutusohjelmien haku ja tarkastelu)
3. **Opiskelijalle** (Tietoa ja ohjeita opiskelijoille)

Pääpaino oli seuraavissa osa-alueissa:

- Käyttäjäkokemuksen parantaminen (UX)
- Nykyaikainen visuaalinen ilme
- Käyttöliittymän responsiivisuus
- Saavutettavuus (Accessibility / WCAG)
- Semanttisen HTML-merkinnän käyttö
- Vuorovaikutteisten elementtien toteuttaminen JavaScriptillä

## Käytetyt teknologiat

Projekti on kehitetty käyttäen seuraavia teknologioita:

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Google Fonts (Roboto)

Ulkoisia kirjastoja tai viitekehyksiä (kuten Bootstrap, React, Vue jne.) ei ole käytetty.

---

# 2. TIEDOSTORAKENNE

## Projektin kansiorakenne
```
Luksia-redesign/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── ammatit.css
│   ├── opiskelijalle.css
│   └── hero-img.png
│
├── javascript/
│   ├── main.js
│   └── koulutushaku.js
│
├── images/
│   ├── luksia-logo.png
│   ├── luksia-favicon.png
│   ├── magnifying glass.png
│   └── muut kuvat...
│
└── sivut/
    ├── ammatit.html
    ├── opiskelijalle.html
    └── favicon.ico
```
## Tiedostojen tarkoitus

### HTML

#### index.html

Sivuston etusivu. Sisältää perustiedot Luksiasta, päänavigoinnin, infolohkoja sekä linkkejä projektin muille sivuille.

#### ammatit.html

Koulutusohjelmien hakusivu. Sisältää interaktiivisen koulutusalojen suodatusjärjestelmän.

#### opiskelijalle.html

Opiskelijoiden sivu. Sisältää hyödyllistä tietoa, linkkejä ja suosituksia opintojen aloittamiseen.

---

### CSS

#### style.css

Projektin päätyylitiedosto.

Sisältää:

* CSS-muuttujat
* Globaalit tyylit
* Navigoinnin tyylit
* Korttien tyylit
* Alatunnisteen (footer) tyylit
* Animaatiot
* Responsiiviset määrittelyt

#### ammatit.css

Koulutushaku-sivun erikoistyylit.

Sisältää:

* Koulutuskorttien ruudukon (grid)
* Suodattimien tyylit
* Koulutusten responsiivisen ruudukon

#### opiskelijalle.css

Opiskelijoiden sivun lisätyylit.

---

### JavaScript

#### main.js

Sivuston yleiset toiminnallisuudet:

* Mobiilivalikko
* Sivun skrollauksen käsittely
* Tasainen skrollaus (smooth scroll)
* Pudotusvalikko (dropdown)
* Elementtien ilmestymisanimaatiot
* Kohdistuksen lukitseminen (focus trap) saavutettavuutta varten
* Linkkien latautumisen optimointi

#### koulutushaku.js

Erillinen moduuli koulutusohjelmien suodatusta varten.

Sisältää:

* Koulutustietojen taulukon (data-array)
* Korttien dynaamisen luonnin
* Suodattimien dynaamisen luonnin
* Klikkausten käsittelyn
* Käyttöliittymän dynaamisen päivittämisen

---

# 3. HTML-RAKENNE JA SEMANTIIKKA

## HTML5-semanttiset elementit

Kaikilla projektin sivuilla käytetään moderneja semanttisia HTML5-elementtejä.

### Header

```html
<header></header>

```

Käytetään sivuston yläpalkissa.

Sisältää:

* Logon
* Päänavigoinnin
* Haun
* Mobiilivalikon

---

### Nav

```html
<nav></nav>

```

Käytetään navigointivalikossa.

Käytetään yhdessä seuraavan attribuutin kanssa:

```html
aria-label="Päänavigointi"

```

mikä parantaa saavutettavuutta ruudunlukuohjelmia varten.

---

### Main

```html
<main></main>

```

Sisältää sivun pääasiallisen sisällön.

Tämä auttaa hakukoneita ja ruudunlukuohjelmia ymmärtämään dokumentin rakenteen.

---

### Section

```html
<section></section>

```

Käytetään sisällön loogiseen jakamiseen.

Esimerkiksi:

* Koulutushakulohko
* Tietosektiot
* Tervetuliaislohkot

---

### Footer

```html
<footer></footer>

```

Sisältää yhteystiedot ja linkit.

---

## Hakukoneoptimointi (SEO)

Semanttisten tagien käyttö auttaa:

* Parantamaan sivujen indeksointia
* Nostamaan SEO-laatua
* Tekemään dokumentin rakenteesta selkeän hakukoneille

---

# 4. CSS-ARKKITEHTUURI JA RESPONSIVISUUS

## CSS-arkkitehtuuri

Projekti hyödyntää keskitettyä CSS-muuttujajärjestelmää.

### CSS Variables

Tiedostossa `style.css` on määritelty:

```css
:root {
  --color-primary;
  --color-white;
  --font-size-base;
  --spacing-md;
}

```

Hyödyt:

* Yhtenäinen ulkoasu
* Teeman helppo muuttaminen
* Arvojen uudelleenkäyttö

---

## Flexbox

Pääasiallinen tapa rakentaa käyttöliittymän asettelu.

Esimerkkejä:

```css
display: flex;
justify-content: space-between;
align-items: center;

```

Käytetään seuraaviin:

* Navigointi
* Kortit
* Alatunniste (footer)
* Mobiilivalikko

---

## CSS Grid

Koulutushaku-sivulla käytetään Grid Layout -asettelua.

```css
.courses-grid {
  display: grid;
}

```

Sarakkeiden määrä muuttuu näytön leveyden mukaan.

---

# Responsiivisuus

## Desktop

Yli 1024 px

```css
grid-template-columns: repeat(4, 1fr);

```

Näytetään 4 korttia rivissä.

---

## Tablet

Enintään 1024 px

```css
grid-template-columns: repeat(3, 1fr);

```

Näytetään 3 korttia rivissä.

---

## Mobile

Enintään 768 px

```css
grid-template-columns: repeat(2, 1fr);

```

Näytetään 2 korttia rivissä.

---

## Small Mobile

Enintään 480 px

```css
grid-template-columns: 1fr;

```

Kortit asettuvat yhteen sarakkeeseen.

---

# 5. JAVASCRIPT-TOIMINNALLISUUS

## Yleinen rakenne

JavaScript on jaettu kahteen erilliseen tiedostoon:

### main.js

Sivuston yleinen toiminnallisuus.

### koulutushaku.js

Koulutusohjelmien haun toiminnallisuus.

---

## Mobiilivalikko (Burger Menu)

### Valikon avaaminen

Funktio:

```javascript
toggleMobileMenu();

```

Suorittaa:

```javascript
classList.toggle("active");

```

seuraaville elementeille: valikkopainike ja navigointilohko.

Lisäksi muutetaan `aria-expanded`-attribuuttia saavutettavuuden tukemiseksi.

---

### Valikon sulkeminen

Funktio:

```javascript
closeMobileMenu();

```

Nollaa active-luokat ja poistaa sivun skrollauksen eston.

---

## Dropdown-valikko

Kun klikataan valikon ulkopuolelle, suoritetaan tarkistus:

```javascript
document.addEventListener("click");

```

Jos käyttäjä klikkasi valikkoalueen ulkopuolella, asetetaan `aria-hidden="true"` ja lista piilotetaan.

---

## Scroll-toiminnallisuus

Käytetään tasaista skrollausta:

```javascript
window.scrollTo({
  behavior: "smooth",
});

```

sisäisille ankkurilinkeille.

---

## Scroll-animaatiot

Käytetään modernia API-rajapintaa:

```javascript
IntersectionObserver;

```

Kun elementti tulee näkyvyysalueelle:

```javascript
entry.target.classList.add("visible");

```

Käynnistyy CSS-animaatio.

---

## Focus Trap

Mobiilivalikolle on toteutettu funktio:

```javascript
trapFocus();

```

Se estää näppäimistökohdistuksen karkaamisen avoimen valikon ulkopuolelle. Tämä on tärkeä WCAG-vaatimus.

---

# Koulutushaku-sivun logiikka

## Tietorakenne

Kaikki koulutusohjelmat tallennetaan taulukkoon:

```javascript
const coursesData = [];

```

Jokainen objekti sisältää:

```javascript
{
  (id, title, categories, imageUrl, link, alt);
}

```

---

## Suodattimet

Kategoriat määritellään taulukossa:

```javascript
const filterCategories = [];

```

Painikkeet luodaan automaattisesti JavaScriptin kautta.

---

## renderFilterButtons()

Funktio:

```javascript
renderFilterButtons();

```

Luo suodatinpainikkeet dynaamisesti. Jokaiselle painikkeelle lisätään `click`- ja `keydown`-tapahtumat.

---

## renderCourseCards()

Korttien näyttämisen funktio.

Käyttää `Array.filter()`-metodia hakeakseen osumia kategorioiden perusteella.

Jos valittuna on suodatin:

```javascript
"Tekniikan alat";

```

näytetään vain kyseisen alan koulutusohjelmat.

---

## handleFilterClick()

Kun kategoria valitaan:

1. `activeFilter` päivitetään
2. Painikkeiden aktiiviset luokat muutetaan
3. Korttilista luodaan uudelleen

---

## Suorituskyky

Kortit luodaan vain tarpeen mukaan.

Käytetään DOM-elementtien dynaamista luontia metodin `document.createElement();` kautta, mikä vähentää HTML-koodin kokonaismäärää.

---

# 6. SAAVUTETTAVUUS

Projekti ottaa huomioon WCAG 2.1 -standardin päävaatimukset.

---

## Alt-tekstit

Kaikilla kuvilla on attribuutti:

```html
alt=""

```

Esimerkiksi:

```html
alt="Luksia Logo"

```

---

## ARIA-attribuutit

Käytössä ovat seuraavat attribuutit:

```html
aria-label aria-expanded aria-hidden aria-pressed

```

Esimerkkejä:

```html
aria-label="Hakukenttä"

```

```html
aria-expanded="false"

```

---

## Näppäimistökäyttö

Suodatinpainikkeet tukevat painikkeita:

```text
Enter; Space;

```

tapahtumankäsittelijän `keydown;` kautta.

---

## Focus-tilat

Vuorovaikutteisille elementeille käytetään tiloja:

```css
:focus;

```

Esimerkiksi:

```css
outline: 3px solid var(--color-primary);

```

mikä tekee näppäimistönavigoinnista helppoa ja selkeää.

---

## Touch Targets

Klikattavien elementtien vähimmäiskoko:

```css
--touch-target-min: 44px;

```

Vastaa WCAG-suosituksia.

---

# 7. YLLÄPITO JA JATKOKEHITYS

## Projektin käynnistäminen

Projektin käynnistämiseksi paikallisesti tulee suorittaa seuraavat vaiheet:

1. Lataa projekti koneellesi.
2. Avaa projektikansio Visual Studio Code -editorissa.
3. Käynnistä Live Server -laajennus.

Avaa käynnistyksen jälkeen:

```text
index.html

```

---

## Uuden koulutuksen lisääminen

Uuden koulutusohjelman lisäämiseksi avaa tiedosto:

```text
javascript/koulutushaku.js

```

ja lisää uusi objekti taulukkoon:

```javascript
coursesData;

```

Esimerkki:

```javascript
{
    id: 13,
    title: "Uusi koulutus",
    categories: ["Tekniikan alat"],
    imageUrl: "...",
    link: "...",
    alt: "..."
}

```

Tallennuksen jälkeen koulutusohjelma ilmestyy automaattisesti käyttöliittymään.

---

## Uuden kategorian lisääminen

Taulukkoon:

```javascript
filterCategories;

```

tulee lisätä uusi objekti:

```javascript
{
    id: "Uusi kategoria",
    label: "Uusi kategoria"
}

```

Suodatinpainike luodaan tämän jälkeen automaattisesti.

---

## Uuden sivun lisääminen

1. Luo uusi HTML-tiedosto kansioon:

```text
sivut/

```

2. Linkitä tarvittavat tyylit ja skriptit:

```html
<link rel="stylesheet">
<script defer>

```

3. Lisää linkki sivuston navigointiin.

---

## Mahdolliset jatkokehitysideat

Projektia voidaan kehittää jatkossa seuraavasti:

* Todellisen Luksia API -rajapinnan yhdistäminen
* Hakutoiminnon toteuttaminen avainsanoilla
* Suosikkikoulutusten tallennusmahdollisuus (kirjanmerkit)
* Suodatinasetusten tallentaminen LocalStorageen
* Tumman teeman (dark mode) luominen käyttöliittymään
* Monikielisyyden toteuttaminen (suomi / svenska / english)

---

## Yhteenveto

Projekti osoittaa nykyaikaisten frontend-kehitysteknologioiden (HTML5, CSS3 ja JavaScript) varmaa hallintaa. Koodissa hyödynnetään semanttista rakennetta, responsiivista suunnittelua, käyttöliittymän dynaamista luontia sekä saavutettavuuselementtejä WCAG-suositusten mukaisesti. Projektin arkkitehtuuri on helposti ylläpidettävissä ja laajennettavissa tulevaisuudessa.

```
***

```

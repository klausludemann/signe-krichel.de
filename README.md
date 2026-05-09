# Signe Krichel – Statische Website (Migration von Wix zu Strato)

Saubere, statische HTML-Kopie der Website signe-krichel.de.
Editierbar mit jedem Texteditor. Keine Abhängigkeit von Wix.

---

## Verzeichnisstruktur

```
signe-krichel/
├── index.html                       Startseite
├── einzeltherapie.html              Einzelberatung
├── paartherapie.html                Paartherapie
├── coaching-supervision.html        Coaching und Supervision
├── uebermich.html                   Über mich
├── honorar.html                     Honorar
├── kontakt.html                     Kontakt
├── datenschutz-impressum.html       Datenschutz / Impressum
├── style.css                        Gemeinsames Stylesheet (alle Seiten)
├── README.md                        Diese Datei
└── images/                          Bilder (siehe unten – noch zu befüllen)
```

---

## SCHRITT 1: Bilder herunterladen

Die Bilder liegen aktuell auf der Wix-CDN. Bitte einmal pro Bild im Browser öffnen,
mit Rechtsklick „Bild speichern unter…" und im Ordner `images/` ablegen
**unter exakt dem angegebenen Dateinamen** (sonst funktionieren die Verlinkungen nicht).

| Speichern als                  | Quelle (im Browser öffnen und speichern)                                                                                                                                         |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `images/titel.jpg`             | https://static.wixstatic.com/media/7a1f38_7797626ee5954c51a45aa35d8affd200~mv2.jpg                                                                                              |
| `images/ueber-portrait.jpg`    | https://static.wixstatic.com/media/7a1f38_883acb056b3c4fb7adb5ec52a2d322d9~mv2.jpg                                                                                              |
| `images/ueber-szene.jpg`       | https://static.wixstatic.com/media/7a1f38_7ee0cb86cf644d22aec0d15958a05497~mv2.jpg                                                                                              |
| `images/einzel.jpg`            | https://static.wixstatic.com/media/7a1f38_749b5b2df2e94ff6b09654ff4ab932f7~mv2.jpg                                                                                              |
| `images/paar.jpg`              | https://static.wixstatic.com/media/7a1f38_8346449f1c60473da87de0573bfc553e~mv2.jpg                                                                                              |
| `images/coaching.jpg`          | https://static.wixstatic.com/media/7a1f38_a06a03d5ca124c5eb8657471bac8c395~mv2.jpg                                                                                              |
| `images/dgsv-logo.jpg`         | https://static.wixstatic.com/media/7a1f38_67803b7c160044c99db2622940c7ba32~mv2.jpg                                                                                              |
| `images/insite-logo.jpg`       | https://static.wixstatic.com/media/7a1f38_bbc9c2d07667447eb1a4cc966b7e259c~mv2.jpg                                                                                              |

**Tipp:** Wenn Sie noch Wix-Zugang haben, finden Sie die Original-Bilder im
Wix Media Manager und können dort die hochauflösenden Originale herunterladen –
das ist sogar besser als die CDN-URLs.

---

## SCHRITT 2: Lokal testen

Vor dem Hochladen einmal lokal prüfen:
- Doppelklick auf `index.html` → öffnet im Browser
- Alle Navigationslinks durchklicken
- Auf Mobil-Ansicht prüfen (im Browser DevTools: F12 → Mobile-View)

---

## SCHRITT 3: Auf Strato hochladen

Strato Basic-Hosting (statisches HTML) – Upload via FTP:

1. **Strato Customer Service Center** öffnen (Login auf strato.de)
2. **Ordner & Webspace** → **FTP-Zugang** → Zugangsdaten ansehen oder neu setzen
3. **FTP-Programm** verwenden:
   - **iPad:** App „FTPManager Pro" oder „Transmit" (kostenpflichtig) –
     oder Browser-basiert via [net2ftp.com](https://www.net2ftp.com)
   - **Chromebook:** [net2ftp.com](https://www.net2ftp.com) im Browser, oder Filezilla via Linux-Container
4. Verbindung herstellen, in den Webspace-Ordner wechseln
   (üblicherweise `/` oder `/htdocs/` – Strato dokumentiert das)
5. **Den gesamten Inhalt** des Ordners `signe-krichel/` hochladen
   (NICHT den Ordner selbst – nur die Dateien und den Unterordner `images/`)

Nach dem Upload sollte signe-krichel.de wieder erreichbar sein.

---

## SCHRITT 4: Domain umziehen

Damit signe-krichel.de auf Strato statt auf Wix zeigt, muss bei Ihrem
Domain-Registrar (Wix oder anderer Anbieter) der DNS-Eintrag aktualisiert werden.
Strato gibt im Customer Service Center eine IP-Adresse oder Nameserver an, auf
die der A-Record / die NS-Einträge zeigen müssen.

**Wichtig:** Erst Domain umziehen, **nachdem** die Inhalte auf Strato live sind –
sonst gibt es eine Lücke, in der die Seite nicht erreichbar ist.

---

## Inhalte editieren

Alle HTML-Dateien sind reines, lesbares HTML. Zum Ändern:
- **Texte ändern:** Datei in einem Editor öffnen (z. B. „Working Copy" auf iPad,
  GitHub Web Editor, Visual Studio Code online), die gewünschte Stelle finden,
  ändern, speichern, neu hochladen.
- **Bild austauschen:** Neue Datei mit demselben Namen in `images/` ablegen.
- **Design anpassen:** Alles steht in `style.css` (Farben, Schriftgrößen, Abstände).

---

## Was wurde geändert (im Vergleich zum Wix-Original)?

- **Saubere URLs:** Keine `/uebermich`-Pfade mehr, sondern `/uebermich.html` –
  Strato statisch unterstützt beides nicht ohne `.htaccess`-Konfiguration; die
  `.html`-Endungen sind die einfachste Lösung.
- **Honorar-Seite:** Die Eingangsangabe „Einzelsitzungen ab 100 Euro" in den
  Meta-Daten wurde gegen die im Body genannten Werte (110-150 € / 140 € / 190 €)
  abgeglichen. Ggf. überprüfen.
- **Kontakt-Seite:** Die SEO-Domain-Liste am Fuß zeigt jetzt auf interne Seiten
  (statt auf signe-krichel.de). Falls die einzelnen Domains (koeln-paarberatung.de
  etc.) tatsächlich existieren und eigene DNS-Einträge haben, müssen diese
  separat konfiguriert werden – oder die Liste wird entfernt, wenn nur SEO-Zweck.
- **Wix-Branding entfernt** (Footer-Hinweise „Wix.com Website Builder" etc.).
- **Datenschutz:** Erwähnt weiterhin Google Analytics. Falls Sie auf Strato
  kein Analytics einsetzen, sollte dieser Absatz angepasst oder entfernt werden.

---

## Was NICHT übernommen wurde

- **Kontaktformular:** Das Wix-Original hatte vermutlich ein Formular (über die
  Wix-Backend-Logik). Reines statisches HTML auf Strato kann keine Formulare
  verarbeiten. Optionen:
  1. Verzicht auf Formular – nur E-Mail-Adresse anzeigen (aktuell so umgesetzt)
  2. Drittanbieter-Formular einbinden (z. B. [formspree.io](https://formspree.io),
     kostenlos für wenige Anfragen pro Monat)
  3. Auf Strato-Tarif mit PHP wechseln und PHP-Mailer verwenden

- **Wix-Analytics / Statistiken**

- **Cookie-Banner:** Falls Sie kein Tracking einsetzen, ist auch kein Banner nötig.

---

Erstellt am: Mai 2026

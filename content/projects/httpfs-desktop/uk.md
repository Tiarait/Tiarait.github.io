# HTTP FS (Desktop)

HTTP FS (Desktop) переносить ідею локального файлового обміну з Android‑додатка **HTTP FS** на **macOS** і **Windows**.

Це HTTP/HTTPS сервер для обміну файлами між користувачами в Wi‑Fi або локальній мережі. Працює як локальний HTTP файловий сервер: оберіть папку на машині, запустіть сервер і дайте іншим посилання або QR‑код. Клієнти відкривають сторінку у звичайному браузері — окремий клієнтський додаток на їхньому боці не потрібен.

## Що можна робити

- Запускати сервер у Wi‑Fi або дротовій LAN
- Обирати будь‑яку доступну папку для шарингу
- Ділитися доступом через URL або QR‑код
- Перекидати фото, відео, документи й проєктні папки між комп’ютерами та телефонами в одній мережі
- Використовувати як легку альтернативу флешкам або хмарним завантаженням для локальних передач

## Де взяти

- [GitHub Releases](https://github.com/Tiarait/HTTP-FS-Desktop/releases) — у описі релізу є примітки VirusTotal для опублікованих бінарників
- [Папка MEGA](https://mega.nz/folder/gE4yUarB#cQ1MnVDnEow2I9TN-RWLjw) — альтернативні завантаження

> Примітка щодо Windows beta: у `HttpFS-beta.win-x64.exe` можуть не працювати thumbnails; VirusTotal вважає опублікований білд безпечним (див. release notes).

## Статус проєкту

Частина проєкту ще в **WIP**. Якщо з’явиться інтерес або підтримка, план — доробити решту й можливо перейти на **Electron** (інсталятори ~300 MB — ще під питанням через розмір).

## Запуск з вихідників (Node)

```bash
git clone https://github.com/Tiarait/HTTP-FS-Desktop.git
cd HTTP-FS-Desktop
npm i
npm run start
```

## Пов’язане

- Android‑додаток (телефони, планшети, TV): [HTTP FS у Google Play](https://play.google.com/store/apps/details?id=tiar.ua.slf)
- Android‑код: [HTTP-FS-file-server](https://github.com/Tiarait/HTTP-FS-file-server)
- Демо Android‑продукту: [YouTube](https://www.youtube.com/watch?v=inPCdfxVXMg)

## Ліцензія

AGPL-3.0 — див. [репозиторій](https://github.com/Tiarait/HTTP-FS-Desktop/).

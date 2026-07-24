# Playwright Image Translator

Пакетний переклад відсканованих зображень і документів через веб‑інтерфейс **Google Translate → Images**, повністю автоматизовано з **Playwright**.

## Навіщо цей проєкт

Google Translate зараз — один із найкращих безкоштовних інструментів для перекладу **зображень** і цілих сторінок: OCR + нейронний переклад добре справляється з «брудними» сканами, змішаними макетами й рідкісними мовами (наприклад грузинською) — і малює переклад прямо поверх оригінального зображення.

Проблема: **Google не дає публічного API для перекладу зображень.** Функція [перекладу зображень](https://translate.google.com/?op=images) існує лише у веб‑UI, по одному файлу, з ручним циклом upload → wait → download. Перекладати кількасот сторінок книжки вручну — довго й виснажливо.

Цей проєкт закриває розрив. Він керує реальним веб‑UI Google Translate через Playwright і перетворює ручний цикл на автоматичний пайплайн без нагляду.

## Що отримуєте

- **Масовий переклад без нагляду** — кинули зображення в папку, забрали перекладені копії
- **Дзеркальний вивід** — кожен результат зберігає точний відносний шлях і ім’я файлу з дерева джерела
- **Можливість продовжити** — уже перекладене пропускається; можна зупинити й стартувати знову
- **Паралельні воркери** — 1–32 вікна браузера зі спільною атомарною чергою, щоб файл не оброблявся двічі
- **Опційні проксі** — HTTP(S) проксі по колу на воркер (з `direct` для власного IP); адреси маскуються в терміналі й не світяться в аргументах процесу
- **Контроль якості** — завантажені файли перевіряються, погані результати повторюються автоматично
- **Живий прогрес** — один прогрес‑бар із відсотком, швидкістю й ETA; детальні логи пишуться на диск
- **Акуратне завершення** — чистий `Ctrl+C`, локи воркерів із heartbeat, cooldown і звіти в `failures.jsonl`

## Як працює

1. Сканує `data/source/` на зображення, яких немає (або які не пройшли QC) у `data/translated/`
2. Воркер атомарно бере файл через лок у `runtime/queue/locks/`
3. Chromium (Playwright) відкриває Google Translate Images і завантажує файл
4. Чекає перекладений overlay, коротко «встоюється», потім зберігає результат
5. QC перевіряє вивід; до 3 спроб, далі cooldown + запис у `failures.jsonl`
6. Лок звільняється, береться наступний файл

> Це автоматизація **публічного веб‑UI**, не офіційного API. Можливі CAPTCHA, ліміти й зміни UI. Користуйтеся відповідально в межах Terms of Service Google.

## Вимоги

- **Python 3.11+**
- **Playwright** (Chromium) — автоматизує браузер
- **Pillow** — використовується в `fix_suspicious.py`

## Встановлення (коротко)

```bash
git clone https://github.com/Tiarait/playwright-image-translator.git
cd playwright-image-translator
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
playwright install chromium
cp config.example.json config.json
cp proxy.example.txt proxy.txt   # опційно
```

## Використання (коротко)

```bash
mkdir -p data/source
# покладіть зображення в data/source/ (підпапки дозволені)
source .venv/bin/activate
python translate.py            # воркери / шляхи / проксі з config.json
```

## Документація

- Короткий README: [репозиторій](https://github.com/Tiarait/playwright-image-translator)
- Детальний англійський гайд: [README.en.md](https://github.com/Tiarait/playwright-image-translator/blob/main/README.en.md)
- Інтерактивна документація: [DeepWiki](https://deepwiki.com/Tiarait/playwright-image-translator)

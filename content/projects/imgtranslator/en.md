# Playwright Image Translator

Batch-translate scanned images and documents through the **Google Translate → Images** web interface, fully automated with **Playwright**.

## Why this project exists

Google Translate is currently one of the best freely available tools for translating **images** and whole pages: its OCR + neural translation handles messy scans, mixed layouts, and rare languages (for example Georgian) far better than most alternatives — and it renders the translation directly on top of the original image.

The catch: **Google does not offer a public API for image translation.** The [image translation feature](https://translate.google.com/?op=images) exists only in the web UI, one file at a time, with a manual upload → wait → download loop. Translating a few hundred scanned book pages by hand is slow and mind-numbing.

This project closes that gap. It drives the real Google Translate web UI with Playwright and turns the manual loop into an unattended pipeline.

## What you get

- **Bulk, unattended translation** — drop images in a folder, come back to translated copies
- **Mirrored output** — every result keeps the exact relative path and filename from the source tree
- **Resumable** — already-translated files are skipped; stop and restart anytime
- **Parallel workers** — run 1–32 browser windows sharing one atomic queue, so no file is processed twice
- **Optional proxies** — round-robin HTTP(S) proxies per worker (with `direct` for your own IP); addresses are masked in the terminal and never leaked via process args
- **Quality control** — downloaded files are checked and bad results are retried automatically
- **Live progress** — a single progress bar with percent, speed and ETA; detailed logs go to disk
- **Graceful lifecycle** — clean `Ctrl+C`, per-worker locks with heartbeat, cooldowns, and failure reports in `failures.jsonl`

## How it works

1. Scan `data/source/` for images missing (or failing QC) in `data/translated/`
2. A worker atomically claims a file via a lock in `runtime/queue/locks/`
3. Chromium (Playwright) opens Google Translate Images and uploads the file
4. It waits for the translated overlay, settles briefly, then downloads the result
5. QC validates the output; up to 3 attempts, then a cooldown + `failures.jsonl` entry
6. The lock is released and the next file is claimed

> This automates the **public web UI**, not an official API. CAPTCHAs, rate limits, and UI changes are possible. Use responsibly and within Google’s Terms of Service.

## Requirements

- **Python 3.11+**
- **Playwright** (Chromium) — automates the browser
- **Pillow** — used by `fix_suspicious.py`

## Installation (short)

```bash
git clone https://github.com/Tiarait/playwright-image-translator.git
cd playwright-image-translator
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
playwright install chromium
cp config.example.json config.json
cp proxy.example.txt proxy.txt   # optional
```

## Usage (short)

```bash
mkdir -p data/source
# put images into data/source/ (subfolders OK)
source .venv/bin/activate
python translate.py            # workers / paths / proxies from config.json
```

## Docs

- Short README: [repository](https://github.com/Tiarait/playwright-image-translator)
- Detailed English guide: [README.en.md](https://github.com/Tiarait/playwright-image-translator/blob/main/README.en.md)
- Interactive docs: [DeepWiki](https://deepwiki.com/Tiarait/playwright-image-translator)

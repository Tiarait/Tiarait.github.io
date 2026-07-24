# M3U Tools — User Guide

**M3U Tools** is an Android app for importing, editing, organizing, and exporting IPTV playlists in M3U/M3U8 format. Use it to fix channel names and groups, clean duplicates, check stream URLs, refresh from a remote source, and export a file for your player.

All playlist data stays on your device. The app does not require an account.

---

## Why use M3U Tools?

| Advantage | What it means for you |
|-----------|------------------------|
| **Keeps your source file** | Original M3U formatting, unknown tags, and lines like `#KODIPROP` are preserved where possible. Edits patch the existing block instead of rewriting everything. |
| **Fields + Raw editing** | Edit channels and playlist headers in structured forms, or switch to raw M3U text when you need full control. |
| **Large playlists** | Channel lists stay responsive because the app does not load full raw text for every row in the list. |
| **URL-based playlists** | Import from a URL, refresh when the provider updates the list, and review changes before applying. |
| **Stream URL checker** | Run checks in the background and filter channels by OK / Error / Unchecked. |
| **Power tools** | Merge playlists, find duplicates, bulk edit, reorder, hide groups, move or copy channels between playlists. |
| **Export anywhere** | Save to a file, share via another app, or copy generated text. |

---

## Free version and M3U Tools Pro

The app is free to use with optional **M3U Tools Pro** (monthly subscription or one-time lifetime purchase in **Settings → Support**). Prices are loaded from Google Play.

### Free limits

| Playlists you already have | Adding another playlist |
|----------------------------|-------------------------|
| **1–3** | Free |
| **4–6** | You may be asked to watch a **short rewarded video**, unless ads are disabled for this session (see below) |
| **7 or more** | Not available on the free plan — upgrade to **Pro** for unlimited playlists |

These limits apply when you **import**, **create**, or **duplicate** a playlist.

### Pro benefits

Open **Settings → Support → View Pro benefits** for the full list. Pro includes:

- **No ads**
- **Unlimited playlists**
- More features planned

After purchase, **Pro active** is shown in Settings.

### Ads (free version only)

In **Settings → Support** you can:

- **Watch an ad video** — optional; disables ads for the **current app session** and skips the playlist-add video gate for playlists 4–6
- **Ad privacy settings** — manage ad consent where required by your region (may be unavailable outside EEA/UK)

Pro users and the separate Pro app build do not show the Support/ads section.

---

## Getting started

### Add a playlist

On the main **Playlists** screen, tap **+ Add playlist** and choose:

1. **Import from URL** — paste an `http://` or `https://` link. The app can probe the URL before import. Recent URLs are remembered.
2. **Import from file** — pick a local `.m3u` / `.m3u8` file.
3. **Empty playlist** — start from scratch and add channels manually.

You can also open an M3U file from another app (**Share** / **Open with**) if M3U Tools is available as a handler.

### Open a playlist

Tap a playlist card to open **Playlist detail** — your channel list with search, filters, and actions.

Filter playlists on the main screen by **All**, **URL**, or **Device** (file-based) sources.

### Delete a playlist

Use the **⋮** menu on a playlist card or swipe left (if swipe actions are enabled). You will be asked to confirm — the playlist and all its channels are removed permanently.

---

## Playlist detail

### Top bar

- **Search** — filter channels by name, group, or URL.
- **Export** — export to file, share file, or copy as text (very large playlists may suggest file export instead of copy).
- **Overflow menu (⋮)**:
  - Open with… / Rename / Duplicate
  - **Refresh** — for URL-sourced playlists: download remote file, show diff preview, apply selected changes
  - **Check URLs** / stop URL check
  - **Find duplicates**
  - **Reorder channels**
  - **View raw M3U**
  - **Playlist header** — edit `#EXTM3U` / `#PLAYLIST` block

### Filters

- **Group chips** — filter by `group-title`; long-press a group for rename, hide/show group, select channels, or delete group.
- **Status chips** — All, OK, Error, Checking, Unchecked, Unknown (after URL checks).
- **Hidden channels** — controlled in Settings (show or hide channels marked hidden).

### Channel list

Each row shows name, group, optional logo (`tvg-logo`), position tag `#N` in sort mode, and URL-check status.

**Tap behavior** is configurable in Settings: channel actions sheet, selection mode, open in external player, or edit.

**Swipe actions** (Settings → Swipe actions): swipe right to edit, swipe left to delete (on channels and on the Playlists screen).

**Long-press** a channel to enter selection mode for bulk operations.

### Selection mode

When one or more channels are selected:

- Bulk edit (name, group, TVG fields, catchup tags, etc.)
- Move to group / set position
- Check URLs for selection
- Hide / show
- Move or copy to another playlist
- Delete (with undo snackbar when enabled)

### FAB (floating action)

- **Add channel** — manual entry with full field/raw editor.
- **URL check** — opens the background URL check panel (see below).

---

## Editing a channel

Open via tap (if configured), swipe-right, bulk edit, or **Add channel**.

### Fields tab

Collapsible sections:

- **Basic info** — name, stream URL, group (with picker from existing groups).
- **Catch-up / time shift** — `catchup`, `catchup-days`, `catchup-source`, `timeshift`, etc.
- **TVG metadata** — EPG matching fields and logo URL (live preview).
- **Advanced** — User-Agent, Referrer, radio flag.
- **Custom #EXTINF tags** — any extra attributes (e.g. `tvg-rec`, `parent-code`).

**Edit raw** at the bottom switches to the Raw tab with fields synced into M3U text.

### Raw tab

Edit the full channel block (`#EXTINF` line, optional middle lines, URL line). Syntax highlighting helps read the text. Invalid M3U blocks show a parse error on save.

Lines between `#EXTINF` and the URL (e.g. `#KODIPROP`) are preserved from the original import when you edit via Fields; change them in **Raw** if needed.

### Unsaved changes

If you changed anything, **swiping the sheet down** or closing it asks **Discard changes?** — **Continue editing** keeps the sheet open, **Discard** closes without saving.

Controlled by **Settings → Safety confirmations** (same for playlist header — see below).

---

## Playlist header

Edit the block before the first `#EXTINF`:

- Playlist name (`#PLAYLIST`, `playlist-name` on `#EXTM3U`)
- EPG URL (`x-tvg-url`, `url-tvg`, `tvg-url`)
- Time shift (`tvg-shift`)
- Playlist logo
- Catchup/timeshift on header
- Custom `#EXTM3U` tags
- **Header presets** — quick templates (e.g. Xtream-like catchup)
- **Fields / Raw** tabs — same pattern as channel edit

In **Raw**, type normal M3U attribute syntax, for example:

```text
#EXTM3U x-tvg-url="https://example.com/epg.xml"
#PLAYLIST:My List
```

Closing the header sheet with unsaved edits shows the same **Discard changes?** dialog as channel edit (when safety confirmations are enabled).

---

## Reorder and sort

**Reorder channels** (overflow menu):

- Drag handles to move rows
- Tap a channel → **Set position**
- **Sort options** — preview sort by name or group (A→Z / Z→A); original order is restored from saved order until you tap ✓ to save

Unsaved reorder changes prompt before exit.

---

## Find duplicates

Detect duplicates **by name**, **by URL**, or **name + URL**.

- Select extra entries manually and delete
- **Keep first only** — removes duplicates, keeps the first channel in each group (by saved order)

---

## Refresh playlist (URL sources)

1. Menu → **Refresh** downloads the remote M3U.
2. **Review playlist update** shows file hash/size, channel count change, and tabs: Added / Removed / Changed.
3. Tap a changed channel for field-by-field diff.
4. Apply mode:
   - **Replace entire playlist**
   - **URLs only**
   - **Add new only**
   - **Update URLs & add new**
   - **Skip update**

A progress dialog appears while changes are applied.

---

## URL check

Start from selection, overflow menu, or the **URL check** FAB on playlist detail.

**Setup sheet:**

- **Success criteria** — Strict 2xx (recommended for IPTV), Reachable (not 404), or Any HTTP response
- **Probe method** — try HEAD first, fallback to GET (with optional Range)
- **Timeout** — per session (default 10 seconds; default can be adjusted in app settings where available)

Checks run **inside the app** while it is open (or in memory for the session):

- Tap the **URL check** FAB again to see active and finished checks
- **Pause / Resume**, **Minimize**, or remove a session from the list
- Open a session to browse channels by status and edit individual entries
- Channel rows update with OK / Error / Checking / Unknown status

There are **no system notifications** for URL check — open the app and use the URL check button to see progress and results.

---

## Raw M3U screen

**View raw M3U** opens a full-screen editor with two modes:

| Mode | Content |
|------|---------|
| **Generated** | Built from your edits in the database (export-ready) |
| **Source file** | Original file saved at import (unchanged by edits) |

Features: search with match navigation, line/channel stats, save generated text back to the playlist.

Building a very large generated file shows a progress dialog.

---

## Export and share

From playlist detail → Export:

- **Export to file…** — system save dialog
- **Share file…** — send `.m3u` to another app
- **Copy as text** — clipboard (size limit applies)

Exported files use preserved formatting when the app has stored per-channel raw text from import.

---

## Merge playlists

On the **Playlists** screen, long-press or enter selection mode, pick **2+ playlists**, then **Merge playlists**.

- Target: new merged playlist or an existing one
- Optional: delete source playlists after merge (channels are always copied, not moved)
- Result summary: added, updated, skipped, conflict copies

---

## Settings

Open via the gear icon on the Playlists screen.

### Theme

System, Light, or Dark.

### Language

System default, English, Русский, Українська. Changing language recreates the activity.

### Channels

| Setting | Description |
|---------|-------------|
| **Swipe actions** | Swipe right = edit, swipe left = delete |
| **Show channel logo** | `tvg-logo` thumbnail in the list |
| **Show hidden channels** | Include channels marked hidden |

### Channel tap action

| Option | Behavior |
|--------|----------|
| **Channel actions** | Opens actions sheet (default); ⋮ menu hidden |
| **Select channel** | Enters selection mode |
| **Open in player…** | Sends stream URL to an external app |
| **Edit** | Opens edit sheet |

### Behaviour

| Setting | Description |
|---------|-------------|
| **Safety confirmations** | Confirm delete, discard unsaved edits (channel, playlist header, bulk edit), and similar actions |
| **Haptic feedback** | Vibration on selection and swipe |

### Support (free version)

| Item | Description |
|------|-------------|
| **M3U Tools Pro** | Subscribe monthly or buy lifetime; prices from Google Play |
| **View Pro benefits** | Full list of Pro perks |
| **Watch an ad video** | Optional; disables ads for this session |
| **Ad privacy settings** | Ad consent (where applicable) |

### About

| Item | Description |
|------|-------------|
| **Contact** | Opens your email app (confirmation shown before leaving the app) |
| **Privacy policy** | Opens in browser or shows in-app summary |
| **User guide** | Opens this guide online (confirmation before opening the browser) |
| **Version** | Installed app version |

Links and email ask **Leave app?** before opening an external app or browser.

### Danger zone

**Reset all data** — deletes all playlists, cached M3U files, image cache, stops URL checks, and restores default settings. Cannot be undone.

---

## Tips and limitations

- **Player app** — M3U Tools edits playlists; it does not play streams itself (except launching URLs in another app).
- **Parse warnings** — if some lines fail to import, a dialog lists line numbers; valid channels are still saved.
- **Undo** — deleting channels or playlists may offer an undo snackbar at the bottom of the screen.
- **Private data** — playlists may contain credentials in URLs. Database and M3U files are excluded from cloud backup by default.
- **Very large playlists** — browse mode is optimized; reorder mode loads the full list once.
- **Network** — import, refresh, URL check, and logo preview need internet for remote URLs. Only use sources you trust.
- **Early release** — some features may still evolve; feedback is welcome via Contact in Settings.

---

## Quick reference — supported M3U features

### Playlist header

`#EXTM3U`, `#PLAYLIST`, EPG URL, `tvg-shift`, logo URLs, catchup/timeshift attributes, custom header tags.

### Channel entry

`#EXTINF` with standard and custom attributes, stream URL, preserved middle lines, catchup/timeshift on channel, User-Agent / Referrer / radio flag.

---

## Support

For questions and feedback: **Settings → About → Contact** (`tiar.develop@gmail.com`).

Privacy details: **Settings → About → Privacy policy**.

**Version:** see **Settings → About** (APK builds are named `M3U_TOOLS_<version>_<type>.apk`).

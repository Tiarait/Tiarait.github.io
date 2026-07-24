# HTTP FS (Desktop)

HTTP FS (Desktop) brings the same local file-sharing idea as the Android **HTTP FS** app to **macOS** and **Windows**.

This is an HTTP/HTTPS server for sharing files between users on a Wi‑Fi or local network. It works like a local HTTP file server: pick a folder on the machine, start the server, and give others a link or QR code. Clients open the page in a regular browser — no special client app required on their side.

## What you can do

- Run a server on Wi‑Fi or a wired LAN
- Select any available folder to share
- Share access via URL or QR code
- Move photos, videos, documents, and project folders between computers and phones on the same network
- Use it as a lightweight alternative to USB sticks or cloud uploads for local transfers

## Get the app

- [GitHub Releases](https://github.com/Tiarait/HTTP-FS-Desktop/releases) — published binaries include VirusTotal notes in the release description
- [MEGA folder](https://mega.nz/folder/gE4yUarB#cQ1MnVDnEow2I9TN-RWLjw) — alternate downloads

> Note from the Windows beta build: `HttpFS-beta.win-x64.exe` may not show thumbnails; VirusTotal still treats the published build as safe (see release notes).

## Project status

Parts of the project are still **WIP**. If there is enough interest or support, the plan is to finish remaining work and possibly switch the shipping build to **Electron** (installers would be around ~300 MB — still under consideration because of size).

## Run from source (Node)

If you prefer running from the repository:

```bash
git clone https://github.com/Tiarait/HTTP-FS-Desktop.git
cd HTTP-FS-Desktop
npm i
npm run start
```

## Related

- Android app (phones, tablets, TV): [HTTP FS on Google Play](https://play.google.com/store/apps/details?id=tiar.ua.slf)
- Android source: [HTTP-FS-file-server](https://github.com/Tiarait/HTTP-FS-file-server)
- Demo of the Android product: [YouTube](https://www.youtube.com/watch?v=inPCdfxVXMg)

## License

AGPL-3.0 — see the [repository](https://github.com/Tiarait/HTTP-FS-Desktop/).

# HTTP FS – Settings Guide
#### Legacy note (v 1.1.20)

---

## Overview

When you open **Settings**, you will see **three main categories**:

1. **App settings** – how the application itself behaves (language, startup, logs, UI, permissions).
2. **Server settings** – how the file server works (interfaces, security, paths, users, redirects, blocked IPs).
3. **Client settings** – how web clients see your server (language, welcome message, hidden files, battery options, About/Help).

---

## 1. App Settings

### 1.1 Select Language

Changes the language of the application interface.

- **Available options**: Default (system language), Bulgarian, German, Dutch, English, Spanish, French, Hindi, Japanese, Korean, Polish, Portuguese, Brazilian Portuguese, Ukrainian, Vietnamese, Chinese.
- **Default**: System language.
- The app restarts its settings screen after you change the language.

### 1.2 Start server with device

If enabled, HTTP FS tries to start the file server automatically when the device is turned on or rebooted.

- **Default**: OFF.
- On some manufacturers (Xiaomi, Huawei, Oppo, Vivo, Honor, Asus, Nokia, Letv) you may need to manually allow auto‑start in the system settings. The app can open the appropriate system screen for you.

### 1.3 Start server with app

If enabled, the server starts automatically as soon as you open the app.

- **Default**: OFF.
- If disabled, you must press the **Start** button on the main screen.

### 1.4 Logs

Turns on/off writing request logs.

- **Default**: ON.
- Logs are useful for debugging problems and checking what clients do.

### 1.5 All logs

**Visible only when "Logs" is enabled.**

If enabled, the app writes **all** requests to the log.

- **Default**: OFF.
- If disabled, the app may skip some less important entries.
- More logs can use more storage space and slightly more CPU.

### 1.6 Haptics vibration

Enables vibration feedback for some UI actions.

- **Default**: OFF.

### 1.7 Blur in dialogs

Adds a blur effect behind dialogs.

- **Default**: ON (Android 12+), OFF (older versions).
- Purely visual; may use a little more GPU/CPU.

### 1.8 Ads & privacy

**Free version only.**

Opens a screen where you can manage:
- Personalized ads (based on your activity)
- Non‑personalized ads

Here you can change your privacy and consent options for advertising.

### 1.9 Disable ads (rewarded)

**Free version only.** Available on the main **Settings** screen (right after **About**).

Watch one **rewarded ad** to hide the banner and full‑screen ads when starting/stopping the server. The break lasts until you restart the app or for **up to 8 hours**, whichever comes first.

If the ad cannot be loaded, try again later when you have a network connection.

### 1.10 Battery permissions

Helps you disable system battery optimizations for HTTP FS.

- **Default**: OFF.
- If enabled and available on your device, the app can request special permission so the server is less likely to be stopped by the system.
- **Supports**: HTC, Huawei, Meizu, Oppo, Samsung, Xiaomi/Poco/Redmi, ZTE, Letv and generic Android.

### 1.11 Permissions for folders

Opens the system dialog **"Select a folder"**.

- You must grant access here if you want the server to read/write on external SD cards or some protected directories.
- Without this permission, the app may not be able to write files in some locations.

### 1.12 Clear app data

At the bottom of **App settings**, in the **Data** category.

Permanently deletes all app settings, cache, and local data, then restarts the app. Your files on the device (photos, documents, etc.) are **not** deleted — only HttpFS configuration and cache inside the app.

---

## 2. Server Settings

### 2.1 WebDAV

Enables or disables the WebDAV interface.

- **Default**: ON.
- The summary line shows the WebDAV URL, for example: `http://192.168.0.10:8080/webdav/` or `https://...` if HTTPS is enabled.
- Use this address in WebDAV clients (Windows, macOS Finder, file managers, etc.).
- Can be toggled while the server is running.

### 2.2 RSS

Enables or disables the RSS feed interface.

- **Default**: ON.
- The summary line shows the RSS URL, for example: `http://192.168.0.10:8080/rss/`.
- Can be toggled while the server is running.

### 2.3 Name

Logical name of the server, used in some places in the UI.

- **Default**: "HTTP FS".
- **Pro version only.**
- Can only be changed when the server is stopped.

### 2.4 IP

Selects which network interface the server uses (Wi‑Fi, USB tethering, Ethernet, etc.).

- **Default**: Auto (first available network interface).
- The summary shows the current IP address.
- Changing it will restart the server if it's running.
- Can only be changed when the server is stopped.

### 2.5 PORT

Network port where the server listens.

- **Default**: 8080.
- If another app already uses this port, choose a different one.
- Can only be changed when the server is stopped.

### 2.6 Path to folder

Sets the **root directory** of your server.

- **Default**: Internal storage root (`/storage/emulated/0/`).
- All files and folders under this path will be visible to clients (except hidden ones).
- When you pick an external SD card or special storage, the app may ask you to grant write access.
- Can only be changed when the server is stopped.
- The summary shows a simplified path:
  - `/` = device root
  - `/[storage]` = internal storage
  - `/[sd card] name` = external SD card
- **All storages** (multi-volume mode): in **Path to folder**, go up one level from `[storage]` to the volume list (`/`) and tap **OK**. Server root becomes a virtual list of volumes. URLs look like `/files/storage/Documents/...` for internal memory and `/files/{uuid}/...` for SD cards. Use **Storage permissions** under App settings to grant SAF access to removable volumes. Skipping a volume in the wizard does not block server start.
- When **All storages** is already enabled, reopening **Path to folder** starts at the volume list (`/`), not at a single folder — tap **OK** there again to keep multi-volume mode.

### 2.6.1 Storage permissions (App settings)

Opens the volume permission wizard for SD cards and removable storage (SAF grants). Use after enabling **All storages** or when a volume was unplugged and needs re-granting.

### 2.7 Initial file (enable)

Turns using the initial file on or off.

- **Default**: OFF.
- Can only be changed when the server is stopped.

### 2.8 Path to file

**Visible only when "Initial file" is enabled.**

Choose a specific file inside the root folder that should open first.

- **Default**: empty.
- Can only be changed when the server is stopped.

### 2.9 Hard redirect

**Visible only when "Initial file" is enabled.**

If enabled, visitors to your server root are always redirected to the chosen file (for example, an `index.html` homepage).

- **Default**: OFF.
- If disabled, the server may only use the file in some cases and still allow browsing the folder.
- Can only be changed when the server is stopped.

### 2.10 Server type

Chooses which internal engine is used.

- **Available options**:
  - **Auto** – chooses the best type automatically.
  - **CIO** – coroutine‑based engine (good for many normal cases).
  - **Netty** – alternative engine, can behave differently under high load.
- **Default**: Auto.
- Can only be changed when the server is stopped.
- **When SSL/HTTPS is enabled**, this is automatically set to **Netty** and cannot be changed.

### 2.11 Buffer Size

Controls internal buffer size for file transfers.

- **Default**: 8192 bytes (8 KB).
- **Larger buffer** = potentially faster transfers but more memory usage.
- **Smaller buffer** = less memory, can be slightly slower.
- You can use **RESET / Recommended** to go back to safe defaults.

### 2.12 Blocked IP Addresses

Opens the **Blocked IPs** screen where you can completely deny access from specific IP addresses.

- **Default**: 0 blocked IPs.
- Summary shows the number of blocked IP addresses.
- In the **free version** you can block only a **limited number** of IPs.
- The **Pro version** removes this limit.

**How to use:**
- Tap **Add** to enter a new IP address (e.g., `192.168.1.100`).
- Tap any existing entry to edit or delete it.
- Blocked clients cannot connect to the server at all — the connection is rejected immediately.
- Useful for banning unwanted or suspicious clients from your network.
- Changes take effect immediately without restarting the server.

### 2.13 Redirects

Opens the **Redirects** screen where you create rules that send visitors from one path or URL to another.

- **Pro version only.**
- Marked as **TEST** (experimental feature).
- Allows creating URL redirect rules.

**How to use:**
- Tap **Add** to create a new redirect rule.
- Enter **From** — the source path or URL that triggers the redirect.
- Enter **To** — the destination path or URL where visitors will be sent.
- Choose **Type** — how the redirect should work (internal path, external URL, etc.).
- Tap any existing redirect to edit or delete it.

**Example uses:**
- Redirect `/` to `/index.html` for a homepage.
- Redirect `/photos` to another folder or external site.
- Create short links or aliases for long paths.

### 2.14 Use password

Main security switch.

- **Default**: OFF.
- When enabled, access to the server requires a username and password.
- When disabled, anyone on the same network can access the server (unless blocked by IP or other means).
- Can only be changed when the server is stopped.

### 2.15 Users

**Visible only when "Use password" is enabled.**

Opens the **Users** screen where you can manage multiple user accounts with different permissions.

- There you can manage user accounts for password‑protected access.
- Each user can have different permissions (read‑only or read‑write).
- Can only be changed when the server is stopped.

**How to use:**
- Tap **Add** to create a new user account.
- Enter **Login** — the username for this account.
- Enter **Password** — the password for this account.
- Select **Permissions**:
  - **READ** — user can browse and download files only.
  - **WRITE** — user can upload, rename, move, and delete files.
  - **READ + WRITE** — full access.
- Tap any existing user to edit their credentials or permissions.
- You can delete users, but at least one user should remain when password protection is enabled.
- WebDAV clients will prompt for username and password when connecting.

### 2.16 Session time (min)

**Visible only when "Use password" is enabled.**

How long a login session stays valid.

- **Default**: 60 minutes.
- After this time, clients may need to log in again.
- Can only be changed when the server is stopped.

### 2.17 Logout

**Visible only when "Use password" is enabled.**

Forces all currently logged‑in users to be logged out.

- Useful if you changed passwords or want to disconnect everyone.
- This action is immediate and does not require stopping the server.

### 2.18 Permissions (global)

**Visible only when "Use password" is disabled.**

Multi‑select option that controls what anonymous visitors are allowed to do.

- **Available options**:
  - **Read** – they can list and download files.
  - **Write** – they can upload, rename, move and delete files (dangerous if you share your network).
- **Default**: Read only.
- Can only be changed when the server is stopped.

### 2.19 SSL (https)

Enables or disables HTTPS.

- **Default**: OFF.
- Can only be changed when the server is stopped.
- When enabled:
  - The server uses `https://` URLs.
  - **Server type** is automatically set to **Netty** and cannot be changed.
  - WebDAV and RSS URLs in summaries are updated to use HTTPS.
  - The app generates a self‑signed certificate automatically.

### 2.20 Certificate

**Visible only when "SSL" is enabled.**

Placeholder for automatic certificate management.

- Currently shows **"Under development"** and is disabled.
- Future feature for Let's Encrypt or other certificate providers.

### 2.21 Cache certificate

**Visible only when "SSL" is enabled.**

When using HTTPS, controls whether the certificate is cached on disk.

- **Default**: ON.
- If enabled, the certificate is saved and reused between server restarts.
- If disabled, a new certificate is generated each time.
- Can only be changed when the server is stopped.

### 2.22 Export certificate

**Visible only when "SSL" is enabled.**

Lets you export the server certificate to a file named `HttpFS_certificate.pem`.

- You can import this file on client devices so they trust the HTTPS connection.
- Opens a file picker to choose where to save the certificate.

---

## 3. Client Settings

### 3.1 Name

Display name of the client/device, used in some places in the UI.

- **Default**: "HTTP FS".

### 3.2 Welcome dialog message

Enables or disables showing the welcome dialog to visitors.

- **Default**: OFF.
- When enabled, a text field appears below where you can edit the message.

### 3.3 Welcome dialog text

**Visible only when "Welcome dialog message" is enabled.**

Multi‑line text that is shown to visitors as a welcome message.

- **Default**: empty.
- You can write any information – rules, contact email, donation link, etc.
- **Pro version only.**

### 3.4 Hide files

Opens a separate screen where you can control which paths are invisible to clients.

- **Default**: empty (no hidden files).
- You can add files/folders to the hidden list.
- When a path is in the hidden list:
  - It is not shown in the web interface.
  - It is not listed in WebDAV responses.
  - Direct access may be blocked depending on configuration.
- This is useful for hiding private folders without changing your actual filesystem structure.
- Hidden files are checked on every request, so changes take effect immediately.

**How to use:**
- Tap **Add** to open the file/folder picker.
- Navigate to and select the file or directory you want to hide.
- The full path is added to the hidden list.
- Tap any entry in the list to remove it from the hidden list.
- Hidden paths are relative to your server root folder.

**Example uses:**
- Hide system folders like `.git`, `.cache`, or `Android/data`.
- Hide personal documents or photos while sharing other files.
- Hide configuration files or sensitive data.
- Create a "public" folder structure while keeping everything else private.

### 3.5 Get size of folder

If enabled, the server calculates the total size of folders when listing them.

- **Default**: OFF.
- More informative, but requires extra disk reads and CPU, especially on large trees.
- Summary shows: **"Battery expense"**.

### 3.6 Get thumbnails

If enabled, the app generates image/video thumbnails for the web interface.

- **Default**: OFF.
- Looks nicer but can use more CPU, memory and battery.
- Summary shows: **"Battery expense"**.

### 3.7 Clear cache

**Visible only when "Get thumbnails" is enabled.**

Shows how much space the thumbnail/cache folder uses.

- Tap to clear it and free storage.
- Summary shows the current cache size (e.g., "512 KB", "2.3 MB").
- After clearing, the size resets to **0 bytes**.

### 3.8 Check connection socket

Periodically checks whether client connections are still alive.

- **Default**: OFF.
- Can help detect dead connections and clean them up, at a small CPU cost.
- Summary shows: **"Battery expense"**.

---

## 4. Tips for Safe Use

### Security Best Practices

- **Password protection**: If you **disable password protection**, remember that everyone on your local network can see your shared files. Always enable it when sharing on public or untrusted networks.
- **HTTPS (SSL)**: Use **HTTPS (SSL)** when you access the server over untrusted networks (for example public Wi‑Fi). This encrypts all traffic between clients and your server.
- **Strong passwords**: When using password protection, create strong passwords for all user accounts. Avoid simple passwords like "1234" or "password".
- **User permissions**: Give users only the permissions they need. Use **READ** for most users and reserve **WRITE** for trusted users only.
- **Write permissions**: Be careful with **Write** permissions – they allow clients to delete and overwrite your files. Never give write access to untrusted users.

### Network and Access Control

- **Blocked IPs**: Use **Blocked IPs** to ban suspicious or unwanted clients from your network. This is your first line of defense against unauthorized access.
- **Hidden files**: Use **Hidden files** for private folders that should never appear in listings. This is useful for system folders, personal documents, or sensitive data.
- **Session timeout**: Set a reasonable **Session time** (default 60 minutes) to automatically log out inactive users.
- **Logout**: Use the **Logout** button if you suspect unauthorized access or after changing passwords.

### Server Configuration

- **Root folder**: Carefully choose your **Path to folder**. Only share folders that contain files you want to make accessible. Don't share your entire device storage unless necessary.
- **Port selection**: If port **8080** is already in use, choose a different port. Avoid using well‑known ports (80, 443, 22, etc.) unless you know what you're doing.
- **Buffer size**: Keep the default **Buffer Size** (or less) unless you experience performance issues. Larger buffers use more memory.
- **Server type**: Use **Auto** for server type unless you have specific requirements. The app will choose the best engine automatically.

### Battery and Performance

- **Auto‑start**: Be cautious with **Start server with device** – it will drain battery if the server runs continuously. Use it only if you need 24/7 access.
- **Logs**: Disable **Logs** or **All logs** if you don't need them. They use storage space and slightly more CPU.
- **Thumbnails**: **Get thumbnails** looks nice but uses CPU and battery. Disable it on older devices or when battery life is critical.
- **Folder size**: **Get size of folder** requires extra disk reads. Disable it for large folder trees to improve performance.
- **Connection checks**: **Check connection socket** helps clean up dead connections but uses a small amount of CPU. Enable it only if you experience connection issues.

### WebDAV and External Access

- **WebDAV URL**: The WebDAV URL format is `http://YOUR_IP:PORT/webdav/` or `https://...` for SSL. Use this in WebDAV clients like Windows Explorer, macOS Finder, or mobile file managers.
- **RSS URL**: The RSS URL format is `http://YOUR_IP:PORT/rss/`. Use this in RSS readers to monitor file changes.
- **Certificate trust**: When using **SSL (https)** with self‑signed certificates, you need to **Export certificate** and install it on client devices to avoid security warnings.
- **External access**: This app is designed for **local network use**. If you want to access your server from the internet, you need to configure port forwarding on your router and use a dynamic DNS service. **This is not recommended for beginners** due to security risks.

### Troubleshooting

- **Server won't start**: Check if another app is using the same port. Try changing the **PORT** setting.
- **Can't access from other devices**: Make sure all devices are on the same Wi‑Fi network. Check your device's firewall settings.
- **WebDAV not working**: Some WebDAV clients require HTTPS. Enable **SSL (https)** and export the certificate.
- **Slow performance**: Try increasing **Buffer Size**, disabling **Get size of folder** and **Get thumbnails**, or switching to a wired connection.
- **Files not visible**: Check **Hidden files** list. Make sure the files are inside your **Root folder** path.
- **Write operations fail**: Check **Permissions** settings. Make sure you have granted **Permissions for folders** for external SD cards.

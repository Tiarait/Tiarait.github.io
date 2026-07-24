# WebDavFS – Simple Help Guide

This guide explains in **simple language** what WebDavFS does and how to use it.
It is written for non‑technical users.

---

## 1. What is WebDavFS?

WebDavFS turns your Android device into a **local file server**.

- Your phone/tablet becomes a **small file server**.
- Other devices on the **same Wi‑Fi network** (laptop, PC, TV, phone) can open this server.
- You can then **browse, copy and manage files** on your device from those other devices.

Important:

- The server works **only inside your local network** (for example, your home Wi‑Fi).
- Other people **outside** your network (for example, the Internet) **cannot** reach it unless you do complex router settings (not recommended for beginners).

You can think of it as:

> "Turn my phone into a shared folder that I see from my laptop over Wi‑Fi."

---

## 2. First Start – Quick Steps

1. **Connect to Wi‑Fi**
   - Make sure your phone and the other device (laptop/PC/TV) are on the **same Wi‑Fi network**.

2. **Open WebDavFS app**
   - You will see the **home screen** with a big button in the center.

3. **Press the big button**
   - It looks like a **Play** or **Power** button.
   - When you press it the app will try to **start the server**.

4. **Give permissions** (very important)
   - The app may ask for **storage permissions**.
   - Tap **Allow** so the app can see your files.
   - On some devices it may also ask extra permissions for **SD card** or **battery**. Follow the instructions.

5. **Wait for the server to start**
   - The button and text around it will change.
   - When the server is running, you will see an **address** like:
     - `http://192.168.1.10:8080` (for WebDAV/Web interface), or
     - `ftp://192.168.1.10:2121` (for FTP).

6. **Connect from another device**
   - On a **computer**:
     - Open a browser and try the address you see in the app.
     - Or use a WebDAV/FTP client if you know how (see section 6).
   - On another **phone/tablet**:
     - Open a browser and enter the address.

7. **Stop the server when finished**
   - Press the big button again.
   - The status will change to **Stopped**.

---

## 3. What You See on the Home Screen

On the main screen you will usually see:

- **Big Start/Stop button**
  - Starts or stops the server.
- **Server status text**
  - Examples: `Stopped`, `Starting`, `Started`, `Stopping`, or an error.
- **Server address**
  - The link you type into a browser or client on another device.
- **QR code button**
  - Shows a QR code that contains the server address.
  - On another phone, scan the QR code to open the server quickly.

On Android TV the screen looks different but has the same main controls: Start/Stop button, address and QR.

---

## 4. Important Settings (Simple Explanation)

You can open **Settings** from the home screen menu. Below is a simple description of all main options.

### 4.1. Port

- **What it is:** A number used by the server, for example `8080`.
- **Should I change it?** Usually **no**. Change it only if another app uses the same port or if someone instructed you to use a specific port.

### 4.2. Folder / Users

You will see either **Folder** or **Users**, depending on your security settings.

#### 4.2.1. Folder

- **What it is:** The main folder that will be shared over the network.
- **How to use:**
  - Tap it to choose which folder to share.
  - The app might ask for storage permissions → tap **Allow**.
  - If you choose a folder on an **SD card**, the system may ask you to give special access. Choose the SD card root and confirm.

#### 4.2.2. Users

- **What it is:** A list of user accounts that can connect to your server.
- **How to use:**
  - Tap **Users** to open a dialog where you can add users and passwords.
  - This is useful if you want to protect your server with usernames and passwords.

### 4.3. IP

- **What it is:** Tells the server **which network address** to use.
- **Typical choices:**
  - **All** – accept connections from any address on your device.
  - **localhost** – only from the same device (mostly for testing, not for normal use).
  - **IPv4 / IPv6** – use a specific address (usually chosen automatically).
- **For most users:** You can leave the default value.

### 4.4. Server type (WebDAV or FTP)

- **WebDAV:**
  - Works well with web browsers and many apps.
  - Often uses an address like `http://...` or `https://...`.
- **FTP:**
  - Old but common file transfer method.
  - Uses an address like `ftp://...`.

If you are not sure which to choose, **WebDAV** is recommended.

### 4.5. Buffer size (WebDAV only)

- **What it is:** A number that controls how big a data "chunk" is when files are read or written.
- **Effect:** Bigger value can be a little faster for large files but uses more memory.
- **For most users:** Leave the default value. Change it only if you know what you are doing or if someone told you a specific value.

### 4.6. SSL (https)

- **What it is:** A way to encrypt the connection (HTTPS instead of HTTP).
- **Benefit:** Your data is harder to read by someone on the same network.
- **Note:** Some older devices or apps may not like self‑signed certificates. If you have connection problems after enabling SSL, try disabling it.

### 4.7. Web interface and JS client

- **Web interface:**
  - When enabled, you can simply open the server address in a **web browser** and see a file manager page.
- **JS client:**
  - Adds a more advanced file manager built with JavaScript.
  - Turn it off only if you have problems with older browsers.

### 4.8. Use password / Read only

- **Use password (Users):**
  - If you enable this, the server will ask for a **username and password**.
  - This is recommended if the network is shared with other people.

- **Read only:**
  - If read‑only is enabled, other devices **cannot delete or change** your files.
  - Good choice if you only want to **download** files from the phone and never upload/modify.

### 4.9. Hidden files (Pro features)

Some options are available only in the **Pro** version of the app.

- **Select hidden files:**
  - Opens a special screen where you can mark folders or files as **hidden** for the server.
  - Hidden items will not be shown to clients that connect to your server.
  - On newer Android versions this may require special storage permissions.

- **Hide hidden:**
  - When enabled, anything marked as **hidden** will not be visible through the server.
  - Use this if you want to share most files but keep some folders invisible.

### 4.10. Run with app / Run with device

- **Run with app:**
  - The server starts automatically when you open the app.
- **Run with device:**
  - The server tries to start when the device turns on.
  - The system may ask you to change **battery optimization** so the app can run in background.

If you are a beginner, you can **leave these off** and start the server manually with the big button.

### 4.11. Battery optimization (settings item)

- **What it is:** A shortcut that opens the system screen where you can turn off strict battery saving for the app.
- **Why it matters:** If battery optimization is too strict, the system may **stop the server** in the background.
- **For most users:** Use it only if the server keeps stopping by itself while the screen is off.

### 4.12. Storage permissions (settings item)

- **What it is:** A shortcut that checks and requests all storage permissions needed by the app.
- **When to use:** If you see errors about access to files or folders, tap this item and allow all suggested permissions.

### 4.13. Theme and Language

- **Theme:** Choose light, dark or system.
- **Language:** Choose the language for the app interface.

These do not change how the server works; they only affect appearance and text.

### 4.14. Consent to ads (if shown)

- **What it is:** An option to open a privacy screen where you can manage your **ad consent**.
- **Who sees it:** Only users of the free version when the app needs your choice.
- **Effect on the server:** This does **not** change how the server works; it only controls how ads are personalized.

---

## 5. Understanding "Local Server" and Safety

Many users are confused by the word "server".

- This server runs **on your own device**.
- By default, it listens only on your **local network** (your Wi‑Fi).
- Other people on the Internet **cannot** access it unless you change your router settings (port forwarding, static IP, etc.). This is **not recommended** if you do not know exactly what you are doing.

To stay safe:

- Use it mainly on your **home network**.
- Avoid running it on public Wi‑Fi.
- Enable **password protection** (Users) if other people share your network.
- Use **Read only** if you only want to copy files from the device.

---

## 6. Simple Examples – How to Connect

These are only general ideas. Exact steps may be different for your system.

### 6.1. From a computer with a web browser

1. Start the server in the app.
2. Look at the **address** shown (for example `http://192.168.1.10:8080`).
3. On your computer, open a **web browser**.
4. Type the address exactly as shown and press Enter.
5. If Web interface is enabled, you will see a simple file manager.

### 6.2. From a computer using WebDAV or FTP client

1. Start the server.
2. In your WebDAV or FTP program, create a new connection.
3. Use:
   - **Address/Host:** the address from the app (`http://...` or `ftp://...`).
   - **Port:** the same port as in the app (for example `8080`).
   - **Username/Password:** if you enabled Users.

### 6.3. Using the QR code

1. Start the server.
2. Tap the **QR code** button in the app.
3. Use another phone to **scan the QR code**.
4. It should open the correct address in a browser or client.

---

## 7. Common Problems

- **I do not see my device from the computer**
  - Check that both devices are on the **same Wi‑Fi network**.
  - Check that the server status is **Started**, not Stopped.
  - Try to open the address in a web browser.

- **Permission errors when accessing files**
  - Make sure you **allowed storage permissions** when the app asked.
  - If using an **SD card**, make sure you gave the correct SD card access through the system dialog.

- **Server does not start / Port error**
  - A message may say that a port is not available.
  - Try to change the **Port** setting to another number (for example from `8080` to `8081`).

- **Battery or background issues**
  - Some phones stop background apps aggressively.
  - If the server stops by itself, open **Settings → Run with device / Battery optimization** and follow the instructions.

---

## 8. Summary

- WebDavFS turns your device into a **local file server** for your Wi‑Fi network.
- **Press the big button** to start or stop the server.
- Always **allow storage permissions** so the app can share your files.
- Use **passwords** and **read‑only mode** if you care about safety.
- Use the **address** or **QR code** shown in the app to connect from other devices.

If something is not clear, start with the default settings, keep the server on your **home Wi‑Fi**, and use the app mainly for quick file transfers between your own devices.

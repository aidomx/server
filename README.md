# Aidomx Server

[![npm version](https://img.shields.io/npm/v/@aidomx/server?color=blue)](https://www.npmjs.com/package/@aidomx/server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build](https://img.shields.io/badge/status-development-orange)](#)

**Versi pengembangan lebih lanjut dari [@wadahkode/server](https://github.com/wadahkode/server)**

---

## Konsep

1. **Modular** — Fleksibel dan terstruktur.
2. **Tanpa Dependensi Eksternal** — Mengandalkan modul `node:http` dari Node.js.
3. **Ringan** — Ideal untuk proyek kecil hingga menengah.
4. **Bagian Integral dari Ekosistem [@aidomx/cli](https://github.com/aidomx/cli.git)** — Dirancang untuk bekerja bersama CLI AIDOMX.
5. **Dual Mode** — Mendukung server berbasis PHP atau Node secara opsional.

---

## Tujuan

Karena `@aidomx/server` hanya merupakan _core module_ dari [@aidomx/cli](https://github.com/aidomx/cli.git), fokus utamanya adalah pada _serving engine_ yang ringan dan mudah digunakan.

---

## Dukungan HTTP

| HTTP Method | Status |
| ----------- | ------ |
| GET         | Ready  |
| POST        | Ready  |
| PUT         | Waited |
| PATCH       | Waited |
| DELETE      | Waited |

---

## Sinopsis Singkat

`Aidomx Server` bekerja layaknya Express.js, namun dengan filosofi yang berbeda:

> "Alih-alih menjadi kerangka kerja penuh, Aidomx Server memberi Anda kebebasan dalam menentukan alur dan struktur server Anda."

---

## Instalasi

```bash
npm install @aidomx/server
```

---

## Lisensi

MIT License — Bebas digunakan dan dimodifikasi sesuai kebutuhan proyek Anda.
